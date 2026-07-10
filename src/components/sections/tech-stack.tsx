"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { techStack } from "@/data/tech-stack";

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".tech-icon");

    items.forEach((item, i) => {
      gsap.to(item, {
        y: Math.sin(i * 0.8) * 15,
        duration: 3 + (i % 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <section className="relative section-padding overflow-hidden" aria-label="Tech Stack">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <TextReveal
            text="Tech Stack"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Technologies and tools I use to build robust, scalable backend
              systems.
            </p>
          </FadeIn>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto"
        >
          {techStack.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.05}>
              <motion.div
                className="tech-icon group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/[0.06] bg-card hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-500 cursor-default"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    color: tech.color,
                    border: `1px solid ${tech.color}30`,
                  }}
                >
                  {tech.name.slice(0, 2)}
                </div>
                <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors text-center">
                  {tech.name}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
