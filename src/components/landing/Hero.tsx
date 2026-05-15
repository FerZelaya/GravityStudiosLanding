import { useReducedMotion } from "motion/react";

import { MagicCard } from "@/components/ui/magic-card";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="dark bg-background text-foreground relative scroll-mt-24 overflow-hidden pb-20 pt-10 md:scroll-mt-28 md:pb-28 md:pt-14"
    >
      <div
        className="pointer-events-none absolute inset-0 flex justify-center"
        aria-hidden
      >
        <Spotlight className="-top-32 left-0 opacity-80 md:-top-40 md:left-[15%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {prefersReducedMotion ? (
            <div className="rounded-3xl px-2 py-4">
              <HeadlineBlock />
            </div>
          ) : (
            <MagicCard surface="dark" className="rounded-3xl p-px">
              <div className="bg-background rounded-[calc(1.5rem-1px)] px-4 py-10 sm:px-8 sm:py-12">
                <HeadlineBlock />
              </div>
            </MagicCard>
          )}
        </div>
      </div>
    </section>
  );
}

function HeadlineBlock() {
  return (
    <>
      <h1 className="text-foreground text-4xl leading-[1.05] font-semibold tracking-tight  sm:text-5xl md:text-6xl">
        Your digital presence, delivered
      </h1>
      <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-balance text-base md:text-lg">
        A focused studio for fast, accessible marketing sites—strategy, design,
        and implementation in one lane.
      </p>
    </>
  );
}
