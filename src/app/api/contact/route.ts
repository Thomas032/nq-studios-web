import { NextResponse } from "next/server";
import { csrfProtection } from "@/lib/csrf";

export async function POST(req: Request) {
  try {
    // Get the CSRF token from the request headers
    const csrfToken = req.headers.get("x-csrf-token") || "";

    // CSRF token validation
    await csrfProtection(csrfToken);

    // Get form data (make sure to parse JSON body)
    const { name, email, message } = await req.json();

    console.log("Received contact message:", { name, email, message });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch {
    return NextResponse.json(
      { message: "Invalid CSRF token or error processing form" },
      { status: 403 }
    );
  }
}
