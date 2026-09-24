import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { pricingTierMeta, type PricingTierId } from "@/content/pricing";
import { cn } from "@/lib/utils";

function tierFeatures(t: TFunction, id: PricingTierId): string[] {
  const features = t(`pricing.tiers.${id}.features`, { returnObjects: true });
  return Array.isArray(features) ? (features as string[]) : [];
}

export function Pricing() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[min(90%,640px)] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("pricing.eyebrow")}
            title={t("pricing.title")}
            description={t("pricing.description")}
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">
          {pricingTierMeta.map((tier) => {
            const Icon = tier.icon;
            const features = tierFeatures(t, tier.id);
            const popular = tier.id === "professional";

            return (
              <ScrollReveal key={tier.id} staggerItem as="article">
                <GlassCard
                  glow={popular}
                  className={cn(
                    "relative flex h-full flex-col p-6 sm:p-7",
                    popular && "border-white/30 bg-white/[0.06]",
                  )}
                >
                  {popular ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold tracking-wide text-black uppercase">
                      {t("pricing.popular")}
                    </span>
                  ) : null}

                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                    <Icon className="size-5" aria-hidden />
                  </div>

                  <h3 className="font-heading text-sm font-semibold tracking-wide text-white/70 uppercase">
                    {t(`pricing.tiers.${tier.id}.title`)}
                  </h3>
                  <p className="mt-1 text-xs text-white/45">
                    {t(`pricing.tiers.${tier.id}.subtitle`)}
                  </p>
                  <p className="font-heading mt-5 text-4xl font-semibold tabular-nums text-white">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-xs text-white/40">{tier.maintenance}</p>

                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-snug text-white/65"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-white"
                          aria-hidden
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={cn(
                      "mt-8 h-11 w-full rounded-full",
                      popular
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
                    )}
                  >
                    <a href="#contact">{t("pricing.cta")}</a>
                  </Button>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
