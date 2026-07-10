import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-white/[0.08] bg-white/[0.03] text-muted backdrop-blur-sm",
        accent:
          "border-accent/20 bg-accent/10 text-accent",
        success:
          "border-success/20 bg-success/10 text-success",
        outline: "border-white/[0.12] text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
