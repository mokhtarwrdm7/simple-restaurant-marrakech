import type { ElementType, ReactNode } from "react";

// Compatibility wrapper retained for the infrastructure layer. The redesign
// deliberately keeps text static and uses motion only on the SunlineImage.
export function Reveal({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const Tag = as as ElementType;
  return <Tag className={className}>{children}</Tag>;
}
