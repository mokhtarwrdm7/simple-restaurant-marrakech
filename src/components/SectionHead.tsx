import type { ReactNode } from "react";

export function SectionHead({
  title,
  lede,
  context,
  className = "",
}: {
  title: ReactNode;
  lede?: ReactNode;
  context?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {context && <p className="mb-5 max-w-prose text-sm font-medium text-simple-coral-deep">{context}</p>}
      <h2 className="max-w-4xl font-display text-[clamp(2.35rem,5vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.03em] text-simple-night">
        {title}
      </h2>
      {lede && <p className="mt-6 max-w-prose text-base leading-7 text-simple-night-muted sm:text-lg sm:leading-8">{lede}</p>}
    </div>
  );
}
