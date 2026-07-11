"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { GradientBlob } from "@/components/effects/gradient-blob";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const attribution = testimonial.company
    ? `${testimonial.role}, ${testimonial.company}`
    : testimonial.role;

  return (
    <motion.article
      className={cn(
        "group relative flex h-full min-h-[300px] w-[min(100%,300px)] shrink-0 flex-col sm:min-h-[340px] sm:w-[min(100%,340px)]",
        "rounded-3xl border border-white/[0.08] p-7 md:p-8",
        "bg-white/[0.04] backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
        "transition-all duration-500",
        "hover:border-white/[0.14] hover:bg-white/[0.06]",
        "hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)]"
      )}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-accent/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-accent text-accent"
                strokeWidth={0}
              />
            ))}
          </div>
          <Quote
            className="h-8 w-8 text-accent/25 transition-colors duration-500 group-hover:text-accent/40"
            aria-hidden="true"
          />
        </div>

        <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-foreground/90 md:text-base">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

        <div className="mt-8 flex items-center gap-3.5 border-t border-white/[0.06] pt-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent ring-1 ring-accent/25">
            {testimonial.avatar}
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold tracking-tight text-foreground">
              {testimonial.name}
            </p>
            <p className="truncate text-sm text-muted">{attribution}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const touchStartX = useRef(0);
  const scrollLeftStart = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  const scrollByCard = useCallback((dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = (card?.clientWidth ?? 340) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Auto-scroll on desktop when not paused / hovered
  useEffect(() => {
    const el = trackRef.current;
    if (!el || paused) return;

    const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop()) return;

    const timer = setInterval(() => {
      if (!isDesktop() || paused) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, 4500);

    return () => clearInterval(timer);
  }, [paused, scrollByCard]);

  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchStartX.current = e.touches[0].clientX;
    scrollLeftStart.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const el = trackRef.current;
    if (!el) return;
    const delta = touchStartX.current - e.touches[0].clientX;
    el.scrollLeft = scrollLeftStart.current + delta;
  };

  const onTouchEnd = () => {
    setTimeout(() => setPaused(false), 2500);
  };

  return (
    <section
      id="testimonials"
      className="relative section-padding overflow-hidden"
      aria-label="Testimonials"
    >
      <GradientBlob
        className="left-[15%] top-[5%]"
        color="rgba(59,130,246,0.07)"
        size="560px"
      />
      <GradientBlob
        className="bottom-[10%] right-[10%]"
        color="rgba(99,102,241,0.05)"
        size="420px"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="container-wide relative">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <TextReveal
            text="What Clients Say"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              Trusted by founders, product leaders, and growing teams to deliver
              reliable web applications and backend systems.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              ref={trackRef}
              className={cn(
                "flex gap-6 overflow-x-auto pb-4 pt-2",
                "snap-x snap-mandatory scroll-smooth",
                "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]",
                "[&::-webkit-scrollbar]:hidden"
              )}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              role="region"
              aria-roledescription="carousel"
              aria-label="Client testimonials"
            >
              {testimonials.map((testimonial, i) => (
                <div key={testimonial.id} className="snap-start first:ml-0">
                  <FadeIn delay={0.08 * i}>
                    <TestimonialCard testimonial={testimonial} />
                  </FadeIn>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 md:justify-end">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canScrollLeft}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-muted",
                  "transition-all duration-300",
                  "hover:border-white/[0.16] hover:text-foreground",
                  "disabled:pointer-events-none disabled:opacity-30"
                )}
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canScrollRight}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-muted",
                  "transition-all duration-300",
                  "hover:border-white/[0.16] hover:text-foreground",
                  "disabled:pointer-events-none disabled:opacity-30"
                )}
                aria-label="Next testimonials"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
