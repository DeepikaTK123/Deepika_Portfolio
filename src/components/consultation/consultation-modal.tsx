"use client";

import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useConsultation } from "@/components/consultation/consultation-provider";
import {
  PROJECT_TYPES,
  type ConsultationFormData,
  type ProjectType,
  validateConsultationForm,
} from "@/lib/validations/consultation";
import { cn } from "@/lib/utils";

const EMAILJS_SERVICE_ID = "service_67ncm7a";
const EMAILJS_TEMPLATE_ID = "template_87hn85u";
const EMAILJS_PUBLIC_KEY = "ky548YqtPzUuTrjLn";

const initialForm: ConsultationFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  projectType: "Web Application",
  projectDescription: "",
};

type TouchedFields = Partial<Record<keyof ConsultationFormData, boolean>>;

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function shouldShowFieldError(
  key: keyof ConsultationFormData,
  value: string,
  error: string | undefined,
  touched: TouchedFields,
  submitAttempted: boolean
): boolean {
  if (!error) return false;
  if (submitAttempted) return true;
  if (touched[key]) return true;
  return value.trim().length > 0;
}

export function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const { showToast } = useConsultation();
  const [form, setForm] = useState<ConsultationFormData>(initialForm);
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = useMemo(() => validateConsultationForm(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setTouched({});
      setSubmitAttempted(false);
      setIsSubmitting(false);
    }
  }, [open]);

  const updateField = <K extends keyof ConsultationFormData>(
    key: K,
    value: ConsultationFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const markTouched = (key: keyof ConsultationFormData) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const fieldError = (key: keyof ConsultationFormData) => {
    const error = errors[key];
    if (
      !shouldShowFieldError(
        key,
        String(form[key]),
        error,
        touched,
        submitAttempted
      )
    ) {
      return undefined;
    }
    return error;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const validationErrors = validateConsultationForm(form);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.companyName || "Not provided",
          project_type: form.projectType,
          message: form.projectDescription,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      setForm(initialForm);
      setTouched({});
      setSubmitAttempted(false);
      onOpenChange(false);
      showToast(
        "success",
        "🎉 Thank you! Your consultation request has been sent successfully. I'll review your requirements and contact you within 24 hours."
      );
    } catch (error) {
      console.error("EmailJS error:", error);

      let message = "Something went wrong. Please try again later.";

      if (error && typeof error === "object" && "status" in error) {
        const emailError = error as { status?: number; text?: string };

        if (emailError.status === 403) {
          message =
            "EmailJS blocked the request. Add deepikatk123.github.io to Allowed Domains in your EmailJS dashboard.";
        } else if (emailError.status === 400) {
          message =
            "Email template error. Check template variables in your EmailJS dashboard.";
        }
      }

      showToast("error", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const descriptionLength = form.projectDescription.trim().length;
  const descriptionError = fieldError("projectDescription");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Book a Free Consultation</DialogTitle>
          <DialogDescription>
            Tell me a little about your project, and I&apos;ll get back to you
            within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
          <div className="max-h-[min(55dvh,55vh)] space-y-5 overflow-y-auto overscroll-contain px-4 pb-2 sm:px-6">
            <Field
              id="fullName"
              label="Full Name"
              required
              error={fieldError("fullName")}
            >
              <Input
                id="fullName"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                onBlur={() => markTouched("fullName")}
                placeholder="Your full name"
                autoComplete="name"
                aria-invalid={Boolean(fieldError("fullName"))}
                className={inputErrorClass(fieldError("fullName"))}
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4 items-start">
              <Field
                id="email"
                label="Email Address"
                required
                hint="Gmail only"
                error={fieldError("email")}
              >
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  onBlur={() => markTouched("email")}
                  placeholder="you@gmail.com"
                  autoComplete="email"
                  aria-invalid={Boolean(fieldError("email"))}
                  className={inputErrorClass(fieldError("email"))}
                />
              </Field>

              <Field
                id="phone"
                label="Phone Number"
                required
                hint="Country code + 10 digits"
                error={fieldError("phone")}
              >
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  onBlur={() => markTouched("phone")}
                  placeholder="+91 9876543210"
                  autoComplete="tel"
                  aria-invalid={Boolean(fieldError("phone"))}
                  className={inputErrorClass(fieldError("phone"))}
                />
              </Field>
            </div>

            <Field id="companyName" label="Company Name">
              <Input
                id="companyName"
                value={form.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                placeholder="Optional"
                autoComplete="organization"
              />
            </Field>

            <Field id="projectType" label="Project Type" required>
              <select
                id="projectType"
                value={form.projectType}
                onChange={(e) =>
                  updateField("projectType", e.target.value as ProjectType)
                }
                className={cn(
                  "flex h-12 min-h-[44px] w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-base text-foreground backdrop-blur-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent/30 md:text-sm"
                )}
              >
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-card">
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              id="projectDescription"
              label="Project Description"
              required
              error={descriptionError}
            >
              <Textarea
                id="projectDescription"
                value={form.projectDescription}
                onChange={(e) =>
                  updateField("projectDescription", e.target.value)
                }
                onBlur={() => markTouched("projectDescription")}
                placeholder="Tell me about your goals, timeline, and requirements..."
                aria-invalid={Boolean(descriptionError)}
                className={inputErrorClass(descriptionError)}
              />
              <p
                className={cn(
                  "text-xs text-right",
                  descriptionError ? "text-red-400" : "text-muted"
                )}
              >
                {descriptionLength}/5 characters minimum
              </p>
            </Field>
          </div>

          <div className="mt-2 flex flex-col-reverse gap-3 border-t border-white/[0.06] px-4 py-5 sm:flex-row sm:px-6 sm:py-6">
            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Request"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function inputErrorClass(hasError?: string) {
  return cn(
    hasError &&
      "border-red-500/70 focus-visible:border-red-500/70 focus-visible:ring-red-500/30"
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-baseline justify-between gap-2 min-h-[1.25rem]">
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </Label>
        {hint && !error && (
          <span className="text-[11px] text-muted shrink-0">{hint}</span>
        )}
      </div>
      {children}
      <p
        className={cn(
          "text-xs min-h-[1rem] leading-4",
          error ? "text-red-400" : "text-transparent select-none"
        )}
        aria-live="polite"
      >
        {error || "\u00a0"}
      </p>
    </div>
  );
}
