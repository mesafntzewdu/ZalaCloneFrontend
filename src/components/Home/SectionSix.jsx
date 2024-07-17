import React from 'react';
const SwiperPerView = React.lazy(() => import('../../utils/SwiperPerView'));
let FirstSlides = [
  {
    img: '/clients/first.png',
    id: 1,
  },
  {
    img: '/clients/second.png',
    id: 2,
  },
  {
    img: '/clients/third.png',
    id: 3,
  },
  {
    img: '/clients/fifth.png',
    id: 4,
  },
  {
    img: '/clients/six.png',
    id: 5,
  },
  {
    img: '/clients/seven.png',
    id: 6,
  },
  {
    img: '/clients/eight.png',
    id: 7,
  },
  {
    img: '/clients/nine.png',
    id: 8,
  },
  {
    img: '/clients/ten.png',
    id: 9,
  },
];
let SecondSlides = [
  {
    img: '/clients2/first.png',
    id: 1,
  },
  {
    img: '/clients2/second.png',
    id: 2,
  },
  {
    img: '/clients2/third.png',
    id: 3,
  },
  {
    img: '/clients2/fifth.png',
    id: 4,
  },
  {
    img: '/clients2/seven.png',
    id: 5,
  },
  {
    img: '/clients2/eight.png',
    id: 6,
  },
  {
    img: '/clients2/nine.png',
    id: 7,
  },
  {
    img: '/clients2/ten.png',
    id: 8,
  },
  {
    img: '/clients2/eleven.png',
    id: 9,
  },
];
const SectionSix = () => {
  return (
    <div className="flex items-center justify-center py-8 w-full bg-[#F4F4F4]">
      <div className="w-11/12 md:w-9/12 mx-auto flex items-center justify-center flex-col gap-10">
        <h1 className="text-normalBlue text-center font-semibold text-[3xl] md:text-4xl">
          Some Of Our Premium Clients
        </h1>
        <div className="py-7 w-full flex items-center justify-center flex-col gap-5">
          <SwiperPerView slides={FirstSlides} />
          <SwiperPerView slides={SecondSlides} />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
