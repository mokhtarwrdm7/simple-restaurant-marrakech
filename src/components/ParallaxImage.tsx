"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Img } from "./Img";

// Gentle hero parallax — a slow vertical drift as the hero scrolls away, giving
// the rooftop-at-sunset shot a touch of golden-hour depth. Purposeful, subtle,
// and fully skipped under prefers-reduced-motion. The image is VISIBLE by
// default; GSAP only nudges it — never a content-staging dependency.
export function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  position = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  position?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.registerPlugin(ScrollTrigger);
      const img = scope.current?.querySelector("img");
      if (!img) return;
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope }
  );

  return (
    <div ref={scope} className={`relative overflow-hidden ${className}`}>
      <Img
        src={src}
        alt={alt}
        fill
        priority={priority}
        position={position}
        imgClassName={`scale-110 ${imgClassName}`}
      />
    </div>
  );
}
