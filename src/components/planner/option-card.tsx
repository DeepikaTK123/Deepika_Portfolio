"use client";

import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionCardProps {
  title: string;
  description: string;
  selected?: boolean;
  multi?: boolean;
  icon?: LucideIcon;
  onClick: () => void;
}

export function OptionCard({
  title,
  description,
  selected,
  multi,
  icon: Icon,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 sm:px-5",
        selected
          ? "border-cyan/40 bg-cyan/[0.06] shadow-glow-cyan"
          : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]"
      )}
      aria-pressed={selected}
    >
      {multi ? (
        <span
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
            selected
              ? "border-cyan bg-cyan text-background"
              : "border-white/30 bg-transparent"
          )}
        >
          {selected && <Check className="h-3 w-3" strokeWidth={3} />}
        </span>
      ) : Icon ? (
        <span
          className={cn(
            "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
            selected
              ? "border-cyan/40 bg-cyan/15 text-cyan"
              : "border-white/[0.08] bg-white/[0.03] text-muted"
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
      ) : null}

      <span className="min-w-0">
        <span className="block text-base font-semibold text-foreground">
          {title}
        </span>
        <span className="mt-1 block text-sm text-cyan/80">{description}</span>
      </span>
    </button>
  );
}
