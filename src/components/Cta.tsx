import type { ReactNode } from "react";

// Conversion buttons. Primary = signature marigold (the strongest action:
// Reserve / Call). Coral = warm secondary. Outline/ghost for tertiary.
// All are real anchors to real channels — a tap away on every page.
type Variant = "primary" | "ink" | "coral" | "outline" | "ghostDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[0.8rem] font-body font-bold transition-all duration-300 ease-spring focus-visible:outline-none active:translate-y-px whitespace-nowrap";

const sizes = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-yellow text-ink shadow-yellow hover:-translate-y-1 hover:bg-yellow-soft",
  ink:
    "bg-ink text-plaster shadow-lift hover:-translate-y-1 hover:bg-clay-deep",
  coral:
    "bg-coral text-plaster-soft hover:bg-coral-deep hover:-translate-y-1 shadow-card",
  outline:
    "border-[1.5px] border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.04]",
  ghostDark:
    "border-[1.5px] border-plaster/35 text-plaster hover:bg-plaster/10",
};

export function Cta({
  href,
  children,
  variant = "primary",
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
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
