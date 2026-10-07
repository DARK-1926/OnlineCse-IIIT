import { NextResponse } from "next/server";

function sanitizeInput(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>/g, "")
    .replace(/[<>'"`\\]/g, "")
    .trim()
    .slice(0, 200);
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[+0-9\s-]{7,20}$/;

export async function POST(request: Request) {
  try {
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 20 * 1024) {
      return NextResponse.json(
        { error: "Payload too large." },
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

    // Honeypot trap
    if (body.website_hp) {
      return NextResponse.json({ success: true, brochureUrl: "#" }, { status: 200 });
    }

    const name = sanitizeInput(body.name);
    const email = sanitizeInput(body.email).toLowerCase();
    const phone = sanitizeInput(body.phone);
    const specialization = sanitizeInput(body.specialization) || "general";

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 422 });
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 422 });
    }

    if (!phone || !PHONE_REGEX.test(phone)) {
      return NextResponse.json({ error: "Please enter a valid mobile number." }, { status: 422 });
    }

    console.log(`[BROCHURE REQUEST] ${name} requested brochure for: ${specialization}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your brochure access has been unlocked.",
        specialization,
        downloadReady: true,
        fileInfo: {
          title: "IIIT Dharwad Hybrid mode M.Tech in CSE - Comprehensive Prospectus 2026",
          credits: 60,
          semesters: 4,
          format: "PDF Document (Official CCE Release)",
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[BROCHURE_API_ERROR]", err);
    return NextResponse.json(
      { error: "Unable to process brochure request at this moment." },
      { status: 500 }
    );
  }
}
