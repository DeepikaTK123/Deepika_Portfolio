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

    let message = "Failed to send consultation request.";

    if (error instanceof Error) {
      if (error.message.includes("SMTP")) {
        message = error.message.replace("SMTP: ", "");
      } else if ("code" in error && error.code === "EAUTH") {
        message =
          "Gmail login failed. Use a Gmail App Password in .env.local (not your regular password).";
      } else if (error.message) {
        message = error.message;
      }
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
