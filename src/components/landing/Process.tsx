import { useTranslation } from "react-i18next";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";

const stepKeys = [
  "discovery",
  "design",
  "development",
  "launch",
  "growth",
] as const;

export function Process() {
  const { t } = useTranslation();

  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("process.eyebrow")}
            title={t("process.title")}
            description={t("process.description")}
          />
        </ScrollReveal>

        <ScrollRevealGroup className="relative mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
          <div
            className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
            aria-hidden
          />
          {stepKeys.map((key, index) => (
            <ScrollReveal key={key} staggerItem>
              <GlassCard className="relative flex h-full flex-col gap-3 p-5 sm:p-6">
                <span className="font-heading inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {t(`process.steps.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {t(`process.steps.${key}.description`)}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
