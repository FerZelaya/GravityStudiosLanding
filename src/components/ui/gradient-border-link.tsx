import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const BORDER_FROM = "#9E7AFF";
const BORDER_TO = "#FE8BBB";

export type GradientBorderLinkProps = {
  children: React.ReactNode;
  className?: string;
  /** Follow spotlight radius in px */
  gradientSize?: number;
  /** Inner fill behind text (match sheet: `bg-popover`) */
  innerMaskClassName?: string;
  /** First layer of the border trick; use `var(--popover)` inside the sheet */
  outerFill?: string;
} & Pick<
  React.ComponentPropsWithoutRef<"a">,
  | "href"
  | "onClick"
  | "id"
  | "target"
  | "rel"
  | "download"
  | "title"
  | "aria-label"
  | "aria-current"
  | "tabIndex"
>;

/**
 * Anchor with MagicCard-style animated purple/pink border + inner hover wash.
 */
export const GradientBorderLink = React.forwardRef<
  HTMLAnchorElement,
  GradientBorderLinkProps
>(function GradientBorderLink(
  {
    className,
    children,
    gradientSize = 140,
    innerMaskClassName = "bg-background",
    outerFill = "var(--background)",
    href,
    onClick,
    id,
    target,
    rel,
    download,
    title,
    "aria-label": ariaLabel,
    "aria-current": ariaCurrent,
    tabIndex,
  },
  ref,
) {
  const { theme, systemTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const darkSurface = React.useMemo(() => {
    if (!mounted) return false;
    const t = theme === "system" ? systemTheme : theme;
    return t === "dark";
  }, [theme, systemTheme, mounted]);

  const hoverCenter = darkSurface
    ? "rgba(255, 255, 255, 0.18)"
    : "rgba(38, 38, 38, 0.12)";
  const hoverOpacity = darkSurface ? 1 : 0.75;

  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const reset = React.useCallback(() => {
    const off = -gradientSize;
    mouseX.set(off);
    mouseY.set(off);
  }, [gradientSize, mouseX, mouseY]);

  React.useEffect(() => {
    reset();
  }, [reset]);

  React.useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) reset();
    };
    window.addEventListener("pointerout", handleGlobalPointerOut);
    return () =>
      window.removeEventListener("pointerout", handleGlobalPointerOut);
  }, [reset]);

  function handleMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      id={id}
      target={target}
      rel={rel}
      download={download}
      title={title}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      tabIndex={tabIndex}
      onClick={onClick}
      className={cn(
        "group relative isolate inline-flex overflow-hidden rounded-lg border border-transparent p-px",
        className,
      )}
      onPointerLeave={reset}
      onPointerMove={handleMove}
      style={{
        background: useMotionTemplate`
          linear-gradient(${outerFill} 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${BORDER_FROM},
            ${BORDER_TO},
            var(--border) 100%
          ) border-box
        `,
      }}
    >
      <span
        className={cn(
          "absolute inset-px z-20 rounded-[inherit]",
          innerMaskClassName,
        )}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${hoverCenter},
              transparent 100%
            )
          `,
          opacity: hoverOpacity,
        }}
      />
      <span className="text-muted-foreground group-hover:text-foreground relative z-40 rounded-[inherit] px-2 py-1 text-sm font-medium transition-colors">
        {children}
      </span>
    </motion.a>
  );
});
