"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { useConsultation } from "@/components/consultation/consultation-provider";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScroll(20);
  const { openConsultation } = useConsultation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-soft"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
      >
        <nav
          className="container-wide flex h-16 items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 md:h-20 md:px-10 lg:px-16 xl:px-24"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            className="text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-300 touch-target inline-flex items-center"
            aria-label="Deepika - Home"
            onClick={closeMobile}
          >
            Deepika<span className="text-accent">.</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                    activeSection === link.href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/[0.06] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton size="sm" type="button" onClick={openConsultation}>
              Hire Me
            </MagneticButton>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center touch-target rounded-full text-foreground hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />

            <motion.nav
              className="relative flex h-full flex-col px-6 pb-10 pt-24"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobile navigation links"
            >
              <ul className="flex flex-1 flex-col items-stretch justify-center gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex min-h-[52px] items-center rounded-2xl px-5 text-2xl font-medium transition-colors",
                        activeSection === link.href.replace("#", "")
                          ? "bg-white/[0.06] text-foreground"
                          : "text-muted hover:bg-white/[0.04] hover:text-foreground"
                      )}
                      onClick={closeMobile}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6"
              >
                <MagneticButton
                  className="w-full"
                  size="lg"
                  type="button"
                  onClick={() => {
                    closeMobile();
                    openConsultation();
                  }}
                >
                  Hire Me
                </MagneticButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
