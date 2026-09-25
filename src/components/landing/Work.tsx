import { ArrowUpRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import conceptDashboard from "@/assets/concepts/concept-dashboard.png";
import conceptEcommerce from "@/assets/concepts/concept-ecommerce.png";
import conceptMobile from "@/assets/concepts/concept-mobile.png";
import santisoMockup from "@/assets/clients/santiso-mockup.png";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
const SANTISO_URL = "https://santisohn.com";
const highlightKeys = ["design", "sections", "i18n"] as const;

const concepts = [
  { id: "dashboard", image: conceptDashboard },
  { id: "ecommerce", image: conceptEcommerce },
  { id: "mobile", image: conceptMobile },
] as const;

export function Work() {
  const { t } = useTranslation();

  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("work.eyebrow")}
            title={t("work.title")}
            description={t("work.description")}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-12 sm:mt-16">
          <GlassCard glow className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <div className="flex flex-col gap-6 p-6 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium tracking-wide text-white/80 uppercase">
                    {t("work.santiso.tag")}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {t("work.santiso.name")}
                </h3>

                <p className="text-pretty leading-relaxed text-white/60">
                  {t("work.santiso.description")}
                </p>

                <ul className="flex flex-col gap-3">
                  {highlightKeys.map((key) => (
                    <li
                      key={key}
                      className="flex items-start gap-3 text-sm leading-snug"
                    >
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-black">
                        <Check className="size-3" aria-hidden />
                      </span>
                      <span className="text-white/80">
                        {t(`work.santiso.highlights.${key}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2">
                  <Button
                    type="button"
                    className="rounded-full bg-white px-5 text-black hover:bg-white/90"
                    asChild
                  >
                    <a
                      href={SANTISO_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2"
                    >
                      {t("work.viewProject")}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative flex items-center justify-center border-t border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10 lg:border-t-0 lg:border-l">
                <img
                  src={santisoMockup}
                  alt={t("work.santiso.imageAlt")}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full rounded-2xl object-cover shadow-lg ring-1 ring-white/10"
                />
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        <div className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {concepts.map((concept, index) => (
            <ScrollReveal
              key={concept.id}
              delay={0.1 + index * 0.06}
              className="w-[82%] max-w-[340px] min-w-0 shrink-0 snap-start sm:w-auto sm:max-w-none"
            >
              <GlassCard className="group h-full overflow-hidden p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={concept.image}
                    alt={t(`work.concepts.${concept.id}.imageAlt`)}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/80 uppercase backdrop-blur-sm">
                    {t("work.conceptBadge")}
                  </span>
                </div>
                <div className="space-y-1.5 p-5">
                  <p className="text-xs font-medium tracking-wide text-white/50 uppercase">
                    {t(`work.concepts.${concept.id}.tag`)}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {t(`work.concepts.${concept.id}.name`)}
                  </h3>
                  <p className="text-sm text-white/55">
                    {t(`work.concepts.${concept.id}.description`)}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
