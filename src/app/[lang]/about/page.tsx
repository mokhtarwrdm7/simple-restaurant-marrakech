import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Img } from "@/components/Img";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { copy, t } from "@/lib/copy";
import { HAPPY_HOUR, PHONE, RESERVE_URL, localePath, type Lang } from "@/lib/site";

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const lang = params.lang === "en" ? "en" : "fr";
  const seo = copy.seo.about;
  return { title: t(seo.title, lang), description: t(seo.desc, lang), alternates: { canonical: `/${lang}/about` } };
}

export default function About({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : "fr";
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  const a = copy.aboutPage;

  return (
    <>
      {/* Header */}
      <section className="bg-clay text-plaster">
        <div className="mx-auto grid max-w-shell items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <div>
            <SectionHead eyebrow={t(a.eyebrow, lang)} title={t(a.title, lang)} lede={t(a.lead, lang)} tone="plaster" />
          </div>
          <div className="relative">
            <Img
              src="/img/terrace-lounge.webp"
              alt={lang === "fr" ? "Salon de la terrasse rooftop de Simple" : "Simple's rooftop terrace lounge"}
              ratio="4 / 3"
              className="rounded-xl2 shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div data-reveal className="relative mb-8">
                <Img src="/img/terrace-yellow-tables.webp" alt={lang === "fr" ? "Tables jaunes sur zelliges verts" : "Yellow tables on green zellij"} ratio="3 / 2" className="rounded-xl2 shadow-lift" />
              </div>
              <p data-reveal className="text-base leading-relaxed text-ink-soft sm:text-lg">{t(a.body1, lang)}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div data-reveal className="relative mb-8">
                <Img src="/img/host.webp" alt={lang === "fr" ? "Un moment à table sous les bambous" : "A moment at the table under the bamboo shade"} ratio="3 / 2" className="rounded-xl2 shadow-lift" />
              </div>
              <p data-reveal className="text-base leading-relaxed text-ink-soft sm:text-lg">{t(a.body2, lang)}</p>
            </Reveal>
          </div>

          {/* Quick facts row */}
          <Reveal className="mt-16 grid gap-4 sm:grid-cols-3">
            <Fact data-reveal label={lang === "fr" ? "Le quartier" : "The quarter"} value="Riad Laarouss" />
            <Fact data-reveal label={lang === "fr" ? "Happy Hour" : "Happy Hour"} value={HAPPY_HOUR} />
            <Fact data-reveal label={lang === "fr" ? "Sur Google" : "On Google"} value={lang === "fr" ? "4,6 ★" : "4.6 ★"} />
          </Reveal>

          <Reveal className="mt-16 border-t border-sand pt-10 text-center">
            <p data-reveal className="mx-auto max-w-2xl font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              {t(a.closing, lang)}
            </p>
            <div data-reveal className="mt-8 flex flex-wrap justify-center gap-3">
              <Cta href={RESERVE_URL} variant="primary" size="lg" external>{t(c.reserve, lang)}</Cta>
              <Cta href={localePath(lang, "/menu")} variant="outline" size="lg">{t(c.seeMenu, lang)}</Cta>
              <Cta href={`tel:${PHONE}`} variant="outline" size="lg">{t(c.call, lang)}</Cta>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string; "data-reveal"?: boolean }) {
  return (
    <div data-reveal className="rounded-2xl border border-sand bg-plaster-soft p-6 text-center shadow-card">
      <p className="font-display text-3xl font-extrabold text-ink">{value}</p>
      <p className="mt-1 font-body text-xs font-bold uppercase tracking-eyebrow text-clay">{label}</p>
    </div>
  );
}
