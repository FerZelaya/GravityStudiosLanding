import { Component, type ErrorInfo, type ReactNode } from "react";
import Lottie from "lottie-react";

import heroOrbit from "@/assets/lottie/hero-orbit.json";
import { HeroLottieFallback } from "@/components/landing/HeroLottieFallback";

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
      <div className="relative z-10 flex size-full items-center justify-center">
        <Lottie
          animationData={heroOrbit}
          loop={false}
          autoplay={!reducedMotion}
          className="size-full max-h-full max-w-full bg-transparent [&_svg]:max-h-full [&_svg]:max-w-full [&_svg]:bg-transparent"
          style={{ background: "transparent" }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
          aria-hidden
        />
      </div>
    </LottieErrorBoundary>
  );
}
