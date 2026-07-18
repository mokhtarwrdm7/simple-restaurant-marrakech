import type { Config } from "tailwindcss";

// Simple Restaurant's daylight rooftop system. The neutral field is deliberately
// near-zero-chroma so the venue's real yellow furniture and sunset photography
// remain the strongest brand signals.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "simple-day": {
          DEFAULT: "#F2F2EE",
          bright: "#FAFAF7",
          tint: "#F5E9D6",
          line: "#D7D6CF",
        },
        "simple-night": {
          DEFAULT: "#241A12",
          soft: "#4A4038",
          muted: "#655F58",
        },
        "simple-sun": {
          DEFAULT: "#EDB01E",
          deep: "#C98500",
          soft: "#F7CE63",
        },
        "simple-coral": {
          DEFAULT: "#E0603C",
          deep: "#B94428",
        },
        "simple-zellij": {
          DEFAULT: "#6F7E52",
          deep: "#52603E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1240px",
        prose: "68ch",
      },
      boxShadow: {
        rooftop: "0 18px 52px -38px rgba(36, 26, 18, 0.42)",
      },
      transitionTimingFunction: {
        sunline: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
