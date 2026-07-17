"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

// Scroll-reveal wrapper — IntersectionObserver + CSS transitions (the proven
// mechanism: content VISIBLE by default, only genuinely below-fold items are
// hidden, each reveals independently, a hard safety timer force-shows all,
// reduced-motion never hides anything). NO ScrollTrigger for content staging.
//
// SIMPLE MOTION SIGNATURE — "golden-hour lift": a quick, buoyant rise. A 22px
// lift + 0.965→1 scale pop, opacity on ease-out (0.5s) while transform rides a
// punchy ease-out-expo (0.58s) with a light 0.09s stagger. The energy comes
// from the fast front-loaded curve + the scale pop (not a dated overshoot) —
// livelier than a calm riad's slow settle, matching a young, sociable rooftop.
export function Reveal({
  children,
  as = "div",
  className,
  stagger = 0.09,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Scoped query: only THIS wrapper's marked children (never the page).
    const found = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const items = found.length ? found : [root];

    const below = items.filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9
    );
    if (!below.length) return;

    const expo = "cubic-bezier(0.16, 1, 0.3, 1)"; // ease-out-expo — punchy, smooth decel
    below.forEach((el, i) => {
      const d = (delay + i * stagger).toFixed(2);
      el.style.opacity = "0";
      el.style.transform = "translateY(22px) scale(0.965)";
      el.style.transition = `opacity 0.5s ${expo} ${d}s, transform 0.58s ${expo} ${d}s`;
    });

    const show = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    below.forEach((el) => io.observe(el));

    // Hard safety: never leave content stranded.
    const safety = window.setTimeout(() => below.forEach(show), 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
      below.forEach(show);
    };
  }, [delay, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
