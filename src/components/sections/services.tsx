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
        <div className="max-w-2xl mb-20">
          <TextReveal
            text="Services"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              End-to-end backend solutions tailored to your business needs.
              From architecture to deployment, I handle every layer of your
              infrastructure.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <motion.div
                className={cn(
                  "group relative h-full p-8 rounded-3xl border border-white/[0.06] bg-card",
                  "hover:border-white/[0.12] hover:bg-white/[0.02]",
                  "transition-all duration-500"
                )}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted leading-relaxed">
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
