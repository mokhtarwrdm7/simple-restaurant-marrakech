import { copy, t } from "@/lib/copy";
import { PHONE, MAPS_DIRECTIONS, RESERVE_URL, type Lang } from "@/lib/site";

// Sticky mobile conversion bar — the three real actions one tap away on every
// page: Call · Reserve · Directions. Hidden on desktop (nav carries CTAs there).
export function MobileActionBar({ lang }: { lang: Lang }) {
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-plaster-soft/95 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-shell grid-cols-3 gap-2 px-3 py-2.5" style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}>
        <a
          href={`tel:${PHONE}`}
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 font-body text-[0.7rem] font-bold text-ink"
        >
          <PhoneIcon />
          {t(c.call, lang)}
        </a>
        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl bg-yellow py-1.5 font-body text-[0.7rem] font-bold text-ink"
        >
          <CalendarIcon />
          {t(copy.nav.reserve, lang)}
        </a>
        <a
          href={MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 font-body text-[0.7rem] font-bold text-ink"
        >
          <PinIcon />
          {t(c.directions, lang)}
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
