import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { displayCopy } from "@/components/DisplayCopy";
import { Img } from "@/components/Img";
import { ReservationClose } from "@/components/ReservationClose";
import { copy, t } from "@/lib/copy";
import { RESERVE_URL, localePath, type Lang } from "@/lib/site";

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
      <section className="relative flex min-h-[78dvh] items-end overflow-hidden bg-simple-night text-simple-day">
        <Img src="/img/terrace-lounge.webp" alt={lang === "fr" ? "Salon du rooftop de Simple" : "Simple rooftop lounge"} fill priority className="absolute inset-0" position="center 55%" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,26,18,0.06)_10%,rgba(36,26,18,0.88)_100%)]" />
        <div className="relative mx-auto w-full max-w-shell px-5 py-12 sm:px-8 md:py-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium text-simple-sun-soft">{displayCopy(a.eyebrow, lang)}</p>
            <h1 className="font-display text-[clamp(3.25rem,7vw,5.9rem)] font-medium leading-[0.92] tracking-[-0.035em] text-simple-day">{displayCopy(a.title, lang)}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-simple-day/84 sm:text-lg sm:leading-8">{displayCopy(a.lead, lang)}</p>
            <div className="mt-8"><Cta href={RESERVE_URL} variant="sun" size="lg" external>{displayCopy(c.reserve, lang)}</Cta></div>
          </div>
        </div>
      </section>

      <div className="bg-simple-day">
        <section className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-8">
            <Img
              src="/img/terrace-yellow-tables.webp"
              alt={lang === "fr" ? "Tables jaunes sur zelliges verts" : "Yellow tables on green zellij"}
              ratio="4 / 5"
              className="photo-quiet shadow-rooftop lg:col-span-6"
              position="center 55%"
            />
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-20">
              <p className="text-sm font-medium text-simple-coral-deep">{lang === "fr" ? "Le rooftop, sans prétention" : "The rooftop, without the fuss"}</p>
              <p className="mt-6 font-display text-[clamp(2rem,4vw,3.65rem)] font-medium leading-[1.35] tracking-[-0.025em] text-simple-night">{displayCopy(a.body1, lang)}</p>
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-simple-day-line pt-12 md:mt-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pt-20">
            <div className="lg:pt-12">
              <p className="text-sm font-medium text-simple-coral-deep">{lang === "fr" ? "Marrakech, aujourd'hui" : "Marrakech, right now"}</p>
              <p className="mt-6 text-lg leading-8 text-simple-night-muted sm:text-xl">{displayCopy(a.body2, lang)}</p>
              <div className="mt-8">
                <Cta href={localePath(lang, "/menu")} variant="outline" size="lg">{displayCopy(c.seeMenu, lang)}</Cta>
              </div>
            </div>
            <div className="relative pb-14 sm:pb-20">
              <Img src="/img/host.webp" alt={lang === "fr" ? "Un moment à table sous les bambous" : "A table beneath the bamboo shade"} ratio="16 / 11" className="photo-quiet ml-auto w-[88%]" position="center 45%" />
              <Img src="/img/terrace-frames.webp" alt={lang === "fr" ? "Cadres de bambou sur la terrasse" : "Bamboo frames on the terrace"} ratio="4 / 3" className="absolute bottom-0 left-0 w-[42%] border-[6px] border-simple-day sm:border-[10px]" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-shell px-5 pb-20 sm:px-8 md:pb-28">
          <div className="grid border-y border-simple-night/25 md:grid-cols-3">
            <Fact label={lang === "fr" ? "Le quartier" : "The quarter"} value="Riad Laarouss" />
            <Fact label="Happy Hour" value={lang === "fr" ? "15h à 18h" : "3 to 6pm"} />
            <Fact label={lang === "fr" ? "Sur Google" : "On Google"} value={lang === "fr" ? "4,6 sur 5" : "4.6 out of 5"} />
          </div>
        </section>
      </div>

      <section className="bg-simple-sun text-simple-night">
        <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 md:py-16">
          <p className="max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-medium leading-[1.35] tracking-[-0.025em]">{displayCopy(a.closing, lang)}</p>
        </div>
      </section>

      <ReservationClose lang={lang} image="/img/hero-rooftop.webp" />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-simple-night/20 py-7 md:border-b-0 md:border-r md:px-8 md:py-10 md:last:border-r-0 md:first:pl-0">
      <p className="font-display text-2xl font-medium text-simple-night sm:text-3xl">{value}</p>
      <p className="mt-2 text-sm text-simple-night-muted">{label}</p>
    </div>
  );
}
