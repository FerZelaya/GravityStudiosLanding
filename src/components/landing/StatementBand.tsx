import { useTranslation } from "react-i18next";

export function StatementBand() {
  const { t } = useTranslation();

  return (
    <section
      aria-label={t("statement.line")}
      className="relative overflow-hidden border-y border-white/5 bg-[#0a0a0a] bg-streaks py-20 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="font-heading text-[clamp(1.75rem,6vw,4.5rem)] font-bold tracking-tight text-white uppercase">
          {t("statement.line")}
        </p>
      </div>
    </section>
  );
}
