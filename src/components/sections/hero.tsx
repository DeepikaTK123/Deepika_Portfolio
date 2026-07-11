"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { GradientBlob } from "@/components/effects/gradient-blob";
import { DeveloperIllustration } from "@/components/illustrations/developer-illustration";
import { heroFeatures } from "@/data/site";
import { useConsultation } from "@/components/consultation/consultation-provider";

export function HeroSection() {
  const { openConsultation } = useConsultation();
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-label="Hero"
    >
      <GradientBlob
        className="left-[-10%] top-[-10%]"
        color="rgba(59,130,246,0.12)"
        size="700px"
      />
      <GradientBlob
        className="bottom-[-20%] right-[-10%]"
        color="rgba(59,130,246,0.08)"
        size="500px"
        delay={2}
      />
      <GradientBlob
        className="right-[20%] top-[30%]"
        color="rgba(34,197,94,0.05)"
        size="400px"
        delay={4}
      />

      <div className="section-padding w-full pb-16 pt-28 sm:pb-20 sm:pt-32 md:pt-36">
        <div className="container-wide">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="flex justify-center lg:justify-start"
              >
                <Badge variant="accent" className="mb-6 sm:mb-8">
                  <span className="mr-2" aria-hidden="true">
                    ✨
                  </span>
                  Available for Freelance Projects
                </Badge>
              </motion.div>

              <motion.h1
                className="text-hero font-bold text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Building Modern Web Applications That{" "}
                <span className="text-gradient">Drive Business Growth</span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-xl text-body text-muted sm:mt-8 lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                I help startups, businesses, and entrepreneurs build secure,
                scalable, and high-performance web applications that solve real
                business problems.
              </motion.p>

              <motion.div
                className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.9 }}
              >
                <MagneticButton asChild size="lg" className="w-full sm:w-auto">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight size={18} />
                  </Link>
                </MagneticButton>
                <MagneticButton
                  variant="secondary"
                  size="lg"
                  type="button"
                  className="w-full sm:w-auto"
                  onClick={openConsultation}
                >
                  <Calendar size={18} />
                  Book a Call
                </MagneticButton>
              </motion.div>

              <motion.ul
                className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:items-start lg:justify-start"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.1 }}
              >
                {heroFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-sm text-muted backdrop-blur-sm"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="font-medium text-foreground/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 2.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <DeveloperIllustration />

              <motion.div
                className="absolute bottom-2 left-2 right-2 mx-auto w-auto max-w-sm glass rounded-2xl p-4 sm:bottom-4 sm:left-0 sm:right-0 sm:w-fit sm:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.3 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    Open for new projects
                  </p>
                </div>
                <p className="text-xs text-muted">
                  Custom apps · Dashboards · Backend systems
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
