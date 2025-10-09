"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SectionHero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;
      const amt = 4;
      setOffset({ x: normX * amt, y: normY * amt });
    };

    const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="wrapper flex flex-col md:flex-row gap-6 md:gap-0 overflow-x-hidden">
      <div className="flex flex-1 min-w-3/12 justify-center items-center flex-col">
        <p className="text-sm lg:text-base">
          I’m a creative front-end developer with a knack for turning ideas into pixel-perfect realities. With 5 years of industry experience and a solid background in web design, I bridge the gap between functionality and aesthetics, building digital experiences that are as seamless as they are visually engaging.
        </p>
      </div>
      <div className="flex flex-2 justify-center items-center relative">
        <Image
          aria-hidden
          src="/thomas_l_hero.png"
          alt="Personal portfolio hero image."
          width={768}
          height={768}
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
          className="max-w-full w-full h-fit z-10 will-change-transform transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
        />
        <svg className="w-full h-full absolute right-4 lg:right-6 top-4 lg:top-6 z-0" width="486" height="508" viewBox="0 0 486 508" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M121.012 0H485.5L364.988 508H0.5L121.012 0Z" fill="#EF626C"/>
        </svg>

      </div>
      <div className="flex flex-1 min-w-3/12 justify-center items-center lg:items-end flex-col font-heading font-semibold relative z-10 cursor-default">
        <div className="flex justify-start items-start flex-col text-8xl lg:text-9xl lg:mr-16 w-fit absolute right-0 bottom-4 lg:bottom-0 lg:relative">
          <span className="relative inline-block group select-none lg:leading-[normal]">
            <span className="relative">design.</span>
            <span className="pointer-events-none absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#EF626C] via-[#FABC3C] to-[#00FFC5] opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              design.
            </span>
          </span>
          <span className="relative inline-flex group text-transparent [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:#ededed]">
            <span
                aria-hidden
                className="relative opacity-0 w-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out"
              >
                <span className="absolute right-0 ">
                &lt;
                </span>
              </span>
            <span className="block ">
              develop
            </span>
            <span
              aria-hidden
              className="lg:group-hover:opacity-0"
            >
              .
            </span>
            <span
              aria-hidden
              className="translate-x-[-28px] lg:translate-x-[-38px] opacity-0 w-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out whitespace-nowrap"
            >
              {'/'}
              {'>'}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}