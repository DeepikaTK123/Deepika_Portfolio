"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ConsultationModal } from "@/components/consultation/consultation-modal";
import { Toast, type ToastState } from "@/components/consultation/toast";

interface ConsultationContextValue {
  openConsultation: () => void;
  closeConsultation: () => void;
  showToast: (type: "success" | "error", message: string) => void;
}

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

export function ConsultationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const openConsultation = useCallback(() => setIsOpen(true), []);
  const closeConsultation = useCallback(() => setIsOpen(false), []);

  const showToast = useCallback((type: "success" | "error", message: string) => {
    const id = crypto.randomUUID();
    setToast({ id, type, message });
    window.setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 5000);
  }, []);

  const value = useMemo(
    () => ({ openConsultation, closeConsultation, showToast }),
    [openConsultation, closeConsultation, showToast]
  );

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      <ConsultationModal open={isOpen} onOpenChange={setIsOpen} />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return context;
}
