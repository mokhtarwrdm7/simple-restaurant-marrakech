# DESIGN.md — Simple Restaurant, Marrakech

Design-system reference for the build. The palette is drawn from Simple's own captured photos
(Instagram @simple.restaurant_) — a sun-drenched Marrakech rooftop. See `../brand/BRAND.md` for the
full Brand DNA. Every literal colour below is an **intentional** design-system token (Tailwind
`tailwind.config.ts`), not drift.

## Colour palette

| Token | Hex | Role |
|-------|-----|------|
| plaster | `#F5E9D6` | page canvas — sun-washed medina plaster |
| plaster.deep | `#EFDFC6` | deeper plaster band |
| plaster.soft | `#FBF4E7` | near-white warm panel |
| ink | `#241A12` | primary text (warm near-black-brown) |
| ink.soft | `#4A3B2E` | muted body text |
| ink.faint | `#7A6A58` | captions / meta |
| yellow | `#EDB01E` | SIGNATURE — the yellow terrace tables; primary CTA |
| yellow.deep | `#D89A0C` | hover / focus ring |
| yellow.soft | `#F7CE63` | highlight swash / eyebrow on dark |
| coral | `#E0603C` | sunset accent / index numerals |
| coral.deep | `#C64C2C` | coral hover |
| clay | `#9E4326` | medina-wall dark bands (reserve band, footer) |
| clay.deep | `#7E3319` | hero scrim, clay hover |
| sage | `#6F7E52` | zellij / mint-tea fresh accent |
| sage.deep | `#586843` | sage hover |
| rattan | `#CBB187` | natural furniture / borders |
| sand | `#E4D6BE` | hairlines / dividers |

Inline-style literals used in the standalone `global-error.tsx` safety page (which cannot rely on
Tailwind classes): `#F5E9D6`, `#241A12`, `#9E4326`, `#EDB01E`, `#D89A0C`, plus ink tints
`rgba(36,26,18,0.25)` and `rgba(36,26,18,0.04)`. All derive from the tokens above.
`globals.css` uses `#241a12`, `#edb01e`, `#d89a0c`, `#f7ce63` (selection, focus ring, highlight swash).

## Type
- Display / headings: **Bricolage Grotesque** (600/700/800), tight tracking.
- Body / UI: **Hanken Grotesk** (400–700).
- Numerals / labels: **Space Mono** (index numbers, small labels).
All-grotesque system — deliberately not a warm serif (anti-convergence vs prior riad clients).

## Motion
IO-Reveal mechanism (visible-by-default + IntersectionObserver + 3s safety timer). Signature =
"golden-hour lift": 22px rise + 0.965→1 scale pop, ease-out-expo `cubic-bezier(0.16,1,0.3,1)`,
0.09s stagger. Gentle GSAP ScrollTrigger parallax on the hero only. Respects `prefers-reduced-motion`.

## Composition
- Image-led and asymmetric: the real rooftop photography carries each page opening, with type and conversion actions layered directly into the scene.
- Use committed color fields rather than neutral cards: ink for atmosphere, yellow for food/menu energy, plaster for long-form reading, and sage for earned social proof.
- Feature content is expressed as ruled lists, offset image pairings, and full-width bands. Avoid equal card grids, repeated numbered scaffolds, and pill clusters.
- Display headings use a tight 0.90–1.02 line height and cap at 6rem. Body copy stays below 65–70 characters per line.

## Components
- Navigation is transparent over the home hero, then resolves to an opaque plaster bar after scrolling. Interior routes use the plaster bar immediately.
- Primary actions use compact 0.8rem corners and a short upward hover response. Pills are reserved for controls where the shape communicates function.
- Photography uses restrained 0.8–1rem corners, occasional overlap, and slow image-only hover zoom. Do not wrap images in generic white cards.
- Footer uses the ink ground, an oversized wordmark, one dominant yellow reservation action, and a simplified navigation/contact row.
