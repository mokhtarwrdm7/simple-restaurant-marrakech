"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Wordmark } from "./Wordmark";
import { copy, t } from "@/lib/copy";
import { altLocalePath, localePath, RESERVE_URL, type Lang } from "@/lib/site";

const NAV = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "menu", path: "/menu" },
  { key: "contact", path: "/contact" },
] as const;

export function Nav({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || `/${lang}`;
  const nav = copy.nav as Record<string, { fr: string; en: string }>;
  const isHome = pathname === `/${lang}`;
  const overHero = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    const full = localePath(lang, path);
    return path === "/" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        overHero
          ? "border-transparent bg-transparent text-plaster"
          : "border-sand/60 bg-plaster/95 text-ink shadow-[0_12px_35px_-28px_rgba(36,26,18,0.7)] backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-shell items-center justify-between px-5 sm:px-8 lg:h-20">
        <a href={localePath(lang, "/")} className="shrink-0" aria-label="Simple Restaurant — accueil">
          <Wordmark className="text-[1.7rem]" tone={overHero ? "plaster" : "ink"} />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map(({ key, path }) => (
            <a
              key={key}
              href={localePath(lang, path)}
              className={`group relative py-3 font-body text-sm font-semibold transition-colors ${
                overHero
                  ? isActive(path)
                    ? "text-plaster"
                    : "text-plaster/75 hover:text-plaster"
                  : isActive(path)
                    ? "text-ink"
                    : "text-ink-soft hover:text-ink"
              }`}
            >
              {t(nav[key], lang)}
              <span
                className={`absolute inset-x-0 bottom-1 h-0.5 origin-left bg-yellow transition-transform duration-300 ${
                  isActive(path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={altLocalePath(lang, pathname)}
            className={`hidden rounded-lg border px-3 py-2 font-body text-xs font-bold uppercase tracking-wide transition-colors sm:inline-block ${
              overHero
                ? "border-plaster/35 text-plaster hover:border-plaster"
                : "border-ink/15 text-ink-soft hover:border-ink/40 hover:text-ink"
            }`}
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
          >
            {lang === "fr" ? "EN" : "FR"}
          </a>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-[0.8rem] bg-yellow px-5 py-2.5 font-body text-sm font-bold text-ink shadow-yellow transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-soft md:inline-block"
          >
            {t(copy.nav.reserve, lang)}
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border md:hidden ${
              overHero ? "border-plaster/35 text-plaster" : "border-ink/15 text-ink"
            }`}
            aria-expanded={open}
            aria-label={open ? (lang === "fr" ? "Fermer le menu" : "Close menu") : (lang === "fr" ? "Ouvrir le menu" : "Open menu")}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sand/70 bg-plaster px-5 pb-6 pt-2 text-ink shadow-lift md:hidden" aria-label="Mobile">
          {NAV.map(({ key, path }) => (
            <a
              key={key}
              href={localePath(lang, path)}
              onClick={() => setOpen(false)}
              className={`block border-b border-sand/60 py-3.5 font-display text-lg font-bold ${
                isActive(path) ? "text-clay" : "text-ink"
              }`}
            >
              {t(nav[key], lang)}
            </a>
          ))}
          <div className="mt-5 flex items-center gap-3">
            <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-[0.8rem] bg-yellow py-3 text-center font-body font-bold text-ink">
              {t(copy.nav.reserve, lang)}
            </a>
            <a href={altLocalePath(lang, pathname)} onClick={() => setOpen(false)} className="rounded-[0.8rem] border border-ink/20 px-4 py-3 font-body text-sm font-bold uppercase text-ink">
              {lang === "fr" ? "EN" : "FR"}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
