"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative section-padding overflow-hidden"
      aria-label="Services"
    >
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="What I Build"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              Focused offerings for businesses that need reliable web products —
              from first build to meaningful upgrades.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {services.map((service, i) => {
            const isOpen = openId === service.id;
            return (
              <FadeIn key={service.id} delay={i * 0.08}>
                <motion.article
                  className={cn(
                    "group relative flex h-full flex-col rounded-3xl border border-white/[0.08] bg-card p-6 sm:p-8",
                    "transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.02]",
                    "hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
                  )}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 transition-transform duration-500 group-hover:scale-110">
                        <service.icon
                          className="h-5 w-5 text-cyan"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {service.title}
                      </h3>
                    </div>
                    {service.badge && (
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                          service.badgeTone === "purple"
                            ? "bg-purple/15 text-purple"
                            : "bg-cyan/15 text-cyan"
                        )}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <p className="flex-1 text-[0.95rem] leading-relaxed text-muted md:text-base">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-cyan"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                  >
                    Click to see capabilities &amp; stack
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-4 border-t border-white/[0.06] pt-4">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                              Capabilities
                            </p>
                            <ul className="grid gap-2 sm:grid-cols-2">
                              {service.capabilities.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-muted"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
