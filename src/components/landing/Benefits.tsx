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

import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

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
      className="dark bg-background text-foreground scroll-mt-24 border-t border-border/60 py-16 sm:py-20 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
            {t("benefits.eyebrow")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("benefits.title")}
          </h2>
          <p className="text-muted-foreground mt-4 text-pretty">
            {t("benefits.description")}
          </p>
        </ScrollReveal>

        <ScrollRevealGroup
          className={cn(
            "mt-12 grid gap-6 sm:mt-16",
            "sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal
                key={benefit.id}
                as="article"
                staggerItem
                className={cn(
                  "group/card flex flex-col gap-4 rounded-3xl border border-border/80 bg-card p-6 text-left text-card-foreground shadow-none ring-1 ring-foreground/10 transition-colors",
                  "hover:border-border hover:ring-foreground/20",
                )}
              >
                <div className="bg-muted ring-border flex size-12 items-center justify-center rounded-full ring-1">
                  <span className="bg-foreground text-background rounded-full p-2.5 shadow-inner">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug">
                  {t(`benefits.items.${benefit.id}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                  {t(`benefits.items.${benefit.id}.description`)}
                </p>
              </ScrollReveal>
            );
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
