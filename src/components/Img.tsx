import type { CSSProperties } from "react";

// Lightweight image: pre-optimized WebP in /public/img, served statically.
// Three modes: fill (absolute cover, parent must be relative+sized), ratio
// (aspect-ratio wrapper, prevents CLS), or natural (block w-full h-auto).
// Real curated Simple Restaurant photos only (Instagram @simple.restaurant_).
export function Img({
  src,
  alt,
  ratio,
  fill = false,
  className = "",
  imgClassName = "",
  priority = false,
  sizes,
  position = "center",
}: {
  src: string;
  alt: string;
  ratio?: string;
  fill?: boolean;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  position?: string;
}) {
  const common = {
    alt,
    sizes,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    style: { objectPosition: position } as CSSProperties,
  };

  if (fill) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return (
      <img
        src={src}
        {...common}
        className={`absolute inset-0 h-full w-full object-cover ${className} ${imgClassName}`}
      />
    );
  }

  if (!ratio) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src={src} {...common} className={`block h-auto w-full object-cover ${className} ${imgClassName}`} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} {...common} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
    </div>
  );
}
