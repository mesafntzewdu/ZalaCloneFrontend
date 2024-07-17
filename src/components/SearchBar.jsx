import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open
          ? 'opacity-100 z-[9999999] -translate-y-3'
          : 'opacity-0 -z-50 translate-y-3'
      } shadow-md absolute transition-all ease-linear duration-300 transform left-2 sm:left-15 md:left-[32%] top-20 md:top-16 bg-white shadow-gray-200 w-[500px] rounded-md flex items-center justify-start`}
    >
      <input
        type="text"
        className="w-[85%] z-[99] p-3 rounded-lg outline-none rounded-r-none"
        placeholder="Search for something"
      />
      <button className="p-[12px] text-xl active:scale-[1.01] hover:scale-[.98] transition ease-linear duration-200 w-[15%] bg-white rounded-r-lg border-solid border-gray-200 border-l-[1px] flex items-center justify-center">
        <CiSearch size={28} />
      </button>
    </div>
  );
};

export default SearchBar;
