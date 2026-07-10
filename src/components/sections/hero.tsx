"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { GradientBlob } from "@/components/effects/gradient-blob";
import { DeveloperIllustration } from "@/components/illustrations/developer-illustration";
import { heroSkills } from "@/data/site";
import { cn } from "@/lib/utils";
import { useConsultation } from "@/components/consultation/consultation-provider";

export function HeroSection() {
  const { openConsultation } = useConsultation();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      <GradientBlob className="top-[-10%] left-[-10%]" color="rgba(59,130,246,0.12)" size="700px" />
      <GradientBlob className="bottom-[-20%] right-[-10%]" color="rgba(59,130,246,0.08)" size="500px" delay={2} />
      <GradientBlob className="top-[30%] right-[20%]" color="rgba(34,197,94,0.05)" size="400px" delay={4} />

      <div className="section-padding w-full pt-32 pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                <Badge variant="accent" className="mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-2" />
                  Python Backend Developer
                </Badge>
              </motion.div>

              <motion.h1
                className="text-hero-sm md:text-5xl lg:text-hero font-bold tracking-tight text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Building Scalable
                <br />
                <span className="text-gradient">Digital Products.</span>
              </motion.h1>

              <motion.div
                className="flex flex-wrap gap-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                {["Fast.", "Secure.", "Beautiful."].map((word, i) => (
                  <span
                    key={word}
                    className={cn(
                      "text-xl md:text-2xl font-medium",
                      i === 0 && "text-accent",
                      i === 1 && "text-success",
                      i === 2 && "text-foreground"
                    )}
                  >
                    {word}
                  </span>
                ))}
              </motion.div>

              <motion.p
                className="mt-8 text-muted text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.9 }}
              >
                I design and deploy scalable backend systems using Python,
                FastAPI, Flask, and Django — from REST APIs and microservices
                to AWS cloud infrastructure and CI/CD automation.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.1 }}
              >
                <MagneticButton asChild size="lg">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight size={18} />
                  </Link>
                </MagneticButton>
                <MagneticButton variant="secondary" size="lg" type="button" onClick={openConsultation}>
                  <Calendar size={18} />
                  Book a Call
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Content */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <DeveloperIllustration />

              {/* Glass Card */}
              <motion.div
                className="absolute bottom-4 left-0 right-0 mx-auto w-fit glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">4+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Years Experience
                    </p>
                    <p className="text-xs text-muted">Backend Engineering</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {heroSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.04] border border-white/[0.06] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
