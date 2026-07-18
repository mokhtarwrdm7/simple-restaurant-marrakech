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

  const isActive = (path: string) => {
    const full = localePath(lang, path);
    return path === "/" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-simple-day-line bg-simple-day text-simple-night">
      <div className="mx-auto flex h-[4.5rem] max-w-shell items-center justify-between px-5 sm:px-8">
        <a href={localePath(lang, "/")} className="shrink-0" aria-label="Simple Restaurant home">
          <Wordmark className="text-[1.55rem]" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map(({ key, path }) => (
            <a
              key={key}
              href={localePath(lang, path)}
              className={`border-b py-2 text-sm font-medium transition-colors ${
                isActive(path)
                  ? "border-simple-sun text-simple-night"
                  : "border-transparent text-simple-night-muted hover:text-simple-night"
              }`}
            >
              {t(nav[key], lang)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={altLocalePath(lang, pathname)}
            className="hidden border border-simple-day-line px-3 py-2 text-xs font-semibold uppercase transition-colors hover:border-simple-night sm:inline-block"
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
          >
            {lang === "fr" ? "EN" : "FR"}
          </a>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-simple-sun bg-simple-sun px-5 py-2.5 text-sm font-semibold text-simple-night transition-colors hover:border-simple-sun-deep hover:bg-simple-sun-deep md:inline-block"
          >
            {t(copy.nav.reserve, lang)}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 min-w-14 items-center justify-center border border-simple-day-line px-3 text-sm font-semibold md:hidden"
            aria-expanded={open}
            aria-label={open ? (lang === "fr" ? "Fermer le menu" : "Close menu") : (lang === "fr" ? "Ouvrir le menu" : "Open menu")}
          >
            {open ? (lang === "fr" ? "Fermer" : "Close") : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-simple-day-line bg-simple-day px-5 pb-5 md:hidden" aria-label="Mobile">
          {NAV.map(({ key, path }) => (
            <a
              key={key}
              href={localePath(lang, path)}
              onClick={() => setOpen(false)}
              className={`block border-b border-simple-day-line py-3.5 font-display text-lg font-medium ${
                isActive(path) ? "text-simple-coral-deep" : "text-simple-night"
              }`}
            >
              {t(nav[key], lang)}
            </a>
          ))}
          <div className="mt-4 flex gap-3">
            <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="flex-1 bg-simple-sun py-3 text-center font-semibold text-simple-night">
              {t(copy.nav.reserve, lang)}
            </a>
            <a href={altLocalePath(lang, pathname)} onClick={() => setOpen(false)} className="border border-simple-day-line px-4 py-3 text-sm font-semibold uppercase">
              {lang === "fr" ? "EN" : "FR"}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
