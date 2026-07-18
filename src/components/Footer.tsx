import { Wordmark } from "./Wordmark";
import { displayCopy } from "./DisplayCopy";
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
    <footer className="bg-simple-night text-simple-day/90">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-14 sm:px-8 md:pb-14 md:pt-20">
        <div className="grid gap-10 border-b border-simple-day/20 pb-12 md:grid-cols-[1.45fr_0.55fr] md:items-end">
          <div>
            <Wordmark className="text-[clamp(3.25rem,8vw,6.6rem)]" tone="day" />
            <p className="mt-5 max-w-lg text-base leading-7 text-simple-day/70 sm:text-lg">
              {displayCopy(copy.footer.tagline, lang)}
            </p>
          </div>
          <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between border-y border-simple-day/40 py-4 font-semibold text-simple-day transition-colors hover:border-simple-sun hover:text-simple-sun">
            {displayCopy(c.reserve, lang)} <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-[1fr_1.25fr]">
          <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-6 gap-y-3">
            {NAV.map(({ key, path }) => (
              <a key={key} href={localePath(lang, path)} className="text-sm font-medium text-simple-day/72 transition-colors hover:text-simple-sun">
                {t(nav[key], lang)}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 md:items-end md:text-right">
            <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="max-w-md text-sm leading-6 text-simple-day/72 transition-colors hover:text-simple-day">
              {ADDRESS}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              <a href={`tel:${PHONE}`} className="text-sm text-simple-day/72 transition-colors hover:text-simple-sun">{PHONE_DISPLAY}</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-sm text-simple-day/72 transition-colors hover:text-simple-sun">@simple.restaurant_</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-simple-day/15">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-5 text-xs text-simple-day/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} Simple Restaurant, Marrakech. {displayCopy(copy.footer.rights, lang)}</p>
          <p className="max-w-md sm:text-right">{displayCopy(copy.footer.madeNote, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
