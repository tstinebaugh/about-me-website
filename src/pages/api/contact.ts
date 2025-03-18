// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

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
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
}
