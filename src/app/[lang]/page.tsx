import { Cta } from "@/components/Cta";
import { Img } from "@/components/Img";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { copy, t } from "@/lib/copy";
import {
  INSTAGRAM,
  MAPS_DIRECTIONS,
  PHONE,
  RATING,
  RESERVE_URL,
  localePath,
  type Lang,
} from "@/lib/site";

export default function Home({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "en" ? "en" : "fr";
  const c = copy.cta as Record<string, { fr: string; en: string }>;
  const reviewCount = RATING.count.toLocaleString(lang === "fr" ? "fr-FR" : "en-US");

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <ParallaxImage
          src="/img/hero-rooftop.webp"
          alt={lang === "fr" ? "Terrasse rooftop de Simple au coucher du soleil sur la médina de Marrakech" : "Simple's rooftop terrace at sunset over the Marrakech medina"}
          priority
          position="center 58%"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:pb-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_19rem] lg:gap-16">
            <div className="max-w-4xl">
              <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-yellow-soft">
                <span className="h-px w-8 bg-yellow" />
                {lang === "fr" ? "Rooftop · Riad Laarouss" : "Rooftop · Riad Laarouss"}
              </p>
              <h1 className="max-w-4xl text-balance font-display text-[clamp(3.4rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-plaster">
                {lang === "fr" ? (
                  <>Simple. <span className="whitespace-nowrap text-yellow">Au-dessus</span> de la médina.</>
                ) : (
                  <>Simple. <span className="text-yellow">Above</span> the medina.</>
                )}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-plaster/85 sm:text-lg">
                {t(copy.hero.subtitle, lang)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta href={RESERVE_URL} variant="primary" size="lg" external>{t(c.reserve, lang)}</Cta>
                <Cta href={MAPS_DIRECTIONS} variant="ghostDark" size="lg" external>{t(c.directions, lang)}</Cta>
                <a href={localePath(lang, "/menu")} className="inline-flex items-center px-3 py-3 font-body text-sm font-bold text-plaster transition-colors hover:text-yellow">
                  {t(c.seeMenu, lang)} <span aria-hidden className="ml-2">↗</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 border-t border-plaster/30 pt-5 text-plaster lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="font-display text-4xl font-extrabold leading-none">{lang === "fr" ? RATING.scoreFr : RATING.score}<span className="text-yellow">★</span></p>
                <p className="mt-2 text-sm text-plaster/70">{reviewCount} {lang === "fr" ? "avis Google" : "Google reviews"}</p>
              </div>
              <div>
                <p className="font-display text-4xl font-extrabold leading-none">15h—18h</p>
                <p className="mt-2 text-sm text-plaster/70">Happy Hour · Marrakech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink text-plaster">
        <div className="mx-auto grid max-w-shell gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-36">
          <Reveal>
            <p data-reveal className="text-sm font-semibold text-yellow">{t(copy.intro.eyebrow, lang)}</p>
            <h2 data-reveal className="mt-5 max-w-2xl font-display text-[clamp(2.8rem,5.5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-plaster">
              {t(copy.intro.title, lang)}
            </h2>
            <p data-reveal className="mt-7 max-w-xl text-base leading-relaxed text-plaster/72 sm:text-lg">
              {t(copy.intro.body, lang)}
            </p>
            <div data-reveal className="mt-9 flex flex-wrap items-center gap-4">
              <Cta href={localePath(lang, "/about")} variant="primary">{lang === "fr" ? "Découvrir le lieu" : "Discover the place"}</Cta>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="px-2 py-3 text-sm font-bold text-plaster underline decoration-yellow decoration-2 underline-offset-4 transition-colors hover:text-yellow">
                {t(c.instagram, lang)}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div data-reveal className="relative mx-auto max-w-[35rem] pb-8 sm:pb-12">
              <Img
                src="/img/terrace-yellow-tables.webp"
                alt={lang === "fr" ? "Tables jaunes de Simple sur zelliges verts" : "Simple's yellow tables on green zellij tiles"}
                ratio="4 / 5"
                className="image-zoom rounded-[1rem] shadow-lift"
                position="center 55%"
              />
              <div className="absolute bottom-0 left-3 max-w-[15rem] rounded-[0.85rem] bg-yellow p-5 text-ink shadow-yellow sm:-left-10 sm:p-6">
                <p className="font-display text-3xl font-extrabold leading-none">{reviewCount}+</p>
                <p className="mt-2 text-sm font-semibold text-ink/70">{lang === "fr" ? "raisons de monter sur le rooftop" : "reasons to head up to the rooftop"}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHead
                eyebrow={t(copy.highlights.eyebrow, lang)}
                title={lang === "fr" ? "Une bonne heure, en hauteur." : "A good hour, up high."}
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                {lang === "fr" ? "Pas de mise en scène compliquée : une vue ouverte, de vraies assiettes et l'énergie de la médina juste en dessous." : "Nothing over-staged: an open view, honest plates and the energy of the medina just below."}
              </p>
            </div>

            <Reveal as="ul" className="border-t border-ink/20">
              {copy.highlights.items.map((item, index) => (
                <li key={index} data-reveal className={`grid gap-3 border-b border-ink/20 py-7 sm:grid-cols-[1fr_1.15fr] sm:gap-8 sm:py-9 ${index % 2 ? "sm:pl-8" : ""}`}>
                  <h3 className="font-display text-xl font-bold leading-tight text-ink sm:text-2xl">{t(item.title, lang)}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">{t(item.body, lang)}</p>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal className="mt-16 md:mt-24">
            <Img
              src="/img/terrace-lounge.webp"
              alt={lang === "fr" ? "La terrasse lounge de Simple dans la médina" : "Simple's lounge terrace in the medina"}
              ratio="16 / 7"
              className="image-zoom rounded-[1rem] shadow-lift"
              position="center 58%"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-yellow text-ink">
        <div className="mx-auto grid max-w-shell gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-32">
          <Reveal>
            <p data-reveal className="text-sm font-semibold text-clay-deep">{t(copy.menuIntro.eyebrow, lang)}</p>
            <h2 data-reveal className="mt-5 font-display text-[clamp(3rem,6vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-ink">{t(copy.menuIntro.title, lang)}</h2>
            <p data-reveal className="mt-7 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">{t(copy.menuIntro.body, lang)}</p>
            <ul data-reveal className="mt-9 border-t border-ink/25">
              {(copy.menu.categories as { name: { fr: string; en: string } }[]).map((cat, index) => (
                <li key={index} className="flex items-center justify-between gap-5 border-b border-ink/25 py-3.5 font-display text-base font-bold sm:text-lg">
                  {t(cat.name, lang)} <span aria-hidden className="text-clay">→</span>
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-9"><Cta href={localePath(lang, "/menu")} variant="ink" size="lg">{t(c.seeMenu, lang)}</Cta></div>
          </Reveal>

          <Reveal>
            <div data-reveal className="relative mx-auto max-w-[37rem] pb-12 pr-4 sm:pb-20 sm:pr-16">
              <Img src="/img/food-tagine.webp" alt={lang === "fr" ? "Tajine de légumes servi chez Simple" : "Vegetable tagine served at Simple"} ratio="4 / 5" className="rounded-[1rem] shadow-lift" position="center 58%" />
              <Img src="/img/food-dessert.webp" alt={lang === "fr" ? "Douceur de la maison" : "House sweet"} ratio="1 / 1" className="absolute bottom-0 right-0 w-[44%] rounded-[0.8rem] border-4 border-yellow shadow-lift" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <h2 className="max-w-2xl font-display text-[clamp(2.7rem,5vw,4.8rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-ink">
              {lang === "fr" ? "La vie, vue du rooftop." : "Life, seen from the rooftop."}
            </h2>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-bold text-clay underline decoration-yellow decoration-2 underline-offset-4 transition-colors hover:text-coral">
              {t(c.instagram, lang)} ↗
            </a>
          </div>

          <Reveal className="grid gap-4 md:grid-cols-[1.28fr_0.72fr] md:gap-5">
            <Img src="/img/terrace-blue-hour.webp" alt={lang === "fr" ? "Le rooftop de Simple à l'heure bleue" : "Simple's rooftop at blue hour"} ratio="16 / 11" className="image-zoom rounded-[1rem]" position="center 55%" />
            <div data-reveal className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-5">
              <Img src="/img/interior-art.webp" alt={lang === "fr" ? "Coin intérieur avec fresque et cadres" : "Interior corner with mural and framed art"} ratio="16 / 10" className="image-zoom rounded-[0.8rem]" />
              <Img src="/img/juice-cart.webp" alt={lang === "fr" ? "Chariot de jus dans la médina" : "Juice cart in the medina"} ratio="16 / 10" className="image-zoom rounded-[0.8rem]" position="center 62%" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage text-ink">
        <div className="mx-auto grid max-w-shell gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-24">
          <div>
            <p className="text-sm font-bold text-ink/70">{lang === "fr" ? "La preuve est déjà là" : "The proof is already there"}</p>
            <p className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.2vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">{t(copy.socialProof.body, lang)}</p>
            <p className="mt-5 text-xs text-ink/65">{t(copy.socialProof.note, lang)}</p>
          </div>
          <div className="grid grid-cols-2 gap-6 border-t border-ink/25 pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div><p className="font-display text-5xl font-extrabold">{lang === "fr" ? RATING.scoreFr : RATING.score}<span className="text-yellow-soft">★</span></p><p className="mt-2 text-sm font-semibold text-ink/70">Google</p></div>
            <div><p className="font-display text-5xl font-extrabold">16K</p><p className="mt-2 text-sm font-semibold text-ink/70">Instagram</p></div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-ink text-plaster">
        <Img src="/img/hero-lights.webp" alt={lang === "fr" ? "Guirlandes de la terrasse au coucher du soleil" : "Terrace lights at sunset"} fill className="absolute inset-0" priority position="center 55%" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
        <div className="relative mx-auto grid w-full max-w-shell gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:py-24">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-plaster">{t(copy.reserveBand.title, lang)}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-plaster/78 sm:text-lg">{t(copy.reserveBand.body, lang)}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Cta href={RESERVE_URL} variant="primary" size="lg" external>{t(c.reserve, lang)}</Cta>
            <Cta href={`tel:${PHONE}`} variant="ghostDark" size="lg">{t(c.call, lang)}</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
