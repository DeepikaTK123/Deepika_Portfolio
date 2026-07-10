"use client";

import { trustedBy } from "@/data/site";
import { FadeIn } from "@/components/effects/fade-in";

export function TrustedBySection() {
  const items = [...trustedBy, ...trustedBy];

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/[0.04]" aria-label="Trusted by">
      <FadeIn>
        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-muted mb-8">
          Trusted By Technologies
        </p>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {items.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-3 mx-8 shrink-0"
            >
              <span className="text-lg md:text-xl font-medium text-muted/60 hover:text-muted transition-colors whitespace-nowrap">
                {tech}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
