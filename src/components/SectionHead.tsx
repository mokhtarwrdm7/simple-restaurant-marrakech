import type { ReactNode } from "react";

// Section header — eyebrow (tracked caps with a short yellow rule), a display
// title, and an optional lede. Kept to one eyebrow per ~3 sections per the
// anti-slop rules; the yellow marker is the section-rhythm signature.
export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = "ink",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "ink" | "plaster";
  align?: "left" | "center";
  className?: string;
}) {
  const isPlaster = tone === "plaster";
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <span
          className={`mb-5 inline-flex items-center gap-2.5 font-body text-sm font-semibold ${
            isPlaster ? "text-yellow-soft" : "text-clay-deep"
          }`}
        >
          <span className="h-2 w-2 rotate-45 bg-yellow" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`max-w-3xl text-balance font-display text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] ${
          isPlaster ? "text-plaster" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            isPlaster ? "text-plaster/80" : "text-ink-soft"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
