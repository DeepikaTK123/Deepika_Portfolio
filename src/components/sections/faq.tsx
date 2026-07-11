"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="relative section-padding overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="Frequently Asked Questions"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              Clear answers to the questions clients ask most before starting a
              project.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <FadeIn key={faq.id} delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-3xl border border-white/[0.06] bg-card transition-all duration-500",
                    isOpen && "border-white/[0.12] bg-white/[0.02]"
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-muted transition-all duration-300",
                        isOpen && "rotate-180 border-accent/30 bg-accent/10 text-accent"
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-muted leading-relaxed sm:px-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
