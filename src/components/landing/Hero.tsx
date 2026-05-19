import { Trans, useTranslation } from "react-i18next";

import { HeroLottie } from "@/components/landing/HeroLottie";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="dark relative flex min-h-svh scroll-mt-24 items-center overflow-x-hidden bg-black text-white md:scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-[min(70vw,420px)] w-[min(70vw,420px)] -translate-y-1/2 rounded-full bg-zinc-400/[0.07] blur-[80px] sm:-right-20 sm:h-[min(85vh,680px)] sm:w-[min(85vh,680px)] sm:blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
            <h1 className="text-[1.75rem] leading-[1.1] font-normal tracking-tight min-[375px]:text-[2rem] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06] xl:text-[3.5rem]">
              <Trans
                i18nKey="hero.title"
                components={{ 1: <span className="font-bold" /> }}
              />
            </h1>

            {/* Hidden until a projects section exists */}
            <a
              href="#about"
              aria-label={t("hero.ctaAria")}
              className="hidden"
              tabIndex={-1}
            >
              {t("hero.cta")}
            </a>
          </div>

          <HeroVisual className="w-full lg:justify-self-end" />
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square shrink-0",
        "w-[min(72vw,260px)] sm:w-[min(68vw,320px)]",
        "md:w-[min(52vw,380px)]",
        "lg:mx-0 lg:w-[min(52vw,520px)] lg:-mr-4 xl:w-[min(48vw,560px)] xl:-mr-10",
        className,
      )}
    >
      <HeroLottie className="absolute inset-0 size-full" />
    </div>
  );
}
