import React from 'react';
const SwiperPerView = React.lazy(() => import('../../utils/SwiperPerView'));
let FirstSlides = [
  '/clients/first.png',
  '/clients/second.png',
  '/clients/third.png',
  '/clients/fifth.png',
  '/clients/six.png',
  '/clients/seven.png',
  '/clients/eight.png',
  '/clients/nine.png',
  '/clients/ten.png',
];
let SecondSlides = [
  '/clients2/first.png',
  '/clients2/second.png',
  '/clients2/third.png',
  '/clients2/fifth.png',
  '/clients2/seven.png',
  '/clients2/eight.png',
  '/clients2/nine.png',
  '/clients2/ten.png',
  '/clients2/eleven.png',
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
