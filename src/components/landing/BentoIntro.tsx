import type { LucideIcon } from "lucide-react";
import { Code2, PenTool, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";

const pillars: { id: "design" | "develop" | "deploy"; icon: LucideIcon }[] = [
  { id: "design", icon: PenTool },
  { id: "develop", icon: Code2 },
  { id: "deploy", icon: Rocket },
];

const statKeys = ["projects", "years", "uptime", "response"] as const;

export function BentoIntro() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("bento.eyebrow")}
            title={t("bento.title")}
            description={t("bento.description")}
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal staggerItem className="sm:col-span-2 lg:row-span-2">
            <GlassCard className="flex h-full flex-col divide-y divide-white/10 p-0">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="flex flex-1 items-start gap-4 p-6 sm:p-7"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wide text-white/40">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-heading mt-1 text-lg font-semibold text-white">
                        {t(`bento.pillars.${pillar.id}.title`)}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        {t(`bento.pillars.${pillar.id}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </GlassCard>
          </ScrollReveal>

          {statKeys.map((key) => (
            <ScrollReveal key={key} staggerItem>
              <GlassCard className="flex h-full flex-col justify-center gap-1 p-6 sm:p-7">
                <p className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {t(`bento.stats.${key}.value`)}
                </p>
                <p className="text-sm text-white/55">
                  {t(`bento.stats.${key}.label`)}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
