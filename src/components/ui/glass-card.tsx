import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = ComponentProps<"div"> & {
  glow?: boolean;
};

export function GlassCard({
  className,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md",
        "shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.06)]",
        "transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05]",
        glow && "glow-white",
        className,
      )}
      {...props}
    />
  );
}
