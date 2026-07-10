export const PROJECT_TYPES = [
  "Web Application",
  "Backend API",
  "Admin Dashboard",
  "Automation",
  "Existing Project Enhancement",
  "Other",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: ProjectType;
  projectDescription: string;
}

const GMAIL_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

export function isValidEmail(email: string): boolean {
  return GMAIL_EMAIL_REGEX.test(email.trim());
}

/** Country code (1–3 digits) followed by exactly 10-digit mobile number. */
export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return /^\d{11,13}$/.test(digits);
}

export function validateConsultationForm(
  data: ConsultationFormData
): Partial<Record<keyof ConsultationFormData, string>> {
  const errors: Partial<Record<keyof ConsultationFormData, string>> = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Use a Gmail address (e.g. name@gmail.com).";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!isValidPhone(data.phone)) {
    errors.phone = "Use country code + 10 digits (e.g. +91 9876543210).";
  }

  if (!data.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!data.projectDescription.trim()) {
    errors.projectDescription = "Project description is required.";
  } else if (data.projectDescription.trim().length < 5) {
    errors.projectDescription =
      "Please add at least 5 characters about your project.";
  }

  return errors;
}

export function isConsultationFormValid(data: ConsultationFormData): boolean {
  return Object.keys(validateConsultationForm(data)).length === 0;
}
