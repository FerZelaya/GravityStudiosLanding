import { Trans, useTranslation } from "react-i18next";

import { HeroLottie } from "@/components/landing/HeroLottie";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="dark relative flex min-h-svh scroll-mt-24 items-center overflow-hidden bg-black text-white md:scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-[min(85vh,680px)] w-[min(85vh,680px)] -translate-y-1/2 rounded-full bg-zinc-400/[0.07] blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-4 xl:gap-8">
          <div className="max-w-xl text-left">
            <h1 className="text-[2rem] leading-[1.08] font-normal tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06] xl:text-[3.5rem]">
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

          <HeroVisual className="lg:justify-self-end" />
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto flex h-[min(52vh,460px)] w-full max-w-lg items-center justify-center overflow-visible lg:mx-0 lg:-mr-6 lg:h-[min(78vh,680px)] lg:max-w-none xl:-mr-12",
        className,
      )}
    >
      <HeroLottie className="h-full w-full" />
    </div>
  );
}
