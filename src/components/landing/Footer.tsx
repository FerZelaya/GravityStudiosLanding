import { useTranslation } from "react-i18next";

import { LanguageToggle } from "@/components/LanguageToggle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const footerLinks = [
  { href: "#services", key: "footer.links.services" },
  { href: "#process", key: "footer.links.process" },
  { href: "#work", key: "footer.links.work" },
  { href: "#pricing", key: "footer.links.pricing" },
  { href: "#faq", key: "footer.links.faq" },
  { href: "#contact", key: "footer.links.contact" },
] as const;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black text-white">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
        <p className="font-heading translate-y-1/3 text-center text-[clamp(4rem,18vw,12rem)] font-bold tracking-tighter text-white/[0.03]">
          GRAVITY
        </p>
      </div>

      <ScrollReveal y={16} className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-heading text-xl font-bold">Gravity Studios</p>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              {t("footer.tagline")}
            </p>
            <LanguageToggle />
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-white/40 uppercase">
              {t("footer.columns.company")}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-white/40 uppercase">
              {t("footer.columns.contact")}
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/65">
              <li>
                <a
                  href={`mailto:${t("contact.email.value")}`}
                  className="transition-colors hover:text-white"
                >
                  {t("contact.email.value")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/40 md:text-left">
          {t("footer.copyright")}
        </p>
      </ScrollReveal>
    </footer>
  );
}
