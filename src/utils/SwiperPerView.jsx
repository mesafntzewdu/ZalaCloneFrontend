import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

export default function SwiperPerView({ slides }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 700px)',
  });
  return (
    <>
      <Swiper
        slidesPerView={isDesktopOrLaptop ? 2 : 5}
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
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id} className="p-4 my-10">
              <img
                src={slide?.img}
                className="w-full h-full object-cover"
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
