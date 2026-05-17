import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

import { cn } from "@/lib/utils";

const defaultViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -8% 0px" as const,
};

const ease = [0.22, 1, 0.36, 1] as const;

export const scrollRevealContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const scrollRevealItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

type ScrollRevealAs = "div" | "article";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds before animation starts */
  delay?: number;
  /** Vertical offset in px (default 24) */
  y?: number;
  as?: ScrollRevealAs;
  /** Use inside ScrollRevealGroup for staggered children */
  staggerItem?: boolean;
};

type ScrollRevealGroupProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollRevealGroup({
  children,
  className,
}: ScrollRevealGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={scrollRevealContainerVariants}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  staggerItem = false,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease, delay },
    },
  };

  if (prefersReducedMotion) {
    return as === "article" ? (
      <article className={className}>{children}</article>
    ) : (
      <div className={className}>{children}</div>
    );
  }

  const motionProps = {
    className: cn(className),
    ...(staggerItem
      ? { variants: itemVariants }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: defaultViewport,
          transition: { duration: 0.55, ease, delay },
        }),
  };

  if (as === "article") {
    return <motion.article {...motionProps}>{children}</motion.article>;
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
}
