"use client";

import { cn } from "@/lib/utils";

interface PlannerProgressProps {
  step: number;
  total?: number;
}

export function PlannerProgress({ step, total = 4 }: PlannerProgressProps) {
  return (
    <div className="mb-8 flex gap-2" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "progress-segment",
            i < step ? "progress-segment-active" : ""
          )}
        />
      ))}
    </div>
  );
}
