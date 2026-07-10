"use client";

import { ConsultationProvider } from "@/components/consultation/consultation-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ConsultationProvider>{children}</ConsultationProvider>;
}
