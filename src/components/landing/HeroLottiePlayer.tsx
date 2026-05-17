import { Component, type ErrorInfo, type ReactNode } from "react";
import Lottie from "lottie-react";

import heroOrbit from "@/assets/lottie/hero-orbit.json";
import { HeroLottieFallback } from "@/components/landing/HeroLottieFallback";
import { cn } from "@/lib/utils";

type HeroLottiePlayerProps = {
  reducedMotion?: boolean;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class LottieErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Hero Lottie failed to render:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <HeroLottieFallback />;
    }
    return this.props.children;
  }
}

export function HeroLottiePlayer({ reducedMotion }: HeroLottiePlayerProps) {
  return (
    <LottieErrorBoundary>
      <Lottie
        animationData={heroOrbit}
        loop={false}
        autoplay={!reducedMotion}
        className={cn(
          "relative z-10 h-[min(52vh,480px)] w-[min(52vh,480px)] max-w-none",
          "bg-transparent lg:h-[min(64vh,560px)] lg:w-[min(64vh,560px)]",
          "[&_svg]:bg-transparent",
        )}
        style={{ background: "transparent" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
        }}
        aria-hidden
      />
    </LottieErrorBoundary>
  );
}
