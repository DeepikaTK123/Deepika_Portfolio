import nodemailer from "nodemailer";
import type { ConsultationFormData } from "@/lib/validations/consultation";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;

  if (!host || !user || !pass || !from) {
    throw new Error("SMTP configuration is incomplete.");
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    from,
  };
}

export async function sendConsultationEmail(data: ConsultationFormData) {
  const smtp = getSmtpConfig();
  const to =
    process.env.CONSULTATION_TO_EMAIL || "deepikakumar78910@gmail.com";
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
  });

  const text = [
    "New consultation request from your portfolio website.",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Company: ${data.companyName || "Not provided"}`,
    `Project Type: ${data.projectType}`,
    "",
    "Project Description:",
    data.projectDescription,
    "",
    `Submitted At: ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin-bottom: 8px;">New Consultation Request</h2>
      <p style="color: #666; margin-top: 0;">Submitted from your portfolio website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr><td style="padding: 8px 0; font-weight: 600;">Name</td><td>${data.fullName}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td>${data.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Phone</td><td>${data.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Company</td><td>${data.companyName || "Not provided"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Project Type</td><td>${data.projectType}</td></tr>
      </table>
      <p style="font-weight: 600; margin-top: 24px;">Project Description</p>
      <p style="white-space: pre-wrap;">${data.projectDescription}</p>
      <p style="color: #666; margin-top: 24px;"><strong>Submitted At:</strong> ${submittedAt}</p>
    </div>
  `;

  await transporter.sendMail({
    from: smtp.from,
    to,
    replyTo: data.email,
    subject: "New Consultation Request from Portfolio Website",
    text,
    html,
  });
}
