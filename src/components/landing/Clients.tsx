import { ArrowUpRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import santisoMockup from "@/assets/clients/santiso-mockup.png";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Spotlight } from "@/components/ui/spotlight";

const SANTISO_URL = "https://santisohn.com";

const highlightKeys = ["design", "sections", "i18n"] as const;

export function Clients() {
  const { t } = useTranslation();

  return (
    <section
      id="clients"
      className="dark bg-background text-foreground relative scroll-mt-24 overflow-hidden border-t border-border/60 py-16 sm:py-20 md:scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 flex"
        aria-hidden
      >
        <Spotlight
          align="left"
          className="-top-32 left-0 opacity-60 md:-top-40 md:left-[10%]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
            {t("clients.eyebrow")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("clients.title")}
          </h2>
          <p className="text-muted-foreground mt-4 text-pretty">
            {t("clients.description")}
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={0.08}
          className="mt-12 overflow-hidden rounded-3xl border border-border/80 bg-card text-card-foreground shadow-none ring-1 ring-foreground/10 sm:mt-16"
        >
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="flex flex-col gap-6 p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ring-1 ring-border">
                  {t("clients.santiso.tag")}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                {t("clients.santiso.name")}
              </h3>

              <p className="text-muted-foreground text-pretty leading-relaxed">
                {t("clients.santiso.description")}
              </p>

              <ul className="flex flex-col gap-3">
                {highlightKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-sm leading-snug"
                  >
                    <span className="bg-foreground text-background mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check className="size-3" aria-hidden />
                    </span>
                    <span className="text-foreground/90">
                      {t(`clients.santiso.highlights.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-border px-5 hover:bg-muted"
                  asChild
                >
                  <a
                    href={SANTISO_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2"
                  >
                    {t("clients.viewProject")}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative flex items-center justify-center border-t border-border/80 bg-muted/30 p-6 sm:p-8 md:p-10 lg:border-l lg:border-t-0">
              <img
                src={santisoMockup}
                alt={t("clients.santiso.imageAlt")}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-2xl object-cover shadow-sm ring-1 ring-foreground/10"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
