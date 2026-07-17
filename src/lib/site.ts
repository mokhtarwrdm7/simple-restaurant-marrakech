// Central site constants + conversion links for Simple Restaurant, Marrakech.
// Single source so every CTA points to the same real channel / listing. Facts
// trace to the Google Maps listing (CID e679bf35c173a295 → 16607515338505167509)
// and the venue's own Instagram (@simple.restaurant_), captured 2026-07-17.

export type Lang = "en" | "fr";
export const LANGS: Lang[] = ["fr", "en"];

export const SITE_URL = "https://simple-restaurant-site-ochre.vercel.app";

// Verified channel — Google Maps listing.
export const PHONE = "+212693966816";
export const PHONE_DISPLAY = "0693 96 68 16";
// NOTE(handover): WhatsApp uses the same mobile — standard for MA restaurants,
// assumed active. CONFIRM the line takes WhatsApp before hard promotion.
export const WHATSAPP = "212693966816";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

export const ADDRESS = "Riad Laarouss bin Lamkahi 224, Marrakech 40030";
export const GEO = { lat: 31.6339612, lng: -7.9906629 };
export const MAPS_CID = "16607515338505167509";
export const MAPS_LISTING = `https://maps.google.com/?cid=${MAPS_CID}`;
export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${GEO.lat},${GEO.lng}`;
export const MAPS_EMBED = `https://maps.google.com/maps?q=${GEO.lat},${GEO.lng}&z=16&output=embed`;
export const INSTAGRAM = "https://www.instagram.com/simple.restaurant_/";

// Real reservation channel — the client's own Microsoft Forms link (IG bio).
// NOTE(handover): confirm/replace with a cleaner reservation link before launch.
export const RESERVE_URL =
  "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__asigfFUOUszM05DMklSTE1XNTZXQkZaREFDUlhVNy4u&route=shorturl";

// Confirmed from the house's own promo graphic.
export const HAPPY_HOUR = "15h–18h";

// Real, earned reputation (surfaced, never invented). Google Maps, 2026-07-17.
export const RATING = { score: "4.6", scoreFr: "4,6", count: 1528, countFr: "1 528" };
export const IG_FOLLOWERS = "16K";

// WhatsApp prefilled message — a complete first line for reservations.
export function whatsappHref(lang: Lang): string {
  const text =
    lang === "fr"
      ? "Bonjour Simple ! Je souhaite réserver une table sur le rooftop."
      : "Hello Simple! I'd like to reserve a table on the rooftop.";
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

// Build a locale-prefixed route. Both locales are prefixed (/fr, /en).
export function localePath(lang: Lang, path: string): string {
  const clean = path === "/" ? "" : path;
  return `/${lang}${clean}`;
}

// Swap the leading locale segment of the current pathname.
export function altLocalePath(current: Lang, pathname: string): string {
  const other: Lang = current === "fr" ? "en" : "fr";
  if (/^\/(en|fr)(\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(en|fr)/, `/${other}`);
  }
  return `/${other}`;
}
