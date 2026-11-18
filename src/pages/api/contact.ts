import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Verifies the reCAPTCHA token when RECAPTCHA_SECRET_KEY is configured; skipped otherwise. */
async function verifyRecaptcha(token: unknown): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, honeypot, recaptchaToken } = req.body ?? {};

  // Bots fill the hidden field; pretend success so they don't retry.
  if (honeypot) {
    return res.status(200).json({ message: "Message sent successfully" });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    message.length > MAX_MESSAGE ||
    !EMAIL_RE.test(email)
  ) {
    return res.status(400).json({ message: "Please provide a valid name, email, and message." });
  }

  try {
    if (!(await verifyRecaptcha(recaptchaToken))) {
      return res.status(400).json({ message: "CAPTCHA verification failed. Please try again." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    const safeName = name.trim().replace(/[\r\n]+/g, " ");

    await transporter.sendMail({
      from: process.env.NEXT_EMAIL_USER,
      to: process.env.NEXT_EMAIL_RECIPIENT,
      replyTo: email,
      subject: `New message from ${safeName} via your website`,
      text: `Name: ${safeName}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
}
