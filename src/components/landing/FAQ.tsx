import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqKeys = [
  "timeline",
  "pricing",
  "maintenance",
  "hosting",
  "revisions",
  "languages",
] as const;

export function FAQ() {
  const { t } = useTranslation();

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 border-t border-white/5 bg-[#0a0a0a] py-20 sm:py-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
            description={t("faq.description")}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-10 sm:mt-12">
          <GlassCard className="p-2 sm:p-4">
            <Accordion type="single" collapsible className="w-full px-2 sm:px-3">
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger>
                    {t(`faq.items.${key}.q`)}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(`faq.items.${key}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
