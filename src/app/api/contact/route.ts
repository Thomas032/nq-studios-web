import { NextResponse } from "next/server";
import { csrfProtection } from "@/lib/csrf";
import { sendNQMail } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    // Get the CSRF token from the request headers
    const csrfToken = req.headers.get("x-csrf-token") || "";

    // CSRF token validation
    await csrfProtection(csrfToken);

    // Get form data (make sure to parse JSON body)
    const { name, email, message } = await req.json();

    console.log("Received contact message:", { name, email, message });

    // Get the email template and pass in the dynamic data
    const webCoreUrl = process.env.WEB_CORE_URL || "";
    const templateResponse = await fetch(
      `${webCoreUrl}/templates/contactMail.html`
    );
    let template = await templateResponse.text();
    template = template.replace("{{name}}", name);

    // Send email to admin
    await sendNQMail(
      process.env.SMTP_USER || "",
      process.env.CONTACT_EMAIL || "",
      "New contact message from website 🗽🎉",
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    );

    // Send notification to the user
    await sendNQMail(
      (process.env.COMPANY_NAME || "") + (process.env.SMTP_USER || ""),
      email,
      "Thank you for contacting us 🎉",
      "We have received your message and will get back to you shortly.",
      template
    );

    console.log("Contact message sent!");

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Invalid CSRF token or error processing form" },
      { status: 403 }
    );
  }
}
