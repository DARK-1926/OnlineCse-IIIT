import { NextResponse } from "next/server";

// Helper function to sanitize user string inputs and strip potentially malicious HTML/scripts
function sanitizeInput(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/[<>'"`\\]/g, "") // Strip dangerous script symbols
    .trim()
    .slice(0, 200); // Bound length to prevent buffer/memory exhaustion
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[+0-9\s-]{7,20}$/;

export async function POST(request: Request) {
  try {
    // 1. Enforce payload size limit (max 30KB) to prevent Denial of Service memory exhaustion
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 30 * 1024) {
      return NextResponse.json(
        { error: "Payload too large. Request rejected." },
        { status: 413 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON format." },
        { status: 400 }
      );
    }

    // 2. Anti-Bot Honeypot Field Check
    // If the hidden 'website_hp' field is filled, it's an automated bot crawler
    if (body.website_hp) {
      // Deceptively return 200 OK so bot doesn't retry with alternate attack vectors
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // 3. Extract and Sanitize Fields
    const name = sanitizeInput(body.name);
    const email = sanitizeInput(body.email).toLowerCase();
    const phone = sanitizeInput(body.phone);
    const experience = sanitizeInput(body.experience) || "1-3 Years";
    const qualification = sanitizeInput(body.qualification) || "B.Tech / B.E.";
    const city = sanitizeInput(body.city);
    const state = sanitizeInput(body.state);
    const consent = Boolean(body.consent);

    // 4. Strict Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 422 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    if (!phone || !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid phone/mobile number." },
        { status: 422 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required to process your academic inquiry." },
        { status: 422 }
      );
    }

    // 5. In production, this can be safely recorded to a database using parameterized queries (e.g. Prisma / Drizzle)
    // or dispatched to the institutional admissions CRM.
    console.log(`[SECURE INQUIRY LOG] Validated submission for: ${name} (${email}) - ${qualification}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your academic inquiry has been securely registered. An admissions advisor will contact you within 24 hours.",
        referenceId: `IIITDWD-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    // Fail safely: Never leak internal error message, stack trace, or database structure to client
    console.error("[INQUIRY_API_ERROR]", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again shortly." },
      { status: 500 }
    );
  }
}
