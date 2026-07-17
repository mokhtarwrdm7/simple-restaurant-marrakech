import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { copy, t } from "@/lib/copy";
import {
  ADDRESS,
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
    <section className="bg-plaster">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 md:py-24">
        <SectionHead eyebrow={t(p.eyebrow, lang)} title={t(p.title, lang)} lede={t(p.lead, lang)} />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          {/* Details */}
          <Reveal>
            <div data-reveal className="flex flex-col gap-7">
              <Detail label={t(p.addressLabel, lang)}>
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="text-lg text-ink transition-colors hover:text-clay">
                  {t(p.address, lang)}
                </a>
              </Detail>
              <Detail label={t(p.phoneLabel, lang)}>
                <a href={`tel:${PHONE}`} className="font-display text-2xl font-bold text-ink transition-colors hover:text-clay">
                  {PHONE_DISPLAY}
                </a>
              </Detail>
              <Detail label={t(p.hoursLabel, lang)}>
                <p className="text-ink-soft">
                  <span className="font-semibold text-ink">Happy Hour {HAPPY_HOUR}.</span>{" "}
                  {t(p.hours, lang).replace(/^Happy Hour[^.]*\.\s*/i, "")}
                </p>
              </Detail>
              <Detail label="Instagram">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-lg text-ink transition-colors hover:text-clay">
                  @simple.restaurant_
                </a>
              </Detail>

              <div className="flex flex-wrap gap-3 pt-1">
                <Cta href={RESERVE_URL} variant="primary" size="lg" external>{t(c.reserve, lang)}</Cta>
                <Cta href={`tel:${PHONE}`} variant="outline" size="lg">{t(c.call, lang)}</Cta>
                <Cta href={whatsappHref(lang)} variant="outline" size="lg" external>{t(c.whatsapp, lang)}</Cta>
              </div>
              <p className="text-sm leading-relaxed text-ink-faint">{t(p.reserveNote, lang)}</p>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal>
            <div data-reveal className="overflow-hidden rounded-xl2 border border-sand shadow-lift">
              <iframe
                title={lang === "fr" ? "Carte — Simple Restaurant, médina de Marrakech" : "Map — Simple Restaurant, Marrakech medina"}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full md:h-full md:min-h-[440px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 font-body text-xs font-bold uppercase tracking-eyebrow text-clay">{label}</p>
      {children}
    </div>
  );
}
