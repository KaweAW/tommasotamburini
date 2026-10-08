"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { pageKeys, routes } from "@/lib/routes";

function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the phone menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the phone menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const langLabel = language === "en" ? "Italiano" : "English";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Desktop and tablet: the original large header */}
        <div className="container mx-auto hidden px-4 py-6 md:block">
          <div className="mb-6 text-center">
            <p className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
              <Link href="/">Tommaso Tamburini</Link>
            </p>
            <p className="mt-2 font-semibold text-black/70">{t.subtitle}</p>
          </div>

          <div className="mb-4 flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-transparent"
            >
              <Globe className="h-4 w-4" />
              {langLabel}
            </Button>
          </div>

          <nav aria-label="Main" className="mb-8 flex justify-center space-x-1">
            {pageKeys.map((key) => (
              <Link
                key={key}
                href={routes[key]}
                aria-current={isActive(routes[key]) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(routes[key])
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Phones: one slim bar, the menu opens full screen */}
        <div className="flex h-14 items-center justify-between px-4 md:hidden">
          <Link
            href="/"
            className="text-lg font-bold leading-none text-foreground"
          >
            Tommaso Tamburini
          </Link>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={langLabel}
              className="flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-semibold uppercase text-muted-foreground active:bg-primary/10"
            >
              {language === "en" ? "IT" : "EN"}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground active:bg-primary/10"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto bg-background px-6 py-6 md:hidden"
        >
          <p className="mb-4 text-sm font-semibold text-black/70">
            {t.subtitle}
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {pageKeys.map((key) => (
              <li key={key}>
                <Link
                  href={routes[key]}
                  aria-current={isActive(routes[key]) ? "page" : undefined}
                  className={`flex min-h-14 items-center text-2xl font-semibold ${
                    isActive(routes[key]) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-12 border-t border-border bg-muted/50 md:mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="container mx-auto flex-1 px-4 py-6 md:py-8">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
