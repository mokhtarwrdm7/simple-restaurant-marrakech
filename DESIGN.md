# DESIGN.md: Simple Restaurant, Marrakech

Design reference for the premium rooftop redesign. The site keeps the approved all-grotesque identity and real photography, while moving away from the warm hospitality template used by earlier restaurant builds.

## Design read and dials

Reading this as a four-page restaurant redesign for mobile-first Marrakech diners, with a calm contemporary rooftop language led by daylight, real photographs, thin rules, and restrained marigold.

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 3`
- Mode: visual overhaul with strict preservation of routes, bilingual copy source, SEO, contact facts, imagery, and conversion links.

## Colour system

The audit refined the main canvas from warm plaster to near-zero-chroma daylight stone. This creates stronger separation from prior Morocco hospitality builds and lets the venue's real yellow tables carry the brand.

| Token | Hex | Role |
|---|---:|---|
| `simple-day` | `#F2F2EE` | continuous neutral editorial field |
| `simple-day-bright` | `#FAFAF7` | quiet inset surface and map ground |
| `simple-day-tint` | `#F5E9D6` | legacy plaster, minor tint only |
| `simple-day-line` | `#D7D6CF` | rules and dividers |
| `simple-night` | `#241A12` | primary text and dark close |
| `simple-night-soft` | `#4A4038` | dark hover tone |
| `simple-night-muted` | `#655F58` | body copy on daylight stone |
| `simple-sun` | `#EDB01E` | committed accent and one interruption |
| `simple-sun-deep` | `#C98500` | hover and focus support |
| `simple-coral` | `#E0603C` | sparse textual accent |
| `simple-zellij` | `#6F7E52` | reserved supporting brand reference |

Marigold is not a page canvas. It appears in the reservation action, the compressed factual interruption, the wordmark point, and small active states.

## Typography

- Display: Bricolage Grotesque at weights 500 and 600 only.
- Body and interface: Hanken Grotesk at weights 400, 500, and 600.
- Space Mono was removed.
- Display headlines cap below 6rem, use a minimum tracking of `-0.035em`, and remain sentence case.
- Body copy stays within 68 characters where practical.

## Three-act rhythm

1. Immersive real-photo hero with lower-left content and a primary reservation action above the fold.
2. One continuous `simple-day` editorial field with asymmetric photo pairings, thin ruled lists, loose gallery spacing, and no card grids.
3. A restrained marigold interruption followed by a dark photographic reservation close and matching footer.

The marigold strip is intentionally narrow and factual. It is not a metric rail or a large promotional block.

## Photography

- Use only curated images already stored in `public/img`.
- Prefer one decisive image to several small images.
- Photos are sharp or effectively square-cornered, with no floating badges and no generic image cards.
- Home carries the loosest gallery composition. Interior routes use fewer, larger images.
- The reservation close uses a darkened real photograph with one readability gradient.

## Motion

- Hero parallax and universal vertical or scale reveals are removed.
- Text is static.
- The only orchestrated motion is `SunlineImage`, a left-to-right clip reveal on one panoramic Home photograph.
- The effect uses GSAP, ScrollTrigger, and scoped `useGSAP` cleanup.
- It is skipped entirely for `prefers-reduced-motion`.
- Content and photography are visible by default without JavaScript.

## Shared components

- `Nav`: solid daylight-stone bar, one line, 72px tall, no scroll listener.
- `Cta`: sharp, bordered, medium-weight actions with consistent labels per intent.
- `MobileActionBar`: text only, with Call, Reserve, and Directions.
- `SectionHead`: vertical hierarchy without repeated tracked uppercase eyebrows.
- `ReservationClose`: shared dark photographic conversion close.
- `SunlineImage`: the sole motion signature.
- `DisplayCopy`: presentation-only punctuation cleanup so visible copy contains no em or en dashes while the bilingual source remains unchanged.

## Accessibility and responsive rules

- WCAG AA contrast is maintained on stone, marigold, and photographic grounds.
- Focus states use a 3px deep-marigold outline with offset.
- Navigation stays on one line at desktop and remains at or below 80px.
- Full-height heroes use `min-h-[100dvh]` where applicable.
- Mobile retains a persistent text-only conversion bar and safe-area padding.
- Real alt text, semantic headings, the skip link, and the existing locale structure remain intact.
