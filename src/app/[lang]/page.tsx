import { Cta } from "@/components/Cta";
import { displayCopy } from "@/components/DisplayCopy";
import { Img } from "@/components/Img";
import { ReservationClose } from "@/components/ReservationClose";
import { SectionHead } from "@/components/SectionHead";
import { SunlineImage } from "@/components/SunlineImage";
import { copy } from "@/lib/copy";
import {
  INSTAGRAM,
  MAPS_DIRECTIONS,
  RATING,
  RESERVE_URL,
  localePath,
  type Lang,
} from "@/lib/site";

export default function Home({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : "fr";
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  const categories = copy.menu.categories as { name: { fr: string; en: string } }[];
  const reviewCount = RATING.count.toLocaleString(lang === "fr" ? "fr-FR" : "en-US");

  return (
    <>
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-simple-night text-simple-day">
        <Img
          src="/img/hero-rooftop.webp"
          alt={lang === "fr" ? "Rooftop de Simple au coucher du soleil sur la médina" : "Simple rooftop at sunset above the medina"}
          fill
          priority
          className="absolute inset-0"
          position="center 58%"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,26,18,0.08)_10%,rgba(36,26,18,0.9)_100%)]" />
        <div className="relative mx-auto w-full max-w-shell px-5 pb-12 pt-20 sm:px-8 sm:pb-16 lg:pb-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium text-simple-sun-soft">Rooftop · Riad Laarouss</p>
            <h1 className="max-w-4xl font-display text-[clamp(3.25rem,7vw,5.9rem)] font-medium leading-[0.92] tracking-[-0.035em] text-simple-day">
              {displayCopy(copy.hero.title, lang)}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-simple-day/85 sm:text-lg sm:leading-8">
              {displayCopy(copy.hero.subtitle, lang)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={RESERVE_URL} variant="sun" size="lg" external>{displayCopy(c.reserve, lang)}</Cta>
              <Cta href={MAPS_DIRECTIONS} variant="light" size="lg" external>{displayCopy(c.directions, lang)}</Cta>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-simple-day">
        <section className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div className="lg:pb-20">
              <SectionHead
                context={displayCopy(copy.intro.eyebrow, lang)}
                title={displayCopy(copy.intro.title, lang)}
                lede={displayCopy(copy.intro.body, lang)}
              />
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Cta href={localePath(lang, "/about")} variant="night">
                  {lang === "fr" ? "Découvrir le lieu" : "Discover the place"}
                </Cta>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="border-b border-simple-night pb-1 text-sm font-semibold text-simple-night transition-colors hover:border-simple-coral hover:text-simple-coral-deep">
                  {displayCopy(c.instagram, lang)}
                </a>
              </div>
            </div>

            <div className="relative pb-16 sm:pb-24">
              <Img
                src="/img/terrace-yellow-tables.webp"
                alt={lang === "fr" ? "Tables jaunes sur le rooftop de Simple" : "Yellow tables on the Simple rooftop"}
                ratio="4 / 5"
                className="photo-quiet ml-auto w-[86%] shadow-rooftop"
                position="center 55%"
              />
              <Img
                src="/img/interior-art.webp"
                alt={lang === "fr" ? "Fresque et cadres dans un coin de Simple" : "Mural and framed art in a corner of Simple"}
                ratio="4 / 3"
                className="absolute bottom-0 left-0 w-[48%] border-[6px] border-simple-day sm:border-[10px]"
                position="center"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-5 pb-20 sm:px-8 md:pb-28">
          <div className="grid gap-12 border-t border-simple-day-line pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <h2 className="max-w-md font-display text-[clamp(2.4rem,4.8vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.03em] text-simple-night">
                {lang === "fr" ? "Une bonne heure, en hauteur." : "A good hour, up high."}
              </h2>
            </div>
            <ul className="border-t border-simple-night/25">
              {copy.highlights.items.map((item, index) => (
                <li key={index} className="grid gap-3 border-b border-simple-night/20 py-6 sm:grid-cols-[0.92fr_1.08fr] sm:gap-10 sm:py-8">
                  <h3 className="font-display text-xl font-medium leading-tight text-simple-night sm:text-2xl">{displayCopy(item.title, lang)}</h3>
                  <p className="max-w-lg text-sm leading-6 text-simple-night-muted sm:text-base sm:leading-7">{displayCopy(item.body, lang)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-[1480px] px-5 sm:px-8">
          <SunlineImage
            src="/img/terrace-lounge.webp"
            alt={lang === "fr" ? "Panorama de la terrasse lounge de Simple" : "Panoramic view of the Simple lounge terrace"}
            position="center 58%"
          />
        </section>

        <section className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-24">
            <div>
              <SectionHead
                context={displayCopy(copy.menuIntro.eyebrow, lang)}
                title={displayCopy(copy.menuIntro.title, lang)}
                lede={displayCopy(copy.menuIntro.body, lang)}
              />
              <ul className="mt-10 border-t border-simple-night/25">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center justify-between gap-6 border-b border-simple-night/20 py-4 font-display text-lg font-medium text-simple-night">
                    {displayCopy(category.name, lang)}
                    <span aria-hidden className="text-simple-coral-deep">→</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Cta href={localePath(lang, "/menu")} variant="night" size="lg">{displayCopy(c.seeMenu, lang)}</Cta>
              </div>
            </div>
            <Img
              src="/img/food-tagine.webp"
              alt={lang === "fr" ? "Tajine de légumes servi chez Simple" : "Vegetable tagine served at Simple"}
              ratio="4 / 5"
              className="photo-quiet w-full lg:mt-20"
              position="center 58%"
            />
          </div>
        </section>

        <section className="mx-auto max-w-shell px-5 pb-20 sm:px-8 md:pb-32">
          <div className="flex flex-col gap-6 border-t border-simple-day-line pt-10 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[0.96] tracking-[-0.03em] text-simple-night">
              {lang === "fr" ? "La vie, vue du rooftop." : "Life, seen from the rooftop."}
            </h2>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="self-start border-b border-simple-night pb-1 text-sm font-semibold text-simple-night hover:border-simple-coral hover:text-simple-coral-deep">
              {displayCopy(c.instagram, lang)}
            </a>
          </div>

          <div className="mt-12 grid items-start gap-5 md:grid-cols-12 md:gap-7">
            <Img src="/img/terrace-blue-hour.webp" alt={lang === "fr" ? "Rooftop de Simple à l'heure bleue" : "Simple rooftop at blue hour"} ratio="16 / 11" className="photo-quiet md:col-span-7" position="center 55%" />
            <Img src="/img/juice-cart.webp" alt={lang === "fr" ? "Chariot de jus dans la médina" : "Juice cart in the medina"} ratio="4 / 5" className="photo-quiet mt-10 md:col-span-4 md:col-start-9 md:mt-24" position="center 62%" />
            <Img src="/img/food-dessert.webp" alt={lang === "fr" ? "Douceur de la maison" : "House sweet"} ratio="1 / 1" className="photo-quiet w-[70%] md:col-span-3 md:col-start-2 md:w-full" />
          </div>
        </section>

        <section className="mx-auto max-w-shell px-5 pb-20 sm:px-8 md:pb-28">
          <div className="grid gap-8 border-y border-simple-night/25 py-10 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:py-14">
            <h2 className="font-display text-2xl font-medium text-simple-night">{displayCopy(copy.socialProof.title, lang)}</h2>
            <div>
              <p className="max-w-3xl font-display text-[clamp(1.75rem,3.2vw,3.15rem)] font-medium leading-[1.35] text-simple-night">{displayCopy(copy.socialProof.body, lang)}</p>
              <p className="mt-5 text-sm text-simple-night-muted">{displayCopy(copy.socialProof.note, lang)}</p>
            </div>
          </div>
        </section>
      </div>

      <aside className="bg-simple-sun text-simple-night" aria-label={lang === "fr" ? "Informations pratiques" : "Practical information"}>
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-4 text-sm font-medium sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{lang === "fr" ? `${RATING.scoreFr} sur Google, ${reviewCount} avis` : `${RATING.score} on Google, ${reviewCount} reviews`}</p>
          <p>{lang === "fr" ? "Happy Hour de 15h à 18h" : "Happy Hour from 3 to 6pm"}</p>
        </div>
      </aside>

      <ReservationClose lang={lang} />
    </>
  );
}
