import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  className?: string;
};

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith("es") ? "es" : "en";

  function setLanguage(lng: "en" | "es") {
    if (lng !== current) void i18n.changeLanguage(lng);
  }

  return (
    <div
      role="group"
      aria-label={t("footer.language")}
      className={cn("inline-flex items-center gap-1", className)}
    >
      <LangButton
        active={current === "en"}
        label={t("language.en")}
        onClick={() => setLanguage("en")}
        switchLabel={t("language.switchTo", { language: t("language.en") })}
      />
      <span className="text-border select-none" aria-hidden>
        |
      </span>
      <LangButton
        active={current === "es"}
        label={t("language.es")}
        onClick={() => setLanguage("es")}
        switchLabel={t("language.switchTo", { language: t("language.es") })}
      />
    </div>
  );
}

function LangButton({
  active,
  label,
  onClick,
  switchLabel,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  switchLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={switchLabel}
      className={cn(
        "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
        active
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
