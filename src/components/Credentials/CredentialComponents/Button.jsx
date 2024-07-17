import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Button = ({ label, onClick, disable }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`${
        disable
          ? 'bg-normalBlue/50 cursor-not-allowed'
          : 'bg-normalBlue cursor-auto'
      } w-full p-3 tracking-wide text-sm text-white rounded-md cursor-pointer hover:scale-[.99] active:scale-[1.01] transition duration-200 ease-linear`}
    >
      {disable ? (
        <ScaleLoader
          color={'white'}
          loading={true}
          size={10}
          height={17}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
