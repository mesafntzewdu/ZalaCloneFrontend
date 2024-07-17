import React from 'react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

const SectionFour = () => {
  return (
    <section className="md:h-[25vh] flex py-8 items-center justify-center sectionFour w-full">
      <div className=" text-white flex items-center justify-center sm:flex-row flex-col gap-4 w-11/12 md:w-9/12 mx-auto">
        <div className="flex text-start justify-start gap-3 flex-col">
          <h1 className="text-3xl text-center md:text-left font-semibold">
            IT Training Courses Now Available - Register Today!
          </h1>
          <p className="text-[17px] font-medium">
            Don’t miss out on this opportunity to enhance your skills and
            advance your career. Our training courses are now available, and
            registration is open!
          </p>
        </div>
        <button className="p-3 rounded-3xl bg-white text-normalBlue hover:shadow-md hover:shadow-gray-200 font-semibold group text-xl w-8/12 md:mx-0 mx-auto md:w-3/12 flex items-center justify-center gap-1">
          <IoChevronForwardCircleOutline className="group-hover:-translate-x-2 transition-all ease-linear duration-300" />
          Learn More
        </button>
      </div>
    </section>
  );
};

export default SectionFour;
