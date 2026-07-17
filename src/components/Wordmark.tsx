// Wordmark: "SIMPLE" set in the grotesque display, tight, with the signature
// marigold dot. Placeholder mark until the client supplies a vector logo.
export function Wordmark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "plaster";
}) {
  const color = tone === "plaster" ? "text-plaster" : "text-ink";
  return (
    <span
      className={`font-display font-extrabold uppercase leading-none tracking-[-0.03em] ${color} ${className}`}
      aria-label="Simple Restaurant"
    >
      Simple<span className="text-yellow">.</span>
    </span>
  );
}
