import React, { useEffect, useState } from 'react';
import { BiChevronDown, BiChevronRight, BiChevronUp } from 'react-icons/bi';
const SectionEleven = React.lazy(() =>
  import('../components/Home/SectionElevenComponents/SectionEleven.jsx')
);
const Section12 = React.lazy(() => import('../components/Home/Section12.jsx'));
const SectionEight = React.lazy(() =>
  import('../components/Home/SectionEight')
);
const SectionSeven = React.lazy(() =>
  import('../components/Home/SectionSeven')
);
const SectionNine = React.lazy(() =>
  import('../components/Home/SectionNine.jsx')
);
const SectionTen = React.lazy(() =>
  import('../components/Home/SectionTen.jsx')
);
const SectionSix = React.lazy(() => import('../components/Home/SectionSix'));
const SectionFive = React.lazy(() => import('../components/Home/SectionFive'));
const Cards = React.lazy(() => import('../components/Home/Cards'));
const ThirdCards = React.lazy(() => import('../components/Home/ThirdCards'));
const SectionFour = React.lazy(() => import('../components/Home/SectionFour'));
const SectionTwo = React.lazy(() => import('../components/Home/SectionTwo'));
const HomeHeaderComponent = React.lazy(() =>
  import('../components/Home/HomeHeaderComponent')
);

const Home = () => {
  let handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="w-full flex items-start justify-center flex-col">
      <HomeHeaderComponent />
      <SectionTwo
        title={
          'Looking for top software tech companies in Ethiopia? Leading Ethiopian Company Specializing in ERP Solutions, Website Design, and SoftwareDevelopment'
        }
        desc={
          'Welcome to ZalaTech, a prominent Ethiopian IT consulting and custom software development company. Our headquarters are based in Addis Ababa, Ethiopia, positioning us at the heart of the thriving IT sector. We specialize in delivering top-notch IT Services and Solutions, including software development, ERP development, shortcode SMS integration, website development, and mobile application development. Trust us for cutting-edge technology solutions tailored to meet your specific needs.'
        }
      />
      <Cards />
      <ThirdCards />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      <Section12 />
      <div
        onClick={handleScroll}
        className={`sticky hidden bottom-9 transform bg-gray-200 active:scale-105 hover:scale-95 transition-all ease-linear duration-300 cursor-pointer w-14 h-14 z-[9999] items-center justify-center rounded-full shadow-md shadow-gray-300 left-10`}
      >
        <BiChevronUp size={28} />
      </div>
    </div>
  );
};

export default Home;
