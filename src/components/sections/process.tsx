"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative section-padding overflow-hidden"
      aria-label="Development Process"
    >
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="Development Process"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              A simple, transparent path from first conversation to final
              delivery.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-3xl">
          {processSteps.map((step, i) => {
            const isLast = i === processSteps.length - 1;
            return (
              <FadeIn key={step.id} delay={i * 0.08}>
                <div className="relative">
                  <motion.article
                    className="group relative rounded-3xl border border-white/[0.06] bg-card p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.02] sm:p-8"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                      <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                        <span className="text-3xl font-bold tracking-tight text-accent/80 sm:text-4xl">
                          {step.number}
                        </span>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 transition-transform duration-500 group-hover:scale-110">
                          <step.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>

                  {!isLast && (
                    <div className="flex justify-center py-3 sm:py-4" aria-hidden="true">
                      <ArrowDown className="h-5 w-5 text-accent/40" />
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
