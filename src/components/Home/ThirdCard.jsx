import React from 'react';

const ThirdCard = ({ info }) => {
  return (
    <div className="w-11/12 md:max-w-[268px] gap-5 p-4 flex shadow-md hover:shadow-gray-200 hover:-translate-y-1 transition-all ease-linear duration-200  cursor-pointer shadow-gray-300 rounded-md">
      <div className="flex-2">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-t from-blue-100">
          {info.icon}
        </div>
      </div>
      <div className="flex-[1/2] flex items-start justify-start gap-2 flex-col">
        <h1 className="text-xl text-normalBlue font-semibold">{info?.title}</h1>
        <p className="text-sm text-gray-600 leading-6">{info?.desc}</p>
      </div>
    </div>
  );
};

export default ThirdCard;
