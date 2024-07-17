import React from 'react';
import { IoClose } from 'react-icons/io5';

const Header = ({open,setOpen}) => {
  return (
    <>
      {open && (
        <section className="w-full bg-headerColor relative flex items-center justify-center py-2">
          <div className="flex-1 flex-col md:flex-row flex items-center gap-4 justify-center">
            <h1 className="font-medium md:text-left text-center text-[13px] sm:text-[15.5px] text-black/80">
              Level Up Your Skills: IT Training Courses and Certifications in
              Ethiopia
            </h1>
            <button className="p-2 rounded-[4px] text-sm font-medium hover:scale-[1.01] active:scale-[.99] transition ease-in-out cursor-pointer duration-200 bg-gradient-to-r from-normalBlue to-lightBrown text-white">
              Check it Now
            </button>
          </div>
          <button onClick={() => setOpen(false)} className="absolute top-9 md:top-4 right-2 w-5 h-5 flex items-center justify-center hover:scale-[1.01] active:scale-[.99] transition ease-in-out cursor-pointer duration-200 rounded-full border-solid border-[1px] border-gray-400 mr-3">
            <IoClose />
          </button>
        </section>
      )}
    </>
  );
};

export default Header;
