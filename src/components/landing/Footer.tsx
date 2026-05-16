import { useTranslation } from "react-i18next";

import { LanguageToggle } from "@/components/LanguageToggle";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-zinc-500 text-center text-xs md:text-left">
          {t("footer.copyright")}
        </p>
        <LanguageToggle />
      </div>
    </footer>
  );
}
