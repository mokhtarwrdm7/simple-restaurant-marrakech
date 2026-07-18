import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { displayCopy } from "@/components/DisplayCopy";
import { Img } from "@/components/Img";
import { ReservationClose } from "@/components/ReservationClose";
import { copy, t } from "@/lib/copy";
import {
  INSTAGRAM,
  MAPS_DIRECTIONS,
  MAPS_EMBED,
  PHONE,
  PHONE_DISPLAY,
  RESERVE_URL,
  whatsappHref,
  type Lang,
} from "@/lib/site";

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const lang = params.lang === "en" ? "en" : "fr";
  const seo = copy.seo.contact;
  return { title: t(seo.title, lang), description: t(seo.desc, lang), alternates: { canonical: `/${lang}/contact` } };
}

export default function Contact({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : "fr";
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  const p = copy.contactPage;

  return (
    <>
      <section className="relative flex min-h-[72dvh] items-end overflow-hidden bg-simple-night text-simple-day">
        <Img src="/img/souk-alley.webp" alt={lang === "fr" ? "Ruelle de la médina près de Riad Laarouss" : "Medina lane near Riad Laarouss"} fill priority className="absolute inset-0" position="center 58%" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,26,18,0.08)_8%,rgba(36,26,18,0.92)_100%)]" />
        <div className="relative mx-auto w-full max-w-shell px-5 py-12 sm:px-8 md:py-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium text-simple-sun-soft">{displayCopy(p.eyebrow, lang)}</p>
            <h1 className="font-display text-[clamp(3.4rem,7vw,5.9rem)] font-medium leading-[0.92] tracking-[-0.035em] text-simple-day">{displayCopy(p.title, lang)}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-simple-day/84 sm:text-lg sm:leading-8">{displayCopy(p.lead, lang)}</p>
            <div className="mt-8"><Cta href={RESERVE_URL} variant="sun" size="lg" external>{displayCopy(c.reserve, lang)}</Cta></div>
          </div>
        </div>
      </section>

      <div className="bg-simple-day">
        <section className="mx-auto grid max-w-shell gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-36">
          <div>
            <div className="border-t border-simple-night/30">
              <Detail label={displayCopy(p.addressLabel, lang)}>
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-simple-night transition-colors hover:text-simple-coral-deep">{displayCopy(p.address, lang)}</a>
              </Detail>
              <Detail label={displayCopy(p.phoneLabel, lang)}>
                <a href={`tel:${PHONE}`} className="font-display text-3xl font-medium text-simple-night transition-colors hover:text-simple-coral-deep">{PHONE_DISPLAY}</a>
              </Detail>
              <Detail label={displayCopy(p.hoursLabel, lang)}>
                <p className="leading-7 text-simple-night-muted">{displayCopy(p.hours, lang)}</p>
              </Detail>
              <Detail label="Instagram">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-simple-night transition-colors hover:text-simple-coral-deep">@simple.restaurant_</a>
              </Detail>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={RESERVE_URL} variant="night" size="lg" external>{displayCopy(c.reserve, lang)}</Cta>
              <Cta href={`tel:${PHONE}`} variant="outline" size="lg">{displayCopy(c.call, lang)}</Cta>
              <Cta href={whatsappHref(lang)} variant="outline" size="lg" external>{displayCopy(c.whatsapp, lang)}</Cta>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-6 text-simple-night-muted">{displayCopy(p.reserveNote, lang)}</p>
          </div>

          <div className="border border-simple-day-line bg-simple-day-bright">
            <iframe
              title={lang === "fr" ? "Carte de Simple Restaurant à Marrakech" : "Map of Simple Restaurant in Marrakech"}
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[430px] w-full grayscale-[0.08] lg:h-full lg:min-h-[620px]"
            />
          </div>
        </section>
      </div>

      <aside className="bg-simple-sun text-simple-night">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-4 text-sm font-medium sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{displayCopy(p.address, lang)}</p>
          <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="w-fit border-b border-simple-night pb-0.5">{displayCopy(c.directions, lang)}</a>
        </div>
      </aside>

      <ReservationClose lang={lang} image="/img/terrace-blue-hour.webp" />
    </>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-simple-night/20 py-6">
      <p className="mb-3 text-sm font-medium text-simple-coral-deep">{label}</p>
      {children}
    </div>
  );
}
