import { cn } from "@/lib/utils";

interface NoiseOverlayProps {
  className?: string;
}

export function NoiseOverlay({ className }: NoiseOverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[1] noise-overlay pointer-events-none",
        className
      )}
      aria-hidden="true"
    />
  );
}
