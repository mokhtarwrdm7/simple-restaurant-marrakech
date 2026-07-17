import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = ["", "/about", "/menu", "/contact"];
const LANGS = ["fr", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: `${SITE_URL}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
