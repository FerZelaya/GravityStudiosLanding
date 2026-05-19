import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { pricingTierMeta, type PricingTierId } from "@/content/pricing";
import { useIsMobile } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

function tierFeatures(t: TFunction, id: PricingTierId): string[] {
  const features = t(`pricing.tiers.${id}.features`, { returnObjects: true });
  return Array.isArray(features) ? (features as string[]) : [];
}

function PricingCard({
  tier,
  t,
  staggerItem = false,
  delay = 0,
}: {
  tier: (typeof pricingTierMeta)[number];
  t: TFunction;
  staggerItem?: boolean;
  delay?: number;
}) {
  const Icon = tier.icon;
  const features = tierFeatures(t, tier.id);

  return (
    <ScrollReveal
      delay={delay}
      as="article"
      staggerItem={staggerItem}
      className={cn(
        "group/card overflow-hidden rounded-3xl border border-border/80 bg-card text-sm text-card-foreground text-center shadow-none ring-1 ring-foreground/10",
        "max-md:flex max-md:flex-col max-md:gap-4 max-md:py-4",
        "md:row-span-6 md:grid md:min-w-0 md:[grid-template-rows:subgrid] md:gap-y-3 md:py-4 md:pb-0",
      )}
    >
      <CardTitle className="text-balance px-4 text-sm font-semibold tracking-wide uppercase">
        {t(`pricing.tiers.${tier.id}.title`)}
      </CardTitle>
      <CardDescription className="text-muted-foreground px-4 text-xs text-pretty">
        {t(`pricing.tiers.${tier.id}.subtitle`)}
      </CardDescription>
      <div className="bg-muted mx-auto flex size-14 items-center justify-center rounded-full ring-1 ring-border">
        <span className="bg-foreground text-background rounded-full p-2.5 shadow-inner">
          <Icon className="size-5" aria-hidden />
        </span>
      </div>
      <p className="text-foreground px-4 text-center text-3xl font-semibold tabular-nums">
        {tier.price}
      </p>
      <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-4 px-6 pb-2 text-center max-md:flex-1 md:h-full">
        <Separator className="max-w-xs" />
        <ul className="text-muted-foreground w-full max-w-sm space-y-2.5 text-sm">
          {features.map((feature) => (
            <li key={feature} className="text-balance leading-snug">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        data-slot="card-footer"
        className="flex items-center justify-center rounded-b-xl border-t border-border/80 bg-muted/50 p-4 pb-6"
      >
        <Button
          type="button"
          variant="outline"
          className="rounded-full border-border px-6 hover:bg-muted"
          asChild
        >
          <a href="#contact">{t("pricing.cta")}</a>
        </Button>
      </div>
    </ScrollReveal>
  );
}

export function Pricing() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section
      id="pricing"
      className="dark bg-background text-foreground relative scroll-mt-24 overflow-hidden py-16 sm:py-20 md:scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 flex justify-end"
        aria-hidden
      >
        <Spotlight
          align="right"
          className="-top-32 right-0 opacity-80 md:-top-40 md:right-[15%]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
            {t("pricing.eyebrow")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground mt-4 text-pretty">
            {t("pricing.description")}
          </p>
        </ScrollReveal>

        {isMobile ? (
          <div className="mt-10 grid gap-6 sm:mt-14">
            {pricingTierMeta.map((tier, index) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                t={t}
                delay={index * 0.08}
              />
            ))}
          </div>
        ) : (
          <ScrollRevealGroup
            className={cn(
              "mt-14 grid gap-6",
              "md:grid-cols-3 md:grid-rows-[auto_auto_auto_auto_1fr_auto] md:items-stretch",
            )}
          >
            {pricingTierMeta.map((tier) => (
              <PricingCard key={tier.id} tier={tier} t={t} staggerItem />
            ))}
          </ScrollRevealGroup>
        )}
      </div>
    </section>
  );
}
