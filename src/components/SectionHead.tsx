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
          className={`mb-4 inline-flex items-center gap-2.5 font-body text-xs font-bold uppercase tracking-eyebrow ${
            isPlaster ? "text-yellow-soft" : "text-clay"
          }`}
        >
          <span className="h-px w-6 bg-yellow" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-extrabold leading-[1.04] sm:text-4xl md:text-[2.75rem] ${
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
