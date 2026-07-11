"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative section-padding overflow-hidden"
      aria-label="Industries I Serve"
    >
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="Industries I Serve"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              Practical web applications and backend systems for teams across
              growing industries.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
          {industries.map((industry, i) => (
            <FadeIn key={industry.id} delay={i * 0.05}>
              <motion.article
                className={cn(
                  "group flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-white/[0.06] bg-card p-5 text-center sm:p-7",
                  "transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.02]",
                  "hover:shadow-[0_16px_40px_rgba(59,130,246,0.08)]"
                )}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/20 sm:h-14 sm:w-14">
                  <industry.icon
                    className="h-5 w-5 text-accent sm:h-6 sm:w-6"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                  {industry.name}
                </h3>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
