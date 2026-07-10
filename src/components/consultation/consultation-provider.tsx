"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ConsultationModal } from "@/components/consultation/consultation-modal";
import { ProjectAccessModal } from "@/components/projects/project-access-modal";
import { Toast, type ToastState } from "@/components/consultation/toast";

interface ConsultationContextValue {
  openConsultation: () => void;
  closeConsultation: () => void;
  openProjectAccess: () => void;
  closeProjectAccess: () => void;
  showToast: (type: "success" | "error", message: string) => void;
}

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

export function ConsultationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectAccessOpen, setIsProjectAccessOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const openConsultation = useCallback(() => setIsOpen(true), []);
  const closeConsultation = useCallback(() => setIsOpen(false), []);
  const openProjectAccess = useCallback(() => setIsProjectAccessOpen(true), []);
  const closeProjectAccess = useCallback(() => setIsProjectAccessOpen(false), []);

  const handleContactFromProjectModal = useCallback(() => {
    setIsProjectAccessOpen(false);
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, []);

  const handleBookFromProjectModal = useCallback(() => {
    setIsProjectAccessOpen(false);
    window.setTimeout(() => setIsOpen(true), 200);
  }, []);

  const showToast = useCallback((type: "success" | "error", message: string) => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : String(Date.now());
    setToast({ id, type, message });
    window.setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 5000);
  }, []);

  const value = useMemo(
    () => ({
      openConsultation,
      closeConsultation,
      openProjectAccess,
      closeProjectAccess,
      showToast,
    }),
    [
      openConsultation,
      closeConsultation,
      openProjectAccess,
      closeProjectAccess,
      showToast,
    ]
  );

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      <ConsultationModal open={isOpen} onOpenChange={setIsOpen} />
      <ProjectAccessModal
        open={isProjectAccessOpen}
        onOpenChange={setIsProjectAccessOpen}
        onContact={handleContactFromProjectModal}
        onBookConsultation={handleBookFromProjectModal}
      />
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
