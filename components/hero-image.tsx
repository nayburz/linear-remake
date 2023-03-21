"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div ref={ref} className="[perspective:2000px] mt-[12.8rem]">
      <div
        className={classNames(
          "relative bg-hero-gradient border border-transparent-white bg-white bg-opacity-[0.01] rounded-lg",
          // use "transform:none" if animate-image-rotate doesn't work
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:h-full before:left-0 before:top-0 before:w-full before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0",
          inView && "before:animate-image-glow"
        )}
      >
        <img
          className={classNames(
            "relative z-10 transition-opacity delay-[680ms]",
            inView ? "opacity-100" : "opacity-0"
          )}
          src="/img/hero.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};
