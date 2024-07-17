import React from 'react';

const SectionCard = ({ card }) => {
  return (
    <div className="w-11/12 mx-auto md:max-w-[300px] text-center flex cursor-pointer transition-all ease-in-out duration-500 hover:bg-gradient-to-r group from-[#6C73AA] to-[#6B5E5D] items-center justify-center flex-col gap-5 p-4 shadow-md shadow-gray-300 rounded-md">
      <div className="group-hover:text-white text-normalBlue transition-all ease-linear duration-200">
        {card.icon}
      </div>
      <h1 className="text-xl group-hover:text-white transition-all ease-linear duration-200 text-normalBlue font-semibold">
        {card.title}
      </h1>
      <p className="text-sm group-hover:text-gray-200 leading-7 font-medium transition-all ease-linear duration-200 text-gray-500">
        {card.desc}
      </p>
    </div>
  );
};

export default SectionCard;
