"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastState {
  id: string;
  type: "success" | "error";
  message: string;
}

interface ToastProps {
  toast: ToastState | null;
  onClose: () => void;
}

export function Toast({ toast, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 z-[200] w-[calc(100%-2rem)] max-w-md -translate-x-1/2"
          role="status"
          aria-live="polite"
        >
          <div
            className={cn(
              "glass-strong rounded-2xl px-5 py-4 shadow-glow flex items-start gap-3",
              toast.type === "success" ? "border-success/20" : "border-red-500/20"
            )}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <p className="text-sm text-foreground leading-relaxed pr-6">
              {toast.message}
            </p>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-muted hover:text-foreground transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
