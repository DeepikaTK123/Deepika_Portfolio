"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="relative section-padding overflow-hidden" aria-label="Process">
      <div className="container-wide">
        <div className="max-w-2xl mb-20">
          <TextReveal
            text="My Process"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A proven methodology that ensures quality delivery from concept to
              production.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.08] md:-translate-x-px hidden sm:block" />

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;

              return (
                <FadeIn key={step.id} delay={i * 0.1}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-16 items-center mb-12 md:mb-24">
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background -translate-x-1.5 md:-translate-x-1.5 top-8 z-10 hidden sm:block" />

                    {/* Content */}
                    <div
                      className={`pl-16 md:pl-0 ${
                        isEven
                          ? "md:col-start-1 md:text-right md:pr-16"
                          : "md:col-start-2 md:pl-16"
                      }`}
                    >
                      <motion.div
                        className="inline-flex items-center gap-3 mb-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <step.icon className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-xs font-medium text-accent tracking-wider uppercase">
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                      </motion.div>

                      <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
                        {step.title}
                      </h3>

                      <p className="text-muted leading-relaxed max-w-md md:ml-auto">
                        {step.description}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div
                      className={`hidden md:block ${
                        isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                      }`}
                    />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
