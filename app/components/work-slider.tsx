"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

export default function WorkSlider() {
  const cards = [
    {
      id: 1,
      title: "house of xm",
      category: "Design & Development",
      link: "/work/house-of-xm",
      image: "/house_of_xm.webp",
    },
    {
      id: 2,
      title: "neighbor",
      category: "Development",
      link: "/work/neighbor",
      image: "/house_of_xm.webp",
    },
    {
      id: 3,
      title: "rent panda",
      category: "Design & Development",
      link: "https://example.com",
      image: "/house_of_xm.webp",
    },
    {
      id: 4,
      title: "project four",
      category: "Design",
      link: "/example-4",
      image: "/house_of_xm.webp",
    },
    {
      id: 5,
      title: "project five",
      category: "Development",
      link: "/example-5",
      image: "/house_of_xm.webp",
    },
    {
      id: 6,
      title: "project six",
      category: "Design & Development",
      image: "/house_of_xm.webp",
    },
  ];

  return (
    <div className="wrapper flex flex-col gap-10 lg:gap-16 w-full">
      <h2 className="font-heading font-semibold text-5xl lg:text-7xl">
        selected work
      </h2>
      <div className="w-full">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.8,
            },
          }}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          className="swiper-scrollbar-custom"
        >
          {cards.map((card) => {
            const CardContent = (
              <div className="relative aspect-[1/1] w-full overflow-hidden group cursor-pointer flex flex-col justify-end">
                {card.image && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                )}
                {/* Bottom text overlay */}
                <div className="flex p-3">
                  <div className="flex flex-wrap justify-between items-center w-full bg-background/50 backdrop-blur-xs p-4">
                    <h3 className="font-heading font-semibold text-lg lg:text-2xl">
                      {card.title}
                    </h3>
                    {card.category && (
                      <span className="text-sm lg:text-base">
                        {card.category}
                      </span>
                    )}
                  </div>
                </div>
                {/* Arrow icon */}
                {card.link && (
                  <div className="absolute left-1/2 top-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background/50 backdrop-blur-xs flex items-center justify-center shadow-lg opacity-0 -translate-x-8 -translate-y-4 group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500 ease-out">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.707116 6.53606e-06V1.99405L8.6055 2.00112L9.49759e-06 10.6066L1.41422 12.0208L10.0197 3.41533L10.0268 11.3137H12.0208V6.53606e-06H0.707116Z" fill="#EDEDED"/>
                    </svg>
                  </div>
                )}
              </div>
            );

            return (
              <SwiperSlide key={card.id}>
                {card.link ? (
                  <Link 
                    href={card.link}
                    className="block h-full"
                    target={card.link.startsWith('http') ? '_blank' : undefined}
                    rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

