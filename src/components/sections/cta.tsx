"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { FadeIn } from "@/components/effects/fade-in";
import { GradientBlob } from "@/components/effects/gradient-blob";
import { useConsultation } from "@/components/consultation/consultation-provider";

export function CTASection() {
  const { openConsultation } = useConsultation();

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      aria-label="Contact"
    >
      <div className="container-wide">
        <FadeIn>
          <div className="relative rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-accent/10" />
            <GradientBlob className="top-[-30%] right-[-10%]" color="rgba(59,130,246,0.2)" size="600px" />
            <GradientBlob className="bottom-[-30%] left-[-10%]" color="rgba(59,130,246,0.15)" size="500px" delay={2} />
            <div className="absolute inset-0 border border-white/[0.08] rounded-4xl" />

            <div className="relative px-8 py-20 md:px-16 md:py-28 lg:py-32 text-center">
              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Let&apos;s Build Something{" "}
                <span className="text-gradient-accent">Amazing</span> Together
              </motion.h2>

              <motion.p
                className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Ready to transform your backend infrastructure? Let&apos;s
                discuss your project and create a solution that scales with your
                vision.
              </motion.p>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <MagneticButton size="lg" onClick={openConsultation}>
                  <Calendar size={18} />
                  Book a Free Consultation
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
