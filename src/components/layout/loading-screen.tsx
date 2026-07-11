"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const duration = reducedMotion ? 400 : 2200;
    const timer = setTimeout(() => setIsLoading(false), duration);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: reducedMotion ? undefined : "blur(8px)",
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_55%)]" />

          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="absolute inset-0 rounded-full border border-white/[0.08]" />
              {!reducedMotion && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                />
              )}
              <motion.span
                className="text-lg font-semibold tracking-tight text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                D
              </motion.span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-[0.35em] text-muted">
                Deepika TK
              </span>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 140 }}
                transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="text-xs text-muted/80">
                Crafting premium digital experiences
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
