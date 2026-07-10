"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, Rocket, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/effects/magnetic-button";

interface ProjectAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContact: () => void;
  onBookConsultation: () => void;
}

const consultationBenefits = [
  "A walkthrough of similar projects I've built",
  "Solution architecture tailored to your requirements",
  "Technology recommendations for scalability and performance",
  "Estimated development timeline and milestones",
  "Transparent pricing with no hidden costs",
  "Best practices to ensure your application is secure, reliable, and future-ready",
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ProjectAccessModal({
  open,
  onOpenChange,
  onContact,
  onBookConsultation,
}: ProjectAccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          className="relative flex max-h-[85vh] flex-col"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-0 h-40 w-40 rounded-full bg-success/10 blur-3xl" />

          <DialogHeader className="relative shrink-0 border-none px-6 pt-7 pb-3">
            <motion.div variants={itemVariants} className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] shadow-glow backdrop-blur-xl">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <DialogTitle className="text-center text-2xl md:text-3xl text-balance">
                Let&apos;s Build Something Exceptional
              </DialogTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <DialogDescription className="text-center text-base">
                Every project tells a story—and I&apos;d love to share mine with
                you.
              </DialogDescription>
            </motion.div>
          </DialogHeader>

          <motion.div
            variants={itemVariants}
            className="relative mx-6 overflow-y-auto rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl max-h-[50vh] space-y-5"
          >
            <p className="text-sm md:text-[15px] leading-relaxed text-muted">
              Most of the applications I&apos;ve developed are custom solutions
              built for businesses and are protected by confidentiality
              agreements. Because of this, they aren&apos;t available for public
              viewing.
            </p>

            <p className="text-sm md:text-[15px] leading-relaxed text-muted">
              However, during a quick consultation, I&apos;ll personally walk you
              through relevant projects, the challenges they solved, the
              architecture behind them, and the measurable business results they
              achieved.
            </p>

            <p className="text-sm md:text-[15px] leading-relaxed text-muted">
              Whether you&apos;re planning a new product, modernizing an existing
              application, or scaling your business, I&apos;ll help you identify
              the right technical approach before a single line of code is
              written.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                During our discussion, you&apos;ll get:
              </h3>
              <ul className="space-y-2.5">
                {consultationBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                  >
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 border-t border-white/[0.06] pt-5">
              <h3 className="text-base font-semibold text-foreground">
                Ready to turn your idea into a powerful web application?
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-muted">
                Let&apos;s discuss your vision, explore the possibilities, and
                build a solution that delivers real business value.
              </p>
              <p className="text-sm font-medium text-accent">
                Your first consultation is completely free.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex shrink-0 flex-col-reverse gap-3 px-6 py-6 sm:flex-row"
          >
            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={onContact}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            <MagneticButton
              type="button"
              className="flex-1"
              onClick={onBookConsultation}
            >
              <Calendar className="h-4 w-4" />
              Schedule a Free Consultation
            </MagneticButton>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
