"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { GradientBlob } from "@/components/effects/gradient-blob";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent(
      (prev) =>
        (prev + dir + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative section-padding overflow-hidden"
      aria-label="Testimonials"
    >
      <GradientBlob className="top-[10%] left-[20%]" color="rgba(59,130,246,0.05)" size="500px" />

      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <TextReveal
            text="What Clients Say"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Trusted by teams and founders worldwide to deliver exceptional
              backend solutions.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 glass rounded-3xl blur-sm scale-95 opacity-50" />

          <div className="relative glass rounded-3xl p-8 md:p-12 lg:p-16">
            <Quote className="w-10 h-10 text-accent/30 mb-6" aria-hidden="true" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      i === current
                        ? "bg-accent w-6"
                        : "bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-muted hover:text-foreground hover:border-white/[0.15] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-muted hover:text-foreground hover:border-white/[0.15] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
