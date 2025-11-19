// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import NextRateLimit from "next-rate-limit"; // Import NextRateLimit

// Initialize the rate limiter with desired options
// Example: 10 requests per 10 minutes (600 seconds) per IP address
const limiter = new NextRateLimit({
  interval: 60 * 10 * 1000, // 10 minutes
  uniqueToken: "contact_form_limit", // A unique string to identify this limiter
  maxRequests: 10, // Max 10 requests per interval
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Apply rate limiting
  try {
    await limiter.check(req, res);
  } catch (_error) {
    // _error is of type unknown by default in TypeScript 4.4+
    const errorMessage = (_error instanceof Error) ? _error.message : "An unknown rate limiting error occurred.";
    return res.status(429).json({ message: errorMessage });
  }

  try {
    const { name, email, message, honeypot } = req.body;

    // Honeypot check
    if (honeypot) {
      console.log("Honeypot field filled, likely a bot.");
      return res.status(200).json({ message: "Message sent successfully" }); // Return success to avoid tipping off bots
    }

    // Create a transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_EMAIL_USER, // Your email address
        pass: process.env.NEXT_EMAIL_PASSWORD, // Your email password or API key
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.NEXT_EMAIL_USER,
      to: process.env.NEXT_EMAIL_RECIPIENT,
      subject: `New message from ${name} via your website`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (_error) {
    // _error is of type unknown by default in TypeScript 4.4+
    console.error("Error sending email:", _error);
    const errorMessage = (_error instanceof Error) ? _error.message : "An unknown error occurred while sending the email.";
    res.status(500).json({ message: errorMessage });
  }
}
