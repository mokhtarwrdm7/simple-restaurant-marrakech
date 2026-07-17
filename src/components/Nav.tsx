"use client";

import { useState } from "react";
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
  const pathname = usePathname() || `/${lang}`;
  const nav = copy.nav as Record<string, { fr: string; en: string }>;

  const isActive = (p: string) => {
    const full = localePath(lang, p);
    return p === "/" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-plaster/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 sm:px-8 lg:h-[4.75rem]">
        <a href={localePath(lang, "/")} className="shrink-0" aria-label="Simple Restaurant — accueil">
          <Wordmark className="text-2xl" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map(({ key, path }) => (
            <a
              key={key}
              href={localePath(lang, path)}
              className={`font-body text-sm font-semibold transition-colors ${
                isActive(path) ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {t(nav[key], lang)}
              {isActive(path) && <span className="mx-auto mt-0.5 block h-0.5 w-4 rounded-full bg-yellow" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={altLocalePath(lang, pathname)}
            className="hidden rounded-full border border-ink/15 px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wide text-ink-soft transition-colors hover:border-ink/40 hover:text-ink sm:inline-block"
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
          >
            {lang === "fr" ? "EN" : "FR"}
          </a>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-yellow px-5 py-2.5 font-body text-sm font-bold text-ink shadow-yellow transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-deep md:inline-block"
          >
            {t(copy.nav.reserve, lang)}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-ink transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav className="border-t border-sand/70 bg-plaster px-5 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {NAV.map(({ key, path }) => (
            <a
              key={key}
              href={localePath(lang, path)}
              onClick={() => setOpen(false)}
              className={`block border-b border-sand/60 py-3.5 font-display text-lg font-bold ${
                isActive(path) ? "text-yellow-deep" : "text-ink"
              }`}
            >
              {t(nav[key], lang)}
            </a>
          ))}
          <div className="mt-5 flex items-center gap-3">
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-yellow py-3 text-center font-body font-bold text-ink"
            >
              {t(copy.nav.reserve, lang)}
            </a>
            <a
              href={altLocalePath(lang, pathname)}
              onClick={() => setOpen(false)}
              className="rounded-full border border-ink/20 px-4 py-3 font-body text-sm font-bold uppercase text-ink"
            >
              {lang === "fr" ? "EN" : "FR"}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
