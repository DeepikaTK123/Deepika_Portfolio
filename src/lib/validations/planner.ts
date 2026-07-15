import { isValidEmail, isValidPhone } from "@/lib/validations/consultation";

export interface PlannerContactForm {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

export function validatePlannerContact(
  data: PlannerContactForm
): Partial<Record<keyof PlannerContactForm, string>> {
  const errors: Partial<Record<keyof PlannerContactForm, string>> = {};

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

  return errors;
}
