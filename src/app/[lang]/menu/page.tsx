import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { displayCopy } from "@/components/DisplayCopy";
import { Img } from "@/components/Img";
import { ReservationClose } from "@/components/ReservationClose";
import { copy, t } from "@/lib/copy";
import { RESERVE_URL, type Lang } from "@/lib/site";

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
      <section className="relative flex min-h-[78dvh] items-end overflow-hidden bg-simple-night text-simple-day">
        <Img src="/img/terrace-overhead.webp" alt={lang === "fr" ? "Table dressée avec thé à la menthe" : "Table set with mint tea"} fill priority className="absolute inset-0" position="center 50%" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,26,18,0.08)_8%,rgba(36,26,18,0.9)_100%)]" />
        <div className="relative mx-auto w-full max-w-shell px-5 py-12 sm:px-8 md:py-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium text-simple-sun-soft">{displayCopy(copy.menuIntro.eyebrow, lang)}</p>
            <h1 className="font-display text-[clamp(3.4rem,7vw,5.9rem)] font-medium leading-[0.92] tracking-[-0.035em] text-simple-day">{displayCopy(copy.menuIntro.title, lang)}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-simple-day/84 sm:text-lg sm:leading-8">{displayCopy(copy.menuIntro.body, lang)}</p>
            <div className="mt-8"><Cta href={RESERVE_URL} variant="sun" size="lg" external>{displayCopy(c.reserve, lang)}</Cta></div>
          </div>
        </div>
      </section>

      <div className="bg-simple-day">
        <section className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28 lg:py-36">
          <div className="mb-14 grid gap-6 border-t border-simple-day-line pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <p className="text-sm font-medium text-simple-coral-deep">Simple Restaurant · Marrakech</p>
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,5vw,4.65rem)] font-medium leading-[0.96] tracking-[-0.03em] text-simple-night">
              {lang === "fr" ? "Du tajine au matcha, sans complication." : "From tagine to matcha, without the fuss."}
            </h2>
          </div>

          <div className="grid gap-x-20 gap-y-14 lg:grid-cols-2 lg:gap-y-20">
            {cats.map((cat, index) => (
              <section key={index} className={index % 2 ? "lg:mt-16" : ""}>
                <h2 className="border-b border-simple-night/35 pb-4 font-display text-2xl font-medium leading-tight text-simple-night sm:text-3xl">{displayCopy(cat.name, lang)}</h2>
                <ul>
                  {cat.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-b border-simple-day-line py-5">
                      <h3 className="font-display text-lg font-medium text-simple-night sm:text-xl">{displayCopy(item.name, lang)}</h3>
                      {displayCopy(item.desc, lang) && <p className="mt-2 max-w-xl text-sm leading-6 text-simple-night-muted">{displayCopy(item.desc, lang)}</p>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1480px] px-5 pb-20 sm:px-8 md:pb-28">
          <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-end">
            <Img src="/img/food-tagine.webp" alt={lang === "fr" ? "Tajine de légumes servi chez Simple" : "Vegetable tagine served at Simple"} ratio="16 / 10" className="photo-quiet" position="center 58%" />
            <Img src="/img/food-dessert.webp" alt={lang === "fr" ? "Douceur de la maison" : "House sweet"} ratio="4 / 5" className="photo-quiet w-[72%] md:w-full" />
          </div>
        </section>
      </div>

      <aside className="bg-simple-sun text-simple-night">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-4 text-sm font-medium sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{displayCopy(copy.menuIntro.placeholderNote, lang)}</p>
          <p>{lang === "fr" ? "Happy Hour de 15h à 18h" : "Happy Hour from 3 to 6pm"}</p>
        </div>
      </aside>

      <ReservationClose lang={lang} />
    </>
  );
}
