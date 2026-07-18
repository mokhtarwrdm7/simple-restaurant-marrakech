"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Img } from "./Img";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SunlineImage({
  src,
  alt,
  position = "center",
  className = "",
}: {
  src: string;
  alt: string;
  position?: string;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const image = scope.current?.querySelector<HTMLElement>("[data-sunline]");
      if (!image) return;

      gsap.fromTo(
        image,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.05,
          ease: "power3.out",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      <div data-sunline>
        <Img src={src} alt={alt} ratio="16 / 7" position={position} className="w-full" />
      </div>
    </div>
  );
}
