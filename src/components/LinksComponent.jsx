import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import useRegister from '../Hooks/useRegister';
// const useRegister = React.lazy(() => import('../Hooks/useRegister.jsx'));
const LinksComponent = ({ link, open, setOpen }) => {
  let registerModal = useRegister();
  return (
    <div className="flex cursor-pointer items-center justify-start gap-1 ">
      <div
        className={`${
          link.label === '' &&
          'active:scale-[1.01] hover:scale-[.98] transition ease-linear duration-200'
        }`}
        onClick={() => setOpen((open) => !open)}
      >
        {link?.icon && (link.label === '' && open ? <MdClose /> : link?.icon)}
      </div>
      <button
        onClick={link.label === 'Register Now' && registerModal.setOpen}
        className={`${
          link.label === 'Register Now' &&
          'bg-normalBlue cursor-pointer text-white p-2 rounded-md hover:scale-[.98] active:scale-[1.01] transition-all ease-linear duration-200 text-xs regButtonAnimation'
        } text-[14px] cursor-auto text-black/70 font-medium`}
      >
        <div>{link?.label}</div>
      </button>
    </div>
  );
};

export default LinksComponent;
