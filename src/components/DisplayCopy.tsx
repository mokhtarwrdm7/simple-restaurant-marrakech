import { t } from "@/lib/copy";
import type { Lang } from "@/lib/site";

type Bilingual = { fr: string; en: string };

export function displayCopy(node: Bilingual, lang: Lang): string {
  return cleanVisibleText(t(node, lang), lang);
}

export function cleanVisibleText(value: string, lang: Lang): string {
  return value
    .replace(/(\d{1,2}h?)\s*[–—]\s*(\d{1,2}h?)/g, (_match, start, end) =>
      lang === "fr" ? `${start} à ${end}` : `${start} to ${end}`
    )
    .replace(/\s*[–—]\s*/g, ", ");
}
