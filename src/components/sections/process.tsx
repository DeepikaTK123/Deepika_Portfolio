"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const [activeId, setActiveId] = useState(processSteps[1]?.id ?? processSteps[0].id);
  const active =
    processSteps.find((step) => step.id === activeId) ?? processSteps[0];

  return (
    <section
      id="process"
      className="relative section-padding overflow-hidden"
      aria-label="Development Process"
    >
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="The Delivery Lifecycle"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              A transparent path from first conversation to final handover —
              designed for business owners who want clarity at every step.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-8">
            {/* Left: step list */}
            <div className="space-y-3">
              {processSteps.map((step) => {
                const isActive = step.id === activeId;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveId(step.id)}
                    className={cn(
                      "group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 sm:px-5 sm:py-5",
                      isActive
                        ? "border-cyan/40 bg-white/[0.04] shadow-glow-cyan"
                        : "border-white/[0.06] bg-card hover:border-white/[0.12] hover:bg-white/[0.02]"
                    )}
                    aria-pressed={isActive}
                  >
                    <span
                      className={cn(
                        "w-1 self-stretch rounded-full transition-colors",
                        isActive ? "bg-cyan" : "bg-transparent"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "text-2xl font-bold tracking-tight",
                        isActive ? "text-cyan" : "text-muted/50"
                      )}
                    >
                      {step.number}
                    </span>
                    <span
                      className={cn(
                        "text-base font-semibold sm:text-lg",
                        isActive ? "text-foreground" : "text-muted"
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: detail panel */}
            <div className="card-panel relative min-h-[320px] overflow-hidden p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan">
                      Step {active.number}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-muted">
                      <Clock3 className="h-4 w-4 text-cyan" />
                      Typical duration: {active.duration}
                    </span>
                  </div>

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10">
                      <active.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {active.title}
                    </h3>
                  </div>

                  <p className="max-w-xl text-muted leading-relaxed">
                    {active.description}
                  </p>

                  <div className="mt-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {active.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-foreground/90"
                        >
                          <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-[10px] font-bold text-cyan">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <MagneticButton asChild variant="gradient" size="sm">
                      <Link href="#planner">
                        Go to Planner
                        <ArrowRight size={16} />
                      </Link>
                    </MagneticButton>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
