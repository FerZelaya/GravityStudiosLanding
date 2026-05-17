import { useTranslation } from "react-i18next";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="dark bg-background text-foreground scroll-mt-24 border-t border-border/60 py-20 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t("about.title")}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-muted-foreground mt-6 text-pretty leading-relaxed">
            {t("about.paragraph1")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-muted-foreground mt-4 text-pretty leading-relaxed">
            {t("about.paragraph2")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
