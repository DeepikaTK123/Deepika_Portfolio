"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Component = "h2",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");

  if (reducedMotion) {
    return <Component className={cn(className)}>{text}</Component>;
  }

  return (
    <Component ref={ref} className={cn("overflow-hidden", className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        className="inline-flex flex-wrap"
        aria-hidden="true"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: delay },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="mr-[0.25em] inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
