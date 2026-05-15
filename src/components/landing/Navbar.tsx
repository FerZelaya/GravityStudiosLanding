import { Menu } from "lucide-react";

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

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Plans" },
  { href: "#contact", label: "Contact" },
] as const;

function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#home"
      className={cn(
        "flex items-center gap-2.5 font-semibold tracking-tight",
        className,
      )}
    >
      <img
        src={logoNavbar}
        alt="Gravity Studios Logo"
        className="h-10 w-10 shrink-0  object-cover md:h-12 md:w-12"
        width={50}
        height={50}
        decoding="async"
      />
      <span className="text-base md:text-xl font-bold">Gravity Studios</span>
    </a>
  );
}

function NavLinks({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: () => void;
}) {
  return (
    <nav
      className={cn(
        "flex flex-col gap-1 md:flex-row md:items-center md:gap-8",
        className,
      )}
    >
      {links.map((link) => (
        <GradientBorderLink
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
        >
          {link.label}
        </GradientBorderLink>
      ))}
    </nav>
  );
}

export function Navbar() {
  return (
    <header className="bg-background/80 supports-backdrop-filter:backdrop-blur-md sticky top-0 z-50 border-b border-border/80">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:justify-start">
        <Logo className="relative z-10 shrink-0" />

        <NavLinks className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex" />

        <div className="ml-auto shrink-0 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="sr-only">Main menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-2 pb-6">
                <Logo />
                <div className="flex flex-col gap-2">
                  {links.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <GradientBorderLink
                        href={link.href}
                        className="w-full justify-center"
                        innerMaskClassName="bg-popover"
                        outerFill="var(--popover)"
                      >
                        {link.label}
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
