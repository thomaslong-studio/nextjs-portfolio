'use client'

import { useState, useEffect } from "react";
import splitStringUsingRegex from "../utils/split-string-using-regex";

const getTransformStyles = (isMouseEntered: boolean, index: number) => ({
  transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
  transitionDelay: `${index * 0.02}s`,
});

export default function AnimatedLogoType() {
  const [isMouseEntered, setIsMouseEntered] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMouseEntered(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h1
      className="cursor-pointer font-heading font-bold text-2xl md:text-3xl isolate mix-blend-difference"
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      aria-label="thomas l."
    >
      <span className="relative flex overflow-hidden">
        {splitStringUsingRegex("thomas l.").map((character, index) => (
          <span className="relative" key={index}>
            <span className="inline-block whitespace-pre transition-transform duration-500" style={getTransformStyles(isMouseEntered, index)}>
              {character}
            </span>
            <span className="inline-block whitespace-pre transition-transform duration-500 absolute top-full w-full left-0" style={getTransformStyles(isMouseEntered, index)}>
              {character}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}
