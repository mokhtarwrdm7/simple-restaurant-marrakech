import { Wordmark } from "./Wordmark";
import { copy, t } from "@/lib/copy";
import {
  ADDRESS,
  INSTAGRAM,
  MAPS_DIRECTIONS,
  PHONE,
  PHONE_DISPLAY,
  RESERVE_URL,
  localePath,
  type Lang,
} from "@/lib/site";

const NAV = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "menu", path: "/menu" },
  { key: "contact", path: "/contact" },
] as const;

export function Footer({ lang }: { lang: Lang }) {
  const nav = copy.nav as Record<string, { fr: string; en: string }>;
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-plaster/90">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-16 sm:px-8 md:pb-14 md:pt-20">
        <div className="grid gap-10 border-b border-plaster/15 pb-12 md:grid-cols-[1.5fr_0.8fr] md:items-end">
          <div>
            <Wordmark className="text-[clamp(3.5rem,9vw,7rem)]" tone="plaster" />
            <p className="mt-5 max-w-lg text-base leading-relaxed text-plaster/70 sm:text-lg">
              {t(copy.footer.tagline, lang)}
            </p>
          </div>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-16 items-center justify-between rounded-[0.9rem] bg-yellow px-6 font-body font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-soft md:min-h-20 md:px-8"
          >
            {t(c.reserve, lang)} <span aria-hidden className="text-2xl">↗</span>
          </a>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-[1fr_1.25fr]">
          <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-6 gap-y-3">
            {NAV.map(({ key, path }) => (
              <a key={key} href={localePath(lang, path)} className="text-sm font-semibold text-plaster/75 transition-colors hover:text-yellow">
                {t(nav[key], lang)}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 md:items-end md:text-right">
            <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="max-w-md text-sm leading-relaxed text-plaster/75 transition-colors hover:text-plaster">
              {ADDRESS}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              <a href={`tel:${PHONE}`} className="text-sm text-plaster/75 transition-colors hover:text-yellow">{PHONE_DISPLAY}</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-sm text-plaster/75 transition-colors hover:text-yellow">@simple.restaurant_</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-plaster/15">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-5 text-xs text-plaster/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} Simple Restaurant, Marrakech. {t(copy.footer.rights, lang)}</p>
          <p className="max-w-md sm:text-right">{t(copy.footer.madeNote, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
