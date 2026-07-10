"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  isConsultationFormValid,
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
  const [errors, setErrors] = useState<
    Partial<Record<keyof ConsultationFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState(false);

  const isValid = isConsultationFormValid(form);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setErrors({});
      setTouched(false);
      setIsSubmitting(false);
    }
  }, [open]);

  const updateField = <K extends keyof ConsultationFormData>(
    key: K,
    value: ConsultationFormData[K]
  ) => {
    const next = { ...form, [key]: value };
    setForm(next);
    if (touched) {
      setErrors(validateConsultationForm(next));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setTouched(true);

    const validationErrors = validateConsultationForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0 || !isValid) {
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col max-h-[90vh]"
        >
          <DialogHeader>
            <DialogTitle>Book a Free Consultation</DialogTitle>
            <DialogDescription>
              Tell me a little about your project, and I&apos;ll get back to you
              within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 overflow-hidden"
          >
            <div className="overflow-y-auto px-6 pb-2 space-y-5 max-h-[55vh]">
              <Field
                id="fullName"
                label="Full Name"
                required
                error={errors.fullName}
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
                  error={errors.email}
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
                  error={errors.phone}
                >
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <Field id="companyName" label="Company Name" error={errors.companyName}>
                <Input
                  id="companyName"
                  value={form.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  placeholder="Optional"
                  autoComplete="organization"
                />
              </Field>

              <Field
                id="projectType"
                label="Project Type"
                required
                error={errors.projectType}
              >
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
                error={errors.projectDescription}
              >
                <Textarea
                  id="projectDescription"
                  value={form.projectDescription}
                  onChange={(e) =>
                    updateField("projectDescription", e.target.value)
                  }
                  placeholder="Tell me about your goals, timeline, and requirements..."
                />
              </Field>
            </div>

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
        </motion.div>
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
