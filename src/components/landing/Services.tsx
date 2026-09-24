import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { servicesMeta } from "@/content/services";

export function Services() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            description={t("services.description")}
          />
        </ScrollReveal>

        <ScrollRevealGroup className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesMeta.map((service) => {
            const Icon = service.icon;
            const bullets = t(`services.items.${service.id}.bullets`, {
              returnObjects: true,
            });
            const bulletList = Array.isArray(bullets)
              ? (bullets as string[])
              : [];

            return (
              <ScrollReveal key={service.id} staggerItem as="article">
                <GlassCard className="group flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(`services.items.${service.id}.imageAlt`)}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover grayscale transition-[transform,filter] duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-xl border border-white/15 bg-black/50 text-white backdrop-blur-md">
                      <Icon className="size-5" aria-hidden />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {t(`services.items.${service.id}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/55">
                      {t(`services.items.${service.id}.description`)}
                    </p>
                    <ul className="mt-auto flex flex-col gap-2 pt-2">
                      {bulletList.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-xs leading-snug text-white/70"
                        >
                          <Check
                            className="mt-0.5 size-3.5 shrink-0 text-white"
                            aria-hidden
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
