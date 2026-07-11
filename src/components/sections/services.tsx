"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative section-padding overflow-hidden"
      aria-label="Services"
    >
      <div className="container-wide">
        <div className="mb-12 max-w-2xl sm:mb-16 md:mb-20">
          <TextReveal
            text="Services"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              Premium digital solutions designed to help businesses grow —
              from custom web applications and dashboards to scalable backends
              and thoughtful product enhancements.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <motion.div
                className={cn(
                  "group relative h-full rounded-3xl border border-white/[0.06] bg-card p-6 sm:p-8 md:p-10",
                  "hover:border-white/[0.12] hover:bg-white/[0.02]",
                  "transition-all duration-500"
                )}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-7"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <service.icon
                      className="w-6 h-6 text-accent transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  <h3 className="text-xl md:text-[1.35rem] font-semibold tracking-tight text-foreground mb-4 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-muted leading-relaxed text-[0.95rem] md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
