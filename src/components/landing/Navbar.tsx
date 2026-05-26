import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

import logoNavbar from "@/assets/gravity-logo-navbar-4.png";
import { GradientBorderLink } from "@/components/ui/gradient-border-link";
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
  { href: "#home", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#benefits", key: "nav.benefits" },
  { href: "#pricing", key: "nav.plans" },
  { href: "#clients", key: "nav.clients" },
  { href: "#contact", key: "nav.contact" },
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

function Logo({
  className,
  isScrolled,
}: {
  className?: string;
  isScrolled: boolean;
}) {
  const { t } = useTranslation();

  return (
    <a
      href="#home"
      className={cn(
        "flex items-center gap-2.5 font-semibold tracking-tight transition-colors",
        isScrolled ? "text-foreground" : "text-white",
        className,
      )}
    >
      <img
        src={logoNavbar}
        alt={t("nav.logoAlt")}
        className={cn(
          "h-10 w-10 shrink-0 object-cover transition-[filter] duration-300 md:h-12 md:w-12",
          !isScrolled && "brightness-0 invert",
        )}
        width={50}
        height={50}
        decoding="async"
      />
      <span className="text-base font-bold md:text-xl">Gravity Studios</span>
    </a>
  );
}

function NavLinks({
  className,
  onLinkClick,
  isScrolled,
}: {
  className?: string;
  onLinkClick?: () => void;
  isScrolled: boolean;
}) {
  const { t } = useTranslation();

  return (
    <nav
      className={cn(
        "flex flex-col gap-1 md:flex-row md:items-center md:gap-8",
        className,
      )}
    >
      {linkKeys.map((link) => (
        <GradientBorderLink
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          surface={isScrolled ? "light" : "dark"}
          outerFill={isScrolled ? "var(--background)" : "transparent"}
          borderStopColor={isScrolled ? "var(--border)" : "transparent"}
          innerMaskClassName={
            isScrolled ? "bg-background" : "bg-transparent"
          }
          textClassName={
            isScrolled
              ? "text-muted-foreground group-hover:text-foreground"
              : "text-zinc-100 group-hover:text-white"
          }
        >
          {t(link.key)}
        </GradientBorderLink>
      ))}
    </nav>
  );
}

export function Navbar() {
  const { t } = useTranslation();
  const isScrolled = useNavbarScrolled();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-border/80 bg-background supports-backdrop-filter:backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:justify-start">
        <Logo className="relative z-10 shrink-0" isScrolled={isScrolled} />

        <NavLinks
          isScrolled={isScrolled}
          className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
        />

        <div className="ml-auto shrink-0 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label={t("nav.openMenu")}
                className={cn(
                  "transition-colors",
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10",
                )}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="sr-only">{t("nav.mainMenu")}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-2 pb-6">
                <Logo isScrolled={true} />
                <div className="flex flex-col gap-2">
                  {linkKeys.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <GradientBorderLink
                        href={link.href}
                        className="w-full justify-center"
                        innerMaskClassName="bg-popover"
                        outerFill="var(--popover)"
                      >
                        {t(link.key)}
                      </GradientBorderLink>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
