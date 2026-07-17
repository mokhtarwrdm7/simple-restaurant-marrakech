import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Img } from "@/components/Img";
import { Reveal } from "@/components/Reveal";
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
      <section className="overflow-hidden bg-ink text-plaster">
        <div className="mx-auto grid max-w-shell gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-yellow">{t(copy.menuIntro.eyebrow, lang)}</p>
            <h1 className="mt-5 font-display text-[clamp(3.6rem,7vw,6rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-plaster">{t(copy.menuIntro.title, lang)}</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-plaster/72 sm:text-lg">{t(copy.menuIntro.body, lang)}</p>
            <p className="mt-8 border-t border-plaster/25 pt-5 text-sm font-semibold text-yellow-soft">{t(copy.menuIntro.placeholderNote, lang)}</p>
          </div>
          <Img src="/img/terrace-overhead.webp" alt={lang === "fr" ? "Tables dressées avec thé à la menthe" : "Tables set with mint tea"} ratio="4 / 5" className="image-zoom rounded-[1rem] shadow-lift" position="center 50%" />
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
            {cats.map((cat, index) => (
              <Reveal key={index} className={index % 2 ? "lg:translate-y-14" : ""}>
                <div data-reveal className="flex items-center gap-4 border-b border-ink/25 pb-4">
                  <span className="h-3 w-3 rotate-45 bg-yellow" aria-hidden />
                  <h2 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">{t(cat.name, lang)}</h2>
                </div>
                <ul className="mt-2">
                  {cat.items.map((item, itemIndex) => (
                    <li key={itemIndex} data-reveal className="border-b border-sand py-5">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-lg font-bold text-ink sm:text-xl">{t(item.name, lang)}</span>
                        <span className="h-px flex-1 border-b border-dotted border-rattan" />
                      </div>
                      {t(item.desc, lang) && <span className="mt-2 block max-w-xl text-sm leading-relaxed text-ink-soft">{t(item.desc, lang)}</span>}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow text-ink">
        <div className="mx-auto grid max-w-shell gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2.8rem,5vw,4.8rem)] font-extrabold leading-[0.94] tracking-[-0.035em]">{t(copy.reserveBand.title, lang)}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">{t(copy.reserveBand.body, lang)}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Cta href={RESERVE_URL} variant="ink" size="lg" external>{t(c.reserve, lang)}</Cta>
            <Cta href={`tel:${PHONE}`} variant="outline" size="lg">{t(c.call, lang)}</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
