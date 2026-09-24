import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

import logoNavbar from "@/assets/gravity-logo-navbar-4.png";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 12;

const linkKeys = [
  { href: "#services", key: "nav.services" },
  { href: "#process", key: "nav.process" },
  { href: "#work", key: "nav.work" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#faq", key: "nav.faq" },
] as const;

function useNavbarScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return isScrolled;
}

function Logo({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <a
      href="#home"
      className={cn(
        "flex items-center gap-2.5 font-semibold tracking-tight text-white transition-opacity hover:opacity-90",
        className,
      )}
    >
      <img
        src={logoNavbar}
        alt={t("nav.logoAlt")}
        className="h-9 w-9 shrink-0 object-cover brightness-0 invert md:h-10 md:w-10"
        width={40}
        height={40}
        decoding="async"
      />
      <span className="font-heading text-base font-bold md:text-lg">
        Gravity Studios
      </span>
    </a>
  );
}

export function Navbar() {
  const { t } = useTranslation();
  const isScrolled = useNavbarScrolled();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full px-4 transition-all duration-300 sm:h-16 sm:px-5",
          isScrolled
            ? "border border-white/10 bg-black/70 shadow-lg shadow-black/40 backdrop-blur-xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <Logo className="relative z-10 shrink-0" />

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex">
          {linkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <LanguageToggle className="hidden md:inline-flex" />
          <Button
            asChild
            className="hidden h-10 rounded-full bg-white px-4 text-black hover:bg-white/90 sm:inline-flex"
          >
            <a href="#contact" className="inline-flex items-center gap-1.5">
              {t("nav.cta")}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </Button>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  aria-label={t("nav.openMenu")}
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100%,20rem)] border-white/10 bg-[#0a0a0a] text-white"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">{t("nav.mainMenu")}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 px-2 pb-6">
                  <Logo />
                  <div className="flex flex-col gap-1">
                    {linkKeys.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="rounded-xl px-3 py-3 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {t(link.key)}
                        </a>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <a
                        href="#contact"
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-black"
                      >
                        {t("nav.cta")}
                        <ArrowRight className="size-4" aria-hidden />
                      </a>
                    </SheetClose>
                  </div>
                  <LanguageToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
