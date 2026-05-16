import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border/60 bg-muted/20 py-20 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t("about.title")}
        </h2>
        <p className="text-muted-foreground mt-6 text-pretty leading-relaxed">
          {t("about.paragraph1")}
        </p>
        <p className="text-muted-foreground mt-4 text-pretty leading-relaxed">
          {t("about.paragraph2")}
        </p>
      </div>
    </section>
  );
}
