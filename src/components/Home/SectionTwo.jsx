import React from 'react';

const SectionTwo = ({ title, desc }) => {
  return (
    <div className="md:h-[40vh] py-10 md:mt-52 flex items-center bg-gray-50 justify-center">
      <div className="text-center w-[calc(100%-17%)] lg:w-[calc(100%-37%)] text-normalBlue flex items-center justify-center flex-col gap-3 z-50">
        <h1 className="text-[20px] md:text-[24px] font-semibold">{title}</h1>
        <p className="text-sm md:text-[16.5px] text-black/80 leading-7">{desc}</p>
        <button className="border-solid font-semibold border-normalBlue/50 border-[2px] rounded-[4px] p-3 hover:text-normalBlue/80 transition-all ease-linear duration-150 cursor-pointer px-6 text-[15px]">
          Who Are We
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
