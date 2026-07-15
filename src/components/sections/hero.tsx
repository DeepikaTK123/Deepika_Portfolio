"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { GradientBlob } from "@/components/effects/gradient-blob";
import { TerminalMockup } from "@/components/illustrations/terminal-mockup";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-label="Hero"
    >
      <GradientBlob
        className="left-[-10%] top-[-10%]"
        color="rgba(59,130,246,0.14)"
        size="700px"
      />
      <GradientBlob
        className="bottom-[-20%] right-[-10%]"
        color="rgba(139,92,246,0.1)"
        size="500px"
        delay={2}
      />
      <GradientBlob
        className="right-[20%] top-[30%]"
        color="rgba(34,211,238,0.06)"
        size="400px"
        delay={4}
      />

      <div className="section-padding w-full pb-20 pt-28 sm:pb-24 sm:pt-32 md:pt-36">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="flex justify-center lg:justify-start"
              >
                <Badge variant="accent" className="mb-6 sm:mb-8">
                  <Zap className="mr-1.5 h-3.5 w-3.5 text-cyan" />
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
                Modern Web Applications.{" "}
                <span className="text-gradient-accent">Build</span> with
                clarity.{" "}
                <span className="text-gradient-accent">Launch</span> with
                confidence.
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-xl text-body text-muted sm:mt-8 lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                I help startups and businesses ship secure, scalable web apps,
                admin dashboards, and backend systems that solve real
                operational problems — without the fluff.
              </motion.p>

              <motion.div
                className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.9 }}
              >
                <MagneticButton asChild size="lg" variant="gradient" className="w-full sm:w-auto">
                  <Link href="#planner">
                    Get Free Proposal
                    <ArrowRight size={18} />
                  </Link>
                </MagneticButton>
                <MagneticButton
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="#services">Our Services</Link>
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-lg pb-8 lg:max-w-none lg:pb-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 2.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <TerminalMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
