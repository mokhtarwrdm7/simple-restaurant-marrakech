import copyData from "@/data/copy.json";
import type { Lang } from "./site";

// copy.json holds ALL client-facing strings (copywriter stage, FR-first + EN).
// Leaves are { fr, en } pairs. `t()` resolves one bilingual leaf to a string.
export const copy = copyData;

type Bi = { fr: string; en: string };

export function t(node: Bi, lang: Lang): string {
  return lang === "fr" ? node.fr : node.en;
}
