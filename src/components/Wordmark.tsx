export function Wordmark({
  className = "",
  tone = "night",
}: {
  className?: string;
  tone?: "night" | "day";
}) {
  return (
    <span
      className={`font-display font-semibold uppercase leading-none tracking-[-0.02em] ${
        tone === "day" ? "text-simple-day" : "text-simple-night"
      } ${className}`}
      aria-label="Simple Restaurant"
    >
      Simple<span className="text-simple-sun">.</span>
    </span>
  );
}
