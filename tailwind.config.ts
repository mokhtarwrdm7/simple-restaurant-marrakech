import type { Config } from "tailwindcss";

// Design tokens named after Simple Restaurant's OWN materials (BRAND.md) — a
// sun-drenched Marrakech rooftop, NOT a cream-and-serif riad. Base ground is
// warm sun-plaster; the signature is the marigold-yellow of the terrace tables,
// with sunset coral, medina clay-terracotta and fresh zellij sage.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plaster: {
          DEFAULT: "#F5E9D6", // page canvas — sun-washed medina plaster
          deep: "#EFDFC6", // slightly deeper plaster for banded sections
          soft: "#FBF4E7", // near-white warm panel
        },
        ink: {
          DEFAULT: "#241A12", // warm near-black-brown text
          soft: "#4A3B2E", // muted body
          faint: "#7A6A58", // captions / meta
        },
        yellow: {
          DEFAULT: "#EDB01E", // SIGNATURE — the yellow tables
          deep: "#D89A0C",
          soft: "#F7CE63",
        },
        coral: {
          DEFAULT: "#E0603C", // sunset sky — energy / secondary
          deep: "#C64C2C",
        },
        clay: {
          DEFAULT: "#9E4326", // Marrakech medina walls — dark bands
          deep: "#7E3319",
        },
        sage: {
          DEFAULT: "#6F7E52", // zellij tiles / mint tea — fresh accent
          deep: "#586843",
        },
        rattan: "#CBB187", // natural furniture / borders
        sand: "#E4D6BE", // hairlines / muted dividers
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1240px",
      },
      boxShadow: {
        lift: "0 18px 40px -22px rgba(60, 34, 12, 0.35)",
        card: "0 10px 30px -18px rgba(60, 34, 12, 0.30)",
        yellow: "0 14px 30px -14px rgba(216, 154, 12, 0.5)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      transitionTimingFunction: {
        // ease-out-expo — punchy start, smooth deceleration (no dated overshoot)
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
