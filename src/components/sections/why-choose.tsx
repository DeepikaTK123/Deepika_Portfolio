"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { whyChooseMe } from "@/data/why-choose";
import { cn } from "@/lib/utils";

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative section-padding overflow-hidden"
      aria-label="Why Choose Me"
    >
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="Why Choose Me"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              A clear, reliable partnership focused on business outcomes —
              not just deliverables.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {whyChooseMe.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <motion.article
                className={cn(
                  "group relative h-full rounded-3xl border border-white/[0.06] bg-card p-7 sm:p-8",
                  "transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.02]",
                  "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]"
                )}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 transition-transform duration-500 group-hover:scale-110">
                    <item.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted">{item.description}</p>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
