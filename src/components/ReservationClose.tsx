import { Cta } from "./Cta";
import { Img } from "./Img";
import { displayCopy } from "./DisplayCopy";
import { copy } from "@/lib/copy";
import { PHONE, RESERVE_URL, type Lang } from "@/lib/site";

export function ReservationClose({ lang, image = "/img/hero-lights.webp" }: { lang: Lang; image?: string }) {
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  return (
    <section className="relative flex min-h-[68dvh] items-end overflow-hidden bg-simple-night text-simple-day">
      <Img
        src={image}
        alt={lang === "fr" ? "Terrasse de Simple sous les guirlandes au coucher du soleil" : "Simple terrace under string lights at sunset"}
        fill
        className="absolute inset-0"
        position="center 55%"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,26,18,0.08)_10%,rgba(36,26,18,0.9)_100%)]" />
      <div className="relative mx-auto grid w-full max-w-shell gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.25rem)] font-medium leading-[0.94] tracking-[-0.03em] text-simple-day">
            {displayCopy(copy.reserveBand.title, lang)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-simple-day/80 sm:text-lg">
            {displayCopy(copy.reserveBand.body, lang)}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Cta href={RESERVE_URL} variant="sun" size="lg" external>{displayCopy(c.reserve, lang)}</Cta>
          <Cta href={`tel:${PHONE}`} variant="light" size="lg">{displayCopy(c.call, lang)}</Cta>
        </div>
      </div>
    </section>
  );
}
