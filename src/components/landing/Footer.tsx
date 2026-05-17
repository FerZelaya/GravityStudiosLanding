import { useTranslation } from "react-i18next";

import { LanguageToggle } from "@/components/LanguageToggle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="dark border-t border-border/60 bg-background text-foreground">
      <ScrollReveal y={16} className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-muted-foreground text-center text-xs md:text-left">
          {t("footer.copyright")}
        </p>
        <LanguageToggle />
      </ScrollReveal>
    </footer>
  );
}
