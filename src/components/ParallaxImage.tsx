import { Img } from "./Img";

// Kept as a static compatibility component. Hero parallax was removed in the
// redesign so photography stays calm and motion is reserved for one sunline.
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
  return (
    <div className={`overflow-hidden ${className}`}>
      <Img src={src} alt={alt} fill priority={priority} position={position} imgClassName={imgClassName} />
    </div>
  );
}
