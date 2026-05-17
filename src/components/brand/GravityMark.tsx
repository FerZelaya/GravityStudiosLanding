import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const ORBIT_PATH = "M8 52C18 30 34 18 52 12";

type GravityMarkProps = {
  className?: string;
  /** Accessible label; omit when purely decorative next to visible text */
  title?: string;
  /** Slow orbit + breathe — respects prefers-reduced-motion */
  animated?: boolean;
};

/**
 * Monochrome mark: rounded “G” bowl + crossbar, orbital swoosh, and satellite dot.
 */
export function GravityMark({
  className,
  title,
  animated = false,
}: GravityMarkProps) {
  const reduceMotion = useReducedMotion();
  const motionEnabled = animated && !reduceMotion;

  const mark = (
    <svg
      className="h-full w-full"
      viewBox="0 0 64 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 26 14 A 22 22 0 1 0 26 58"
      />
      <path fill="currentColor" d="M26 31h22v11H26V31z" />
      <path
        className={animated ? "stroke-black" : "stroke-background"}
        d={ORBIT_PATH}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {motionEnabled ? (
        <circle r="4.8" fill="currentColor">
          <animateMotion
            dur="11s"
            repeatCount="indefinite"
            path={ORBIT_PATH}
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
          />
        </circle>
      ) : (
        <circle cx="53" cy="11" r="4.8" fill="currentColor" />
      )}
    </svg>
  );

  return (
    <div className={cn("shrink-0", className)}>
      {motionEnabled ? (
        <motion.div
          className="h-full w-full"
          animate={{ scale: [1, 1.025, 1], opacity: [0.92, 1, 0.92] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {mark}
        </motion.div>
      ) : (
        mark
      )}
    </div>
  );
}
