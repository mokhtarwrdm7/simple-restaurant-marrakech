import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Img } from "@/components/Img";
import { Reveal } from "@/components/Reveal";
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
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink text-plaster">
        <Img src="/img/terrace-lounge.webp" alt={lang === "fr" ? "Salon de la terrasse rooftop de Simple" : "Simple's rooftop terrace lounge"} fill priority className="absolute inset-0" position="center 55%" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative mx-auto w-full max-w-shell px-5 py-14 sm:px-8 md:py-20">
          <p className="text-sm font-semibold text-yellow">{t(a.eyebrow, lang)}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.4rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-plaster">{t(a.title, lang)}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-plaster/80 sm:text-lg">{t(a.lead, lang)}</p>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
            <Reveal>
              <Img src="/img/terrace-yellow-tables.webp" alt={lang === "fr" ? "Tables jaunes sur zelliges verts" : "Yellow tables on green zellij"} ratio="4 / 5" className="image-zoom rounded-[1rem] shadow-lift" position="center 55%" />
            </Reveal>
            <Reveal>
              <p data-reveal className="text-sm font-semibold text-clay">{lang === "fr" ? "Le rooftop, sans prétention" : "The rooftop, without the fuss"}</p>
              <p data-reveal className="mt-6 font-display text-[clamp(2rem,4vw,3.7rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink">{t(a.body1, lang)}</p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal className="lg:order-2">
              <Img src="/img/host.webp" alt={lang === "fr" ? "Un moment à table sous les bambous" : "A moment at the table under the bamboo shade"} ratio="16 / 11" className="image-zoom rounded-[1rem] shadow-lift" position="center 45%" />
            </Reveal>
            <Reveal className="lg:order-1">
              <p data-reveal className="text-sm font-semibold text-clay">{lang === "fr" ? "Marrakech, aujourd'hui" : "Marrakech, right now"}</p>
              <p data-reveal className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">{t(a.body2, lang)}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-yellow text-ink">
        <div className="mx-auto grid max-w-shell divide-y divide-ink/20 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          <Fact label={lang === "fr" ? "Le quartier" : "The quarter"} value="Riad Laarouss" />
          <Fact label="Happy Hour" value={HAPPY_HOUR} />
          <Fact label={lang === "fr" ? "Sur Google" : "On Google"} value={lang === "fr" ? "4,6 ★" : "4.6 ★"} />
        </div>
      </section>

      <section className="bg-ink text-plaster">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28">
          <p className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-plaster">{t(a.closing, lang)}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={RESERVE_URL} variant="primary" size="lg" external>{t(c.reserve, lang)}</Cta>
            <Cta href={localePath(lang, "/menu")} variant="ghostDark" size="lg">{t(c.seeMenu, lang)}</Cta>
            <Cta href={`tel:${PHONE}`} variant="ghostDark" size="lg">{t(c.call, lang)}</Cta>
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-8 md:px-9 md:py-12 first:pl-0 last:pr-0">
      <p className="font-display text-3xl font-extrabold leading-none sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm font-semibold text-ink/65">{label}</p>
    </div>
  );
}
