"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import AnimatedElement from "./animated-section";

interface SectionMarqueeProps {
  items: string[];
}

export default function SectionMarquee({ items }: SectionMarqueeProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  // Duplicate items many times for seamless infinite scroll (Swiper loop needs many slides)
  const duplicatedItems = items && items.length > 0 
    ? Array(20).fill(items).flat()
    : [];

  useEffect(() => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  if (!items || items.length === 0) {
    return null;
  }

  const swiperConfig = {
    speed: 3500,
    loop: true,
    spaceBetween: 50,
    centeredSlides: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    allowTouchMove: false,
    freeMode: false,
    slidesPerView: "auto" as const,
    loopAdditionalSlides: 10,
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  const slides = duplicatedItems.map((item, index) => (
    <SwiperSlide key={index} className="!w-auto">
      <div className="font-heading font-semibold lowercase text-2xl lg:text-3xl text-background whitespace-nowrap">
        {item} 
      </div>
    </SwiperSlide>
  ));

  return (
    <AnimatedElement>
      <section className="flex px-4">
      <div className="section-marquee w-full overflow-hidden bg-[#E5E5E5] py-6 lg:py-8">
      <Swiper
        modules={[Autoplay]}
        {...swiperConfig}
        className="w-full"
      >
        {slides}
      </Swiper>
      </div>
      </section>
    </AnimatedElement>
  );
}

