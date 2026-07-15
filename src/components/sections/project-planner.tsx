"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { FadeIn } from "@/components/effects/fade-in";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { PlannerProgress } from "@/components/planner/progress-bar";
import { OptionCard } from "@/components/planner/option-card";
import { EstimateBox } from "@/components/planner/estimate-box";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useConsultation } from "@/components/consultation/consultation-provider";
import {
  estimateTimeline,
  plannerDesignOptions,
  plannerFeatures,
  plannerGoals,
} from "@/data/planner";
import {
  validatePlannerContact,
  type PlannerContactForm,
} from "@/lib/validations/planner";
import { cn } from "@/lib/utils";

const EMAILJS_SERVICE_ID = "service_67ncm7a";
const EMAILJS_TEMPLATE_ID = "template_87hn85u";
const EMAILJS_PUBLIC_KEY = "ky548YqtPzUuTrjLn";

const initialContact: PlannerContactForm = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  message: "",
};

export function ProjectPlannerSection() {
  const { showToast } = useConsultation();
  const [step, setStep] = useState(1);
  const [goalId, setGoalId] = useState<string | null>(null);
  const [featureIds, setFeatureIds] = useState<string[]>([]);
  const [designId, setDesignId] = useState<string | null>(null);
  const [contact, setContact] = useState<PlannerContactForm>(initialContact);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const estimate = useMemo(
    () => estimateTimeline(goalId, featureIds, designId),
    [goalId, featureIds, designId]
  );

  const contactErrors = useMemo(
    () => validatePlannerContact(contact),
    [contact]
  );

  const canNext =
    (step === 1 && Boolean(goalId)) ||
    (step === 2 && featureIds.length > 0) ||
    (step === 3 && Boolean(designId)) ||
    step === 4;

  const toggleFeature = (id: string) => {
    setFeatureIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const goNext = () => {
    if (!canNext || step >= 4) return;
    setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step <= 1) return;
    setStep((s) => s - 1);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const errors = validatePlannerContact(contact);
    if (Object.keys(errors).length > 0 || !goalId || !designId) return;

    const goal = plannerGoals.find((g) => g.id === goalId);
    const design = plannerDesignOptions.find((d) => d.id === designId);
    const features = plannerFeatures
      .filter((f) => featureIds.includes(f.id))
      .map((f) => f.title)
      .join(", ");

    const message = [
      contact.message.trim() || "No additional message.",
      "",
      "--- Project Planner ---",
      `Goal: ${goal?.title ?? goalId}`,
      `Features: ${features || "None selected"}`,
      `Design readiness: ${design?.title ?? designId}`,
      `Estimate prototype: ${estimate.prototype}`,
      `Estimate full delivery: ${estimate.fullDelivery}`,
    ].join("\n");

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: contact.fullName,
          email: contact.email,
          phone: contact.phone,
          company: contact.businessName || "Not provided",
          project_type: goal?.subtitle ?? "Project Planner",
          message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      showToast(
        "success",
        "Thank you! Your project planner request was sent. I'll review it and reply within 24 hours."
      );
      setStep(1);
      setGoalId(null);
      setFeatureIds([]);
      setDesignId(null);
      setContact(initialContact);
      setSubmitAttempted(false);
    } catch (error) {
      console.error("EmailJS planner error:", error);
      showToast(
        "error",
        "Something went wrong sending your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="planner"
      className="relative section-padding overflow-hidden"
      aria-label="Project Planner"
    >
      <div className="container-wide">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <FadeIn>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
              Project Planner
            </p>
            <h2 className="text-heading font-bold">
              Plan your build in a few steps
            </h2>
            <p className="mt-5 text-body text-muted">
              Answer a short set of questions and I&apos;ll follow up with a
              clear proposal based on your goals and scope.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="card-panel mx-auto max-w-3xl p-5 sm:p-8 md:p-10">
            <PlannerProgress step={step} />

            {step === 1 && (
              <div>
                <h3 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">
                  1. What is your main project goal?
                </h3>
                <div className="space-y-3">
                  {plannerGoals.map((goal) => (
                    <OptionCard
                      key={goal.id}
                      title={goal.title}
                      description={goal.subtitle}
                      icon={goal.icon}
                      selected={goalId === goal.id}
                      onClick={() => setGoalId(goal.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
                  2. What features does the application need?
                </h3>
                <p className="mb-6 text-sm text-muted">
                  Select all that apply. This helps estimate complexity and
                  timeline.
                </p>
                <div className="space-y-3">
                  {plannerFeatures.map((feature) => (
                    <OptionCard
                      key={feature.id}
                      title={feature.title}
                      description={feature.description}
                      multi
                      selected={featureIds.includes(feature.id)}
                      onClick={() => toggleFeature(feature.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">
                  3. Do you have mockups or designs ready?
                </h3>
                <div className="space-y-3">
                  {plannerDesignOptions.map((option) => (
                    <OptionCard
                      key={option.id}
                      title={option.title}
                      description={option.description}
                      selected={designId === option.id}
                      onClick={() => setDesignId(option.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
                    4. Request timeline &amp; scope estimation
                  </h3>
                  <p className="mb-6 text-sm text-muted">
                    Submit your contact details. I&apos;ll compile a timeline
                    and send a proposal within 24 hours.
                  </p>
                  <EstimateBox estimate={estimate} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    id="planner-name"
                    label="Full Name"
                    required
                    error={submitAttempted ? contactErrors.fullName : undefined}
                  >
                    <Input
                      id="planner-name"
                      value={contact.fullName}
                      onChange={(e) =>
                        setContact((c) => ({ ...c, fullName: e.target.value }))
                      }
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </Field>
                  <Field id="planner-business" label="Business Name">
                    <Input
                      id="planner-business"
                      value={contact.businessName}
                      onChange={(e) =>
                        setContact((c) => ({
                          ...c,
                          businessName: e.target.value,
                        }))
                      }
                      placeholder="Optional"
                      autoComplete="organization"
                    />
                  </Field>
                  <Field
                    id="planner-email"
                    label="Email Address"
                    required
                    hint="Gmail only"
                    error={submitAttempted ? contactErrors.email : undefined}
                  >
                    <Input
                      id="planner-email"
                      type="email"
                      value={contact.email}
                      onChange={(e) =>
                        setContact((c) => ({ ...c, email: e.target.value }))
                      }
                      placeholder="you@gmail.com"
                      autoComplete="email"
                    />
                  </Field>
                  <Field
                    id="planner-phone"
                    label="Contact Number"
                    required
                    hint="Country code + 10 digits"
                    error={submitAttempted ? contactErrors.phone : undefined}
                  >
                    <Input
                      id="planner-phone"
                      type="tel"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact((c) => ({ ...c, phone: e.target.value }))
                      }
                      placeholder="+91 9876543210"
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <Field id="planner-message" label="Additional Message">
                  <Textarea
                    id="planner-message"
                    value={contact.message}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, message: e.target.value }))
                    }
                    placeholder="Tell me about timelines, constraints, or anything else I should know…"
                  />
                </Field>

                <MagneticButton
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Submit Request & Get Proposal"
                  )}
                </MagneticButton>
              </form>
            )}

            {step < 4 && (
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 1}
                  className={cn(
                    "h-11 min-w-[96px] rounded-full px-5 text-sm font-medium transition-colors",
                    step === 1
                      ? "cursor-not-allowed text-muted/40"
                      : "border border-white/[0.1] text-foreground hover:bg-white/[0.05]"
                  )}
                >
                  Back
                </button>
                <MagneticButton
                  type="button"
                  variant="gradient"
                  onClick={goNext}
                  disabled={!canNext}
                >
                  Next Step
                </MagneticButton>
              </div>
            )}

            {step === 4 && (
              <div className="mt-6">
                <button
                  type="button"
                  onClick={goBack}
                  className="h-11 rounded-full border border-white/[0.1] px-5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.05]"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
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
      <div className="flex items-baseline justify-between gap-2">
        <Label htmlFor={id}>
          {label}
          {required && <span className="ml-1 text-accent">*</span>}
        </Label>
        {hint && !error && (
          <span className="shrink-0 text-[11px] text-muted">{hint}</span>
        )}
      </div>
      {children}
      <p
        className={cn(
          "min-h-[1rem] text-xs leading-4",
          error ? "text-red-400" : "select-none text-transparent"
        )}
        aria-live="polite"
      >
        {error || "\u00a0"}
      </p>
    </div>
  );
}
