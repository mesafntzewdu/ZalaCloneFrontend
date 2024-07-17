import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const SectionTen = () => {
  return (
    <div className="w-11/12 mx-auto md:flex-row flex-col md:h-[30vh] flex items-center justify-center gap-4 md:gap-10">
      <div className="flex-1">
        <h1 className="text-normalBlue text-[20px] md:text-[27px] font-semibold">
          Interesting Topics Offering Great Insight Of ERP, Hardware, Software
          And Website Technology
        </h1>
      </div>
      <div className="flex-1 flex items-start justify-center">
        <div className="md:w-[370px] gap-5 flex items-start justify-start  flex-col">
          <p>
            Our editors publish new content to our blog, where you can learn
            about software development, website design, and ERP software
            implementation.
          </p>
          <button className="flex items-center justify-start gap-2 text-normalBlue font-semibold">
            Check out blog <BsChevronRight size={12} className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTen;
