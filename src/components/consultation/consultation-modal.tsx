"use client";

import { useEffect, useMemo, useState } from "react";
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
import { getConsultationApiUrl } from "@/lib/consultation-api";
import {
  PROJECT_TYPES,
  type ConsultationFormData,
  type ProjectType,
  validateConsultationForm,
} from "@/lib/validations/consultation";
import { cn } from "@/lib/utils";

const initialForm: ConsultationFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  projectType: "Web Application",
  projectDescription: "",
};

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const { showToast } = useConsultation();
  const [form, setForm] = useState<ConsultationFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = useMemo(() => validateConsultationForm(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  const missingFields = useMemo(() => {
    const labels: Record<string, string> = {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      projectDescription: "Project Description",
    };
    return Object.keys(errors)
      .filter((key) => key in labels)
      .map((key) => labels[key]);
  }, [errors]);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const validationErrors = validateConsultationForm(form);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(getConsultationApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to send consultation request.");
      }

      onOpenChange(false);
      showToast(
        "success",
        "Thank you! Your consultation request has been sent successfully. I'll contact you soon."
      );
    } catch (error) {
      showToast(
        "error",
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="overflow-y-auto px-6 pb-2 space-y-5 max-h-[55vh]">
            <Field
              id="fullName"
              label="Full Name"
              required
              error={submitAttempted ? errors.fullName : undefined}
            >
              <Input
                id="fullName"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="Your full name"
                autoComplete="name"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                id="email"
                label="Email Address"
                required
                error={submitAttempted ? errors.email : undefined}
              >
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </Field>

              <Field
                id="phone"
                label="Phone Number"
                required
                error={submitAttempted ? errors.phone : undefined}
              >
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="9876543210"
                  autoComplete="tel"
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
                  "flex h-12 w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-foreground backdrop-blur-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent/30"
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
              error={submitAttempted ? errors.projectDescription : undefined}
            >
              <Textarea
                id="projectDescription"
                value={form.projectDescription}
                onChange={(e) =>
                  updateField("projectDescription", e.target.value)
                }
                placeholder="Tell me about your goals, timeline, and requirements..."
              />
              <p className="text-xs text-muted">
                {form.projectDescription.trim().length}/5 characters minimum
              </p>
            </Field>
          </div>

          {!isValid && !submitAttempted && missingFields.length > 0 && (
            <p className="px-6 pt-2 text-xs text-muted">
              Complete: {missingFields.join(", ")}
            </p>
          )}

          <div className="flex flex-col-reverse sm:flex-row gap-3 px-6 py-6 border-t border-white/[0.06] mt-2">
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

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
