import { useId, useMemo, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  /** Keyframes slide from the left (default) or mirrored for `right-*` placement */
  align?: "left" | "right";
};

export const Spotlight = ({
  className,
  fill: fillProp,
  align = "left",
}: SpotlightProps) => {
  const reactId = useId();
  const filterId = `spotlight-blur-${reactId.replace(/:/g, "")}`;
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const lightBackground = mounted && resolvedTheme === "light";

  const fill = useMemo(() => {
    if (fillProp) return fillProp;
    return lightBackground ? "var(--foreground)" : "white";
  }, [fillProp, lightBackground]);

  const fillOpacity = lightBackground ? "0.14" : "0.21";

  const animationClass =
    align === "right" ? "animate-spotlight-right" : "animate-spotlight";

  return (
    <svg
      className={cn(
        animationClass,
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 lg:w-[84%]",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter={`url(#${filterId})`}>
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity={fillOpacity}
        ></ellipse>
      </g>
      <defs>
        <filter
          id={filterId}
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
