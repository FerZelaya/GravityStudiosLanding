import { ArrowRight } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-svh scroll-mt-24 items-center overflow-hidden bg-[#0a0a0a] text-white md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-16">
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
            <h1 className="font-heading text-[1.85rem] leading-[1.1] font-semibold tracking-tight min-[375px]:text-[2.15rem] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05] xl:text-[3.6rem]">
              <Trans
                i18nKey="hero.title"
                components={{
                  1: <span className="text-gradient" />,
                }}
              />
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                className="h-12 rounded-full bg-white px-6 text-base text-black hover:bg-white/90"
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-12 rounded-full px-5 text-base text-white/80 hover:bg-white/5 hover:text-white"
              >
                <a href="#work" className="inline-flex items-center gap-2">
                  {t("hero.ctaSecondary")}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>

          <OrbitVisual className="lg:justify-self-end" />
        </div>
      </div>
    </section>
  );
}

const orbits = [
  { inset: "0%", duration: "40s", dot: "size-2.5 bg-white", reverse: false },
  { inset: "16%", duration: "28s", dot: "size-2 bg-white/70", reverse: true },
  { inset: "32%", duration: "18s", dot: "size-1.5 bg-white/50", reverse: false },
] as const;

function OrbitVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative mx-auto aspect-square w-[min(72vw,280px)] sm:w-[min(60vw,360px)] lg:mx-0 lg:w-[min(40vw,440px)]",
        className,
      )}
    >
      {orbits.map((orbit) => (
        <div
          key={orbit.inset}
          className="absolute rounded-full border border-white/10"
          style={{ inset: orbit.inset }}
        >
          <div
            className="absolute inset-0 motion-safe:animate-spin"
            style={{
              animationDuration: orbit.duration,
              animationDirection: orbit.reverse ? "reverse" : "normal",
            }}
          >
            <span
              className={cn(
                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_rgb(255_255_255_/_0.6)]",
                orbit.dot,
              )}
            />
          </div>
        </div>
      ))}
      <div className="absolute inset-[44%] rounded-full bg-white shadow-[0_0_60px_10px_rgb(255_255_255_/_0.15)]" />
    </div>
  );
}
