import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { copy, t } from "@/lib/copy";
import { LANGS, SITE_URL, type Lang } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const lang = params.lang === "en" ? "en" : "fr";
  const seo = copy.seo.home;
  return {
    metadataBase: new URL(SITE_URL),
    title: t(seo.title, lang),
    description: t(seo.desc, lang),
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title: t(seo.title, lang),
      description: t(seo.desc, lang),
      url: `${SITE_URL}/${lang}`,
      siteName: "Simple Restaurant",
      images: [{ url: "/img/hero-rooftop.webp", width: 1440, height: 1920 }],
      locale: lang === "fr" ? "fr_MA" : "en_US",
      type: "website",
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const lang: Lang = params.lang === "en" ? "en" : "fr";
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body className="bg-simple-day font-body text-simple-night antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-simple-sun focus:px-4 focus:py-2 focus:font-semibold focus:text-simple-night"
        >
          {lang === "fr" ? "Aller au contenu" : "Skip to content"}
        </a>
        <Nav lang={lang} />
        <main id="main" className="pb-16 md:pb-0">
          {children}
        </main>
        <Footer lang={lang} />
        <MobileActionBar lang={lang} />
      </body>
    </html>
  );
}
