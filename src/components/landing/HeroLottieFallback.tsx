import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type HeroLottieFallbackProps = {
  className?: string;
};

/** CSS fallback when Lottie fails to load or render */
export function HeroLottieFallback({ className }: HeroLottieFallbackProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-[12%] rounded-full bg-zinc-400/10 blur-3xl" />
      <motion.div
        className="relative aspect-square w-[58%] rounded-full bg-gradient-to-br from-zinc-600 via-zinc-900 to-black shadow-[0_0_80px_rgba(255,255,255,0.08)]"
        animate={reduceMotion ? undefined : { scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ transform: "rotate(-22deg)" }}
      >
        <div className="absolute aspect-[2.85/1] w-[98%] rounded-[50%] border border-zinc-500/60" />
        <div className="absolute aspect-[2.75/1] w-[88%] rounded-[50%] border border-zinc-500/60" />
        <div className="absolute aspect-[2.65/1] w-[78%] rounded-[50%] border border-zinc-500/60" />
        <div className="absolute aspect-[2.55/1] w-[68%] rounded-[50%] border border-zinc-500/60" />
      </div>
      {!reduceMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-[10%] h-3 w-3 -translate-x-1/2 rounded-full bg-zinc-200 shadow-[0_0_12px_rgba(255,255,255,0.45)]" />
        </motion.div>
      )}
    </div>
  );
}
