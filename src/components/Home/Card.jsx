import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const Card = ({ card }) => {
  return (
    <div className="w-11/12 md:max-w-[370px] shadow-md shadow-gray-400 cursor-pointer hover:shadow-gray-200 hover:-translate-y-1 transition-all ease-linear duration-200 flex-col rounded-lg bg-white flex items-center justify-center gap-8 py-16 px-7">
      <div className="p-6 rounded-full bg-gradient-to-t from-normalBlue to-blue-900 flex items-center justify-center">
        {card.icon}
      </div>
      <h1 className="text-[20px] font-semibold text-center text-normalBlue">{card.label}</h1>
      <p className="text-gray-700 text-[16px] font-normal text-center">{card.desc}</p>
      <button className='flex items-center justify-center gap-2 group text-sm'>
        Learn More <BsChevronRight className='group-hover:translate-x-1 transition-all ease-linear duration-200' size={14} />
      </button>
    </div>
  );
};

export default Card;
