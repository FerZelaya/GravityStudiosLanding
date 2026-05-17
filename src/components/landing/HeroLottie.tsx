import { useReducedMotion } from "motion/react";

import { HeroLottiePlayer } from "@/components/landing/HeroLottiePlayer";
import { cn } from "@/lib/utils";

type HeroLottieProps = {
  className?: string;
};

export function HeroLottie({ className }: HeroLottieProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className,
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-[6%] rounded-full bg-zinc-400/[0.09] blur-3xl"
        aria-hidden
      />

      <HeroLottiePlayer reducedMotion={!!reduceMotion} />
    </div>
  );
}
