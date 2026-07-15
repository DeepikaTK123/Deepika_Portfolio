"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { FadeIn } from "@/components/effects/fade-in";
import { GradientBlob } from "@/components/effects/gradient-blob";
import { contactEmail, linkedInUrl, siteConfig } from "@/data/site";

const contactDetails = [
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    emoji: "📧",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deepika-tk07",
    href: linkedInUrl,
    emoji: "💼",
    external: true,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: undefined,
    emoji: "📍",
  },
] as const;

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      aria-label="Contact"
    >
      <div className="container-wide">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-purple/15" />
            <GradientBlob
              className="right-[-10%] top-[-30%]"
              color="rgba(59,130,246,0.2)"
              size="600px"
            />
            <GradientBlob
              className="bottom-[-30%] left-[-10%]"
              color="rgba(139,92,246,0.15)"
              size="500px"
              delay={2}
            />
            <div className="absolute inset-0 rounded-3xl border border-white/[0.08] sm:rounded-4xl" />

            <div className="relative px-5 py-14 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
              <div className="mx-auto max-w-3xl text-center">
                <motion.h2
                  className="text-heading font-bold text-balance"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Let&apos;s Build Your Next Project
                </motion.h2>

                <motion.p
                  className="mx-auto mt-5 max-w-2xl text-body text-muted sm:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Have an idea for a web application?
                  <br className="hidden sm:block" />
                  Let&apos;s discuss your requirements and build a solution that
                  helps your business grow.
                </motion.p>
              </div>

              <motion.div
                className="mx-auto mt-10 grid max-w-3xl gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                {contactDetails.map((item) => {
                  const content = (
                    <>
                      <span className="text-lg" aria-hidden="true">
                        {item.emoji}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                          {item.label}
                        </span>
                        <span className="mt-1 block truncate text-sm font-medium text-foreground">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  const className =
                    "group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]";

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={"external" in item && item.external ? "_blank" : undefined}
                        rel={
                          "external" in item && item.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={className}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={item.label} className={className}>
                      {content}
                    </div>
                  );
                })}
              </motion.div>

              <motion.div
                className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="inline-flex items-center gap-2 text-sm text-muted">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                  Available for Freelance Projects
                </p>
                <p className="inline-flex items-center gap-2 text-sm text-muted">
                  <Clock3 className="h-4 w-4 text-accent" />
                  Usually responds within 24 hours
                </p>
              </motion.div>

              <motion.div
                className="mt-8 text-center sm:mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                <MagneticButton
                  asChild
                  size="lg"
                  variant="gradient"
                  className="w-full sm:w-auto"
                >
                  <Link href="#planner">
                    Start Project
                    <ArrowRight size={18} />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
