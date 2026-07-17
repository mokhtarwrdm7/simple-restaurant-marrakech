import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Img } from "@/components/Img";
import { Reveal } from "@/components/Reveal";
import { copy, t } from "@/lib/copy";
import {
  HAPPY_HOUR,
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
      <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-ink text-plaster">
        <Img src="/img/souk-alley.webp" alt={lang === "fr" ? "Ruelle de la médina près de Riad Laarouss" : "Medina lane near Riad Laarouss"} fill priority className="absolute inset-0" position="center 58%" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="relative mx-auto w-full max-w-shell px-5 py-14 sm:px-8 md:py-20">
          <p className="text-sm font-semibold text-yellow">{t(p.eyebrow, lang)}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.4rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-plaster">{t(p.title, lang)}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-plaster/80 sm:text-lg">{t(p.lead, lang)}</p>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto grid max-w-shell gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal>
            <div data-reveal className="border-t border-ink/20">
              <Detail label={t(p.addressLabel, lang)}>
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-ink transition-colors hover:text-clay">{t(p.address, lang)}</a>
              </Detail>
              <Detail label={t(p.phoneLabel, lang)}>
                <a href={`tel:${PHONE}`} className="font-display text-3xl font-extrabold text-ink transition-colors hover:text-clay">{PHONE_DISPLAY}</a>
              </Detail>
              <Detail label={t(p.hoursLabel, lang)}>
                <p className="text-ink-soft"><span className="font-semibold text-ink">Happy Hour {HAPPY_HOUR}.</span>{" "}{t(p.hours, lang).replace(/^Happy Hour[^.]*\.\s*/i, "")}</p>
              </Detail>
              <Detail label="Instagram">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-ink transition-colors hover:text-clay">@simple.restaurant_</a>
              </Detail>
            </div>

            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <Cta href={RESERVE_URL} variant="primary" size="lg" external>{t(c.reserve, lang)}</Cta>
              <Cta href={`tel:${PHONE}`} variant="outline" size="lg">{t(c.call, lang)}</Cta>
              <Cta href={whatsappHref(lang)} variant="outline" size="lg" external>{t(c.whatsapp, lang)}</Cta>
            </div>
            <p data-reveal className="mt-5 max-w-lg text-sm leading-relaxed text-ink-faint">{t(p.reserveNote, lang)}</p>
          </Reveal>

          <Reveal>
            <div data-reveal className="overflow-hidden rounded-[1rem] border border-sand shadow-lift">
              <iframe
                title={lang === "fr" ? "Carte — Simple Restaurant, médina de Marrakech" : "Map — Simple Restaurant, Marrakech medina"}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[430px] w-full grayscale-[0.15] lg:h-full lg:min-h-[610px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-ink/20 py-6">
      <p className="mb-2 text-sm font-semibold text-clay">{label}</p>
      {children}
    </div>
  );
}
