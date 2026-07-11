"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useIsTouchDevice, useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
}

export function MagneticButton({
  magneticStrength = 0.25,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const isTouch = useIsTouchDevice();
  const reducedMotion = useReducedMotion();
  const disableMagnetic = isTouch || reducedMotion;
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic({
    strength: magneticStrength,
  });

  return (
    <Button
      ref={ref}
      className={cn("transition-transform duration-200 ease-out", className)}
      onMouseMove={disableMagnetic ? undefined : handleMouseMove}
      onMouseLeave={disableMagnetic ? undefined : handleMouseLeave}
      {...props}
    >
      {children}
    </Button>
  );
}
