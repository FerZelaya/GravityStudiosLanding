import { useTranslation } from "react-i18next";

const techLogos = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Stripe",
  "Shopify",
  "Vercel",
  "OpenAI",
  "Figma",
] as const;

export function TrustStrip() {
  const { t } = useTranslation();
  const items = [...techLogos, ...techLogos];

  return (
    <section
      aria-label={t("tech.title")}
      className="relative border-y border-white/5 bg-[#0a0a0a] py-10"
    >
      <p className="mb-6 text-center text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
        {t("tech.title")}
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-24" />
        <div className="animate-marquee flex w-max items-center gap-10 px-6 sm:gap-14">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-heading shrink-0 text-lg font-semibold tracking-tight text-white/35 transition-colors hover:text-white/70 sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
