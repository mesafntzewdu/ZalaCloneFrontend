import React, { useCallback, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
const Button = React.lazy(() => import('./CredentialComponents/Button'));

const Modal = ({
  open,
  disable,
  onClose,
  onSubmit,
  title,
  headerTitle,
  body,
  footer,
  label,
  error,
}) => {
  let [openModal, setOpenModal] = useState(open);
  useEffect(() => {
    setOpenModal(open);
  }, [open]);
  let handleClose = useCallback(() => {
    if (disable) return;
    setOpenModal(false);
    setTimeout(() => {
      onClose();
    }, 700);
  }, [disable, onClose]);
  let handleSubmit = useCallback(() => {
    if (disable) return;
    onSubmit();
  }, [disable, onSubmit]);
  if (!open) return;
  return (
    <div
      className={`fixed top-0  left-0 w-full h-full bg-neutral-700/80 flex items-center justify-center z-[9999999]`}
    >
      <div
        className={`${
          openModal
            ? 'z-50 opacity-100 translate-y-0'
            : '-z-50 opacity-0 -translate-y-full'
        }  w-11/12 md:w-7/12 lg:w-4/12 shadow-md shadow-gray-600 transition-all duration-500 ease-linear  transform origin-top relative  gap-3 flex justify-center items-center flex-col mx-auto p-5 bg-white rounded-lg`}
      >
        <button
          onClick={handleClose}
          className="absolute hover:scale-[1.01] active:scale-[.99] transition-all ease-linear duration-200 top-2 right-3 w-8 h-8 flex items-center justify-center rounded-full border-solid border-[1px] border-gray-300"
        >
          <MdClose />
        </button>
        <div className="w-32">{headerTitle}</div>
        <div
          onSelect={false}
          className={`${
            error ? 'show flex opacity-100 z-50' : 'hide hidden opacity-0 -z-50'
          } w-full items-center text-xs justify-start p-3 bg-rose-100 rounded-md font-bold text-rose-600`}
        >
          {error}
        </div>
        <div className="flex items-center text-normalBlue tracking-widest justify-center w-full text-xl font-bold">
          {title}
        </div>
        <div className="w-full flex items-center justify-center">{body}</div>
        <Button label={label} disable={disable} onClick={handleSubmit} />
        <div className="flex items-center justify-center">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
