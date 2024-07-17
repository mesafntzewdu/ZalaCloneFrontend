import React, { useEffect, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const Messages = [
  'ERP Software Implementation',
  'Shortcode Messaging Platform',
  'Software Development and Consulting',
  'Website Design and Development',
];

const HomeHeaderComponent = () => {
  const [texts, setTexts] = useState(Messages[0]);
  const [animate, setAnimate] = useState(false);
  let i = 0;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 700px)',
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        i = (i + 1) % Messages.length;
        setTexts(Messages[i]);
        setAnimate(false);
      }, 500); // Match this duration with the CSS animation duration
    }, 3500); // Longer interval to account for both the disappearance and appearance

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative md:h-[100vh] homeBg">
      <div className="md:h-[50%] flex py-5 items-center text-white justify-center md:justify-start pt-14 flex-col gap-3">
        <h1
          className={`textChange ${
            animate ? 'animate' : ''
          } text-[20px] md:text-[17px] tracking-wide`}
        >
          {texts}
        </h1>
        <h1 className="text-[28px] md:text-[41px] text-center font-semibold">
          We Have The Right Technology Solutions{' '}
        </h1>
        <p className="w-11/12 lg:w-6/12 mx-auto text-center leading-7 text-sm sm:text-[17px]">
          At ZalaTech, we excel in crafting secure, scalable, and robust
          website, web portal, and ERP software products. Based in Addis Ababa,
          Ethiopia, we have garnered a reputation for our exceptional
          performance since inception. Our expertise lies in developing
          industry-specific websites and software, solidifying our position as
          Ethiopia’s premier outsourced website and software company
          specializing in ERP system.
        </p>
        <button className="p-3 rounded-md bg-white flex items-center group justify-center transition-all ease-linear duration-150 active:scale-[1.02] hover:scale-[.99] gap-1 text-black font-medium">
          Contact us{' '}
          <BsChevronRight
            size={16}
            className="group-hover:translate-x-1 transition-all ease-linear duration-200"
          />
        </button>
      </div>
      <div
        className={`w-full md:h-[45%] relative subHomeComponent z-50 ${
          isDesktopOrLaptop && 'subHomeComponentMobile'
        } `}
      >
        <img
          src="/subHeaderComponentLogo.png"
          className="xl:flex hidden "
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeHeaderComponent;
