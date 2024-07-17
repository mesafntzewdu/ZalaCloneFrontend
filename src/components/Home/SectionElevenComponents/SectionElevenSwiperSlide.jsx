import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../utils/styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { BsChevronRight, BsClock } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

export default function SectionElevenSwiperSlide({ slides }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 700px)',
  });
  return (
    <>
      <Swiper
        slidesPerView={isDesktopOrLaptop ? 1 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id} className="my-10">
              <div className="flex items-start bg-white p-6 cursor-pointer shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 transition-all ease-linear duration-300 w-full shadow-md rounded-xl justify-start gap-4 flex-col">
                <div className="h-[70%] rounded-md">
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex items-start w-full justify-start gap-2">
                  {slide.subLinks.map((link) => {
                    return (
                      <h1
                        key={link.id}
                        className="p-1 bg-blue-50 text-xs rounded-md text-normalBlue font-semibold"
                      >
                        {link.label}
                      </h1>
                    );
                  })}
                </div>
                <h1 className="text-left text-normalBlue font-semibold text-xl">
                  {slide.title}
                </h1>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-start gap-2 text-xs">
                    <BsClock />
                    {slide.date}
                  </div>
                  <button className="flex items-center justify-start gap-1 text-xs">
                    Read more
                    <BsChevronRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
