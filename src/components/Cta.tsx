import type { ReactNode } from "react";

type Variant = "sun" | "night" | "outline" | "light";

const base =
  "inline-flex items-center justify-center whitespace-nowrap border font-body font-semibold transition-colors duration-300 ease-sunline focus-visible:outline-none";

const sizes = {
  md: "min-h-11 px-5 py-2.5 text-[0.95rem]",
  lg: "min-h-12 px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  sun: "border-simple-sun bg-simple-sun text-simple-night hover:border-simple-sun-deep hover:bg-simple-sun-deep",
  night: "border-simple-night bg-simple-night text-simple-day hover:bg-simple-night-soft",
  outline: "border-simple-night/35 text-simple-night hover:border-simple-night hover:bg-simple-day-bright",
  light: "border-simple-day/55 text-simple-day hover:border-simple-day hover:bg-simple-day/10",
};

export function Cta({
  href,
  children,
  variant = "sun",
  size = "md",
  external = false,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
