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

// Clay-terracotta footer (a medina-wall dark band) — closes the page on the
// brand's deepest ground, echoing the reservation band rather than the donor's.
export function Footer({ lang }: { lang: Lang }) {
  const nav = copy.nav as Record<string, { fr: string; en: string }>;
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-clay text-plaster/90">
      <div className="mx-auto grid max-w-shell gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark className="text-3xl" tone="plaster" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-plaster/75">
            {t(copy.footer.tagline, lang)}
          </p>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-yellow px-6 py-3 font-body text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            {t(c.reserve, lang)}
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          <p className="mb-1 font-body text-xs font-bold uppercase tracking-eyebrow text-yellow-soft">
            {lang === "fr" ? "Navigation" : "Explore"}
          </p>
          {NAV.map(({ key, path }) => (
            <a key={key} href={localePath(lang, path)} className="w-fit text-sm text-plaster/80 transition-colors hover:text-plaster">
              {t(nav[key], lang)}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <p className="mb-1 font-body text-xs font-bold uppercase tracking-eyebrow text-yellow-soft">
            {lang === "fr" ? "Nous trouver" : "Find us"}
          </p>
          <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-plaster/80 transition-colors hover:text-plaster">
            {ADDRESS}
          </a>
          <a href={`tel:${PHONE}`} className="text-sm text-plaster/80 transition-colors hover:text-plaster">
            {PHONE_DISPLAY}
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-plaster/80 transition-colors hover:text-plaster">
            Instagram @simple.restaurant_
          </a>
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
