import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Gauge,
  HeartHandshake,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";

type BenefitId =
  | "design"
  | "responsive"
  | "performance"
  | "seo"
  | "support"
  | "tech";

const benefits: { id: BenefitId; icon: LucideIcon }[] = [
  { id: "design", icon: Sparkles },
  { id: "responsive", icon: Smartphone },
  { id: "performance", icon: Gauge },
  { id: "seo", icon: Search },
  { id: "support", icon: HeartHandshake },
  { id: "tech", icon: Code2 },
];

export function Benefits() {
  const { t } = useTranslation();

  return (
    <section
      id="benefits"
      className="relative scroll-mt-24 border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("benefits.eyebrow")}
            title={t("benefits.title")}
            description={t("benefits.description")}
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.id} as="article" staggerItem>
                <GlassCard className="flex h-full flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {t(`benefits.items.${benefit.id}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {t(`benefits.items.${benefit.id}.description`)}
                  </p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
