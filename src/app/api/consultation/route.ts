import { NextResponse } from "next/server";
import { sendConsultationEmail } from "@/lib/email";
import { validateConsultationPayload } from "@/lib/validations/consultation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateConsultationPayload(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    await sendConsultationEmail(validation.data);

    return NextResponse.json(
      { message: "Consultation request sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Consultation email error:", error);

    const message =
      error instanceof Error && error.message.includes("SMTP")
        ? "Email service is not configured."
        : "Failed to send consultation request.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
