import nodemailer, { Transporter } from "nodemailer";

const transporter: Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

export function sendNQMail(
  from: string,
  to: string,
  subject: string,
  text: string,
  html?: string
) {
  try {
    transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error("Failed to send email", error);
  }
}
