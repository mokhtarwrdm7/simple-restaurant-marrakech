import { copy, t } from "@/lib/copy";
import { PHONE, MAPS_DIRECTIONS, RESERVE_URL, type Lang } from "@/lib/site";

export function MobileActionBar({ lang }: { lang: Lang }) {
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-simple-day-line bg-simple-day md:hidden">
      <div
        className="mx-auto grid max-w-shell grid-cols-3"
        style={{ paddingBottom: "max(0rem, env(safe-area-inset-bottom))" }}
      >
        <a href={`tel:${PHONE}`} className="flex min-h-14 items-center justify-center border-r border-simple-day-line px-2 text-sm font-semibold text-simple-night">
          {t(c.call, lang)}
        </a>
        <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center bg-simple-sun px-2 text-sm font-semibold text-simple-night">
          {t(copy.nav.reserve, lang)}
        </a>
        <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center border-l border-simple-day-line px-2 text-sm font-semibold text-simple-night">
          {t(c.directions, lang)}
        </a>
      </div>
    </div>
  );
}
