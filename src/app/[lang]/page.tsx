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
  const rating = lang === "fr" ? `${RATING.scoreFr} ★ · ${RATING.countFr}` : `${RATING.score} ★ · ${RATING.count.toLocaleString()}`;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[92svh] w-full overflow-hidden">
        <ParallaxImage
          src="/img/hero-rooftop.webp"
          alt={lang === "fr" ? "Terrasse rooftop de Simple au coucher du soleil sur la médina de Marrakech" : "Simple's rooftop terrace at sunset over the Marrakech medina"}
          priority
          position="center"
          className="absolute inset-0 h-full w-full"
        />
        {/* warm sunset scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-clay-deep/85 via-clay-deep/35 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-shell flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-[2.6rem] font-extrabold leading-[0.98] text-plaster sm:text-6xl md:text-7xl">
              {lang === "fr" ? (
                <>Simple.<br /><span className="mark-yellow text-plaster">Sur les toits</span> de la médina.</>
              ) : (
                <>Simple.<br /><span className="mark-yellow text-plaster">On the rooftops</span> of the medina.</>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-plaster/90">
              {t(copy.hero.subtitle, lang)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Cta href={RESERVE_URL} variant="primary" size="lg" external>
                {t(c.reserve, lang)}
              </Cta>
              <Cta href={MAPS_DIRECTIONS} variant="ghostDark" size="lg" external>
                {t(c.directions, lang)}
              </Cta>
              <a href={localePath(lang, "/menu")} className="px-2 py-2 font-body text-sm font-bold text-plaster underline decoration-yellow decoration-2 underline-offset-4 hover:text-yellow-soft">
                {t(c.seeMenu, lang)}
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-plaster/15 px-4 py-2 backdrop-blur-sm">
              <span className="text-yellow">★</span>
              <span className="font-body text-sm font-bold text-plaster">{rating}</span>
              <span className="text-sm text-plaster/70">{lang === "fr" ? "avis Google" : "Google reviews"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="bg-plaster">
        <div className="mx-auto grid max-w-shell items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-14 md:py-28">
          <Reveal className="order-2 md:order-1">
            <div data-reveal>
              <SectionHead
                eyebrow={t(copy.intro.eyebrow, lang)}
                title={t(copy.intro.title, lang)}
              />
            </div>
            <p data-reveal className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {t(copy.intro.body, lang)}
            </p>
            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <Cta href={localePath(lang, "/about")} variant="outline">
                {lang === "fr" ? "Découvrir le lieu" : "Discover the place"}
              </Cta>
              <Cta href={INSTAGRAM} variant="outline" external>
                {t(c.instagram, lang)}
              </Cta>
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2">
            <div data-reveal className="relative">
              <Img
                src="/img/terrace-yellow-tables.webp"
                alt={lang === "fr" ? "Tables jaunes de Simple sur zelliges verts" : "Simple's yellow tables on green zellij tiles"}
                ratio="4 / 5"
                className="rounded-xl2 shadow-lift"
              />
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-yellow px-5 py-4 shadow-yellow sm:block">
                <p className="font-display text-2xl font-extrabold leading-none text-ink">{RATING.count.toLocaleString()}+</p>
                <p className="mt-1 font-body text-xs font-semibold text-ink/70">{lang === "fr" ? "avis Google" : "Google reviews"}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="bg-plaster-deep">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-24">
          <SectionHead
            eyebrow={t(copy.highlights.eyebrow, lang)}
            title={lang === "fr" ? "Une bonne heure, en hauteur" : "A good hour, up high"}
            className="mb-12"
          />
          <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.highlights.items.map((item, i) => (
              <div
                key={i}
                data-reveal
                className="flex flex-col rounded-2xl border border-sand bg-plaster-soft p-6 shadow-card"
              >
                <span className="font-mono text-sm font-bold text-coral">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{t(item.title, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(item.body, lang)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ MENU TEASER ============ */}
      <section className="bg-plaster">
        <div className="mx-auto grid max-w-shell items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.05fr] md:gap-14 md:py-28">
          <Reveal className="grid grid-cols-2 gap-4">
            <div data-reveal className="mt-8">
              <Img src="/img/food-tagine.webp" alt={lang === "fr" ? "Tajine de légumes" : "Vegetable tagine"} ratio="3 / 4" className="rounded-xl2 shadow-lift" />
            </div>
            <div data-reveal>
              <Img src="/img/food-dessert.webp" alt={lang === "fr" ? "Douceur de la maison" : "House sweet"} ratio="3 / 4" className="rounded-xl2 shadow-lift" />
            </div>
          </Reveal>

          <Reveal>
            <div data-reveal>
              <SectionHead eyebrow={t(copy.menuIntro.eyebrow, lang)} title={t(copy.menuIntro.title, lang)} lede={t(copy.menuIntro.body, lang)} />
            </div>
            <ul data-reveal className="mt-7 flex flex-wrap gap-2.5">
              {(copy.menu.categories as { name: { fr: string; en: string } }[]).map((cat, i) => (
                <li key={i} className="rounded-full border border-sand bg-plaster-soft px-4 py-2 font-body text-sm font-semibold text-ink-soft">
                  {t(cat.name, lang)}
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-8">
              <Cta href={localePath(lang, "/menu")} variant="primary" size="lg">
                {t(c.seeMenu, lang)}
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ GALLERY STRIP ============ */}
      <section className="bg-plaster-deep">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {lang === "fr" ? "La vie du rooftop" : "Rooftop life"}
            </h2>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-bold text-clay underline decoration-yellow decoration-2 underline-offset-4 hover:text-coral">
              {t(c.instagram, lang)}
            </a>
          </div>
          <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { src: "/img/terrace-lounge.webp", alt: lang === "fr" ? "Salon de la terrasse" : "Terrace lounge" },
              { src: "/img/terrace-blue-hour.webp", alt: lang === "fr" ? "Rooftop à l'heure bleue" : "Rooftop at blue hour" },
              { src: "/img/interior-art.webp", alt: lang === "fr" ? "Coin cosy et cadres" : "Cosy corner with framed art" },
              { src: "/img/juice-cart.webp", alt: lang === "fr" ? "Chariot de jus dans la médina" : "Juice cart in the medina" },
            ].map((g, i) => (
              <div key={i} data-reveal>
                <Img src={g.src} alt={g.alt} ratio="1 / 1" className="rounded-xl shadow-card" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section className="bg-plaster">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8">
          <Reveal className="grid gap-6 rounded-xl2 border border-sand bg-plaster-soft p-8 sm:grid-cols-3 sm:items-center sm:p-10">
            <div data-reveal className="sm:border-r sm:border-sand">
              <p className="font-display text-4xl font-extrabold text-ink">{lang === "fr" ? RATING.scoreFr : RATING.score}<span className="text-yellow">★</span></p>
              <p className="mt-1 text-sm text-ink-soft">{lang === "fr" ? `${RATING.countFr} avis Google` : `${RATING.count.toLocaleString()} Google reviews`}</p>
            </div>
            <div data-reveal className="sm:border-r sm:border-sand">
              <p className="font-display text-4xl font-extrabold text-ink">16K</p>
              <p className="mt-1 text-sm text-ink-soft">{lang === "fr" ? "abonnés Instagram" : "Instagram followers"}</p>
            </div>
            <div data-reveal>
              <p className="text-base leading-relaxed text-ink-soft">{t(copy.socialProof.body, lang)}</p>
              <p className="mt-2 text-xs text-ink-faint">{t(copy.socialProof.note, lang)}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RESERVE BAND ============ */}
      <section className="bg-clay text-plaster">
        <div className="mx-auto flex max-w-shell flex-col items-start gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-plaster sm:text-4xl">
              {t(copy.reserveBand.title, lang)}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-plaster/80 sm:text-lg">{t(copy.reserveBand.body, lang)}</p>
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
