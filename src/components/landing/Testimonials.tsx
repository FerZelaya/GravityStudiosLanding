import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-12 sm:mt-16">
          <GlassCard className="flex flex-col items-center gap-6 p-8 text-center sm:p-12">
            <Quote className="size-8 text-white/30" aria-hidden />
            <blockquote className="font-heading text-lg leading-relaxed text-white/85 sm:text-xl">
              &ldquo;{t("testimonials.santiso.quote")}&rdquo;
            </blockquote>
            <div>
              <p className="font-heading text-base font-semibold text-white">
                {t("testimonials.santiso.name")}
              </p>
              <p className="text-sm text-white/45">
                {t("testimonials.santiso.role")}
              </p>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
