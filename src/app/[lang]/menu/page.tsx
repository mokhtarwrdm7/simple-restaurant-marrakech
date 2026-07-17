import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Img } from "@/components/Img";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { copy, t } from "@/lib/copy";
import { PHONE, RESERVE_URL, type Lang } from "@/lib/site";

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const lang = params.lang === "en" ? "en" : "fr";
  const seo = copy.seo.menu;
  return { title: t(seo.title, lang), description: t(seo.desc, lang), alternates: { canonical: `/${lang}/menu` } };
}

type Item = { name: { fr: string; en: string }; desc: { fr: string; en: string } };
type Cat = { name: { fr: string; en: string }; items: Item[] };

export default function Menu({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : "fr";
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  const cats = copy.menu.categories as Cat[];

  return (
    <>
      {/* Header */}
      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 pt-16 sm:px-8 md:pt-24">
          <div className="grid items-end gap-8 md:grid-cols-[1.3fr_1fr]">
            <SectionHead eyebrow={t(copy.menuIntro.eyebrow, lang)} title={t(copy.menuIntro.title, lang)} lede={t(copy.menuIntro.body, lang)} />
            <Img src="/img/terrace-overhead.webp" alt={lang === "fr" ? "Tables dressées avec thé à la menthe" : "Tables set with mint tea"} ratio="16 / 10" className="rounded-xl2 shadow-lift" />
          </div>
          {/* Honesty note — no invented prices */}
          <p className="mt-8 inline-flex rounded-full border border-sand bg-plaster-soft px-4 py-2 font-body text-sm font-semibold text-ink-soft">
            {t(copy.menuIntro.placeholderNote, lang)}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
            {cats.map((cat, i) => (
              <Reveal key={i}>
                <div data-reveal className="flex items-baseline gap-3 border-b-2 border-yellow pb-3">
                  <span className="font-mono text-sm font-bold text-coral">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-2xl font-bold text-ink">{t(cat.name, lang)}</h2>
                </div>
                <ul className="mt-5 flex flex-col gap-5">
                  {cat.items.map((item, j) => (
                    <li key={j} data-reveal className="flex flex-col">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-lg font-bold text-ink">{t(item.name, lang)}</span>
                        <span className="h-px flex-1 translate-y-[-2px] border-b border-dotted border-sand" />
                      </div>
                      {t(item.desc, lang) && (
                        <span className="mt-1 text-sm leading-relaxed text-ink-soft">{t(item.desc, lang)}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve CTA band */}
      <section className="bg-clay text-plaster">
        <div className="mx-auto flex max-w-shell flex-col items-start gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold text-plaster sm:text-4xl">{t(copy.reserveBand.title, lang)}</h2>
            <p className="mt-3 text-base leading-relaxed text-plaster/80">{t(copy.reserveBand.body, lang)}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Cta href={RESERVE_URL} variant="primary" size="lg" external>{t(c.reserve, lang)}</Cta>
            <Cta href={`tel:${PHONE}`} variant="ghostDark" size="lg">{t(c.call, lang)}</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
