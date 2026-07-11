"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { techStack } from "@/data/tech-stack";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    const items = container.querySelectorAll(".tech-icon");
    const tweens = Array.from(items).map((item, i) =>
      gsap.to(item, {
        y: Math.sin(i * 0.8) * 15,
        duration: 3 + (i % 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      })
    );

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [reducedMotion]);

  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-label="Tech Stack"
    >
      <div className="container-wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="Tech Stack"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              Technologies and tools I use to build robust, scalable web
              applications and backend systems.
            </p>
          </FadeIn>
        </div>

        <div
          ref={containerRef}
          className="mx-auto grid max-w-4xl grid-cols-2 gap-3 xs:grid-cols-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 md:gap-6"
        >
          {techStack.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.05}>
              <motion.div
                className="tech-icon group flex cursor-default flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-card p-4 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.02] sm:gap-3 sm:p-6"
                whileHover={reducedMotion ? undefined : { scale: 1.08, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-transform duration-500 group-hover:scale-110 sm:h-12 sm:w-12"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    color: tech.color,
                    border: `1px solid ${tech.color}30`,
                  }}
                >
                  {tech.name.slice(0, 2)}
                </div>
                <span className="text-center text-[11px] font-medium text-muted transition-colors group-hover:text-foreground sm:text-xs">
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
