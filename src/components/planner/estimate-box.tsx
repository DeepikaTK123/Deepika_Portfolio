"use client";

import type { TimelineEstimate } from "@/data/planner";

interface EstimateBoxProps {
  estimate: TimelineEstimate;
}

export function EstimateBox({ estimate }: EstimateBoxProps) {
  return (
    <div className="rounded-2xl border border-cyan/30 bg-cyan/[0.05] p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">
        Scope estimate
      </p>
      <ul className="mt-4 space-y-2 text-sm text-foreground">
        <li>
          <span className="text-muted">First reviewable build: </span>
          <span className="font-semibold">{estimate.prototype}</span>
        </li>
        <li>
          <span className="text-muted">Full delivery roadmap: </span>
          <span className="font-semibold">{estimate.fullDelivery}</span>
        </li>
      </ul>
      <p className="mt-3 text-xs leading-relaxed text-muted">{estimate.summary}</p>
      <p className="mt-2 text-[11px] text-muted/80">
        Estimates refine after we discuss your exact requirements.
      </p>
    </div>
  );
}
