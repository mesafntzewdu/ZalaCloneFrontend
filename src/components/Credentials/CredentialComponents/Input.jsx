import React, { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa6';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
const Input = ({
  id,
  label,
  errors,
  disable,
  type,
  register,
  required,
  control,
}) => {
  let [focused, setIsFocused] = useState(false);
  let handleFocus = () => setIsFocused(true);
  let handleBlur = () => setIsFocused(false);
  let [value, setValue] = useState('');
  let [show, setShow] = useState(false);
  return (
    <div className="flex items-start w-full justify-start relative flex-col gap-2">
      {id !== 'phoneNumber' ? (
        <>
          <input
            {...register(id, {
              required,
              onChange: (e) => setValue(e.target.value),
            })}
            id={id}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type={
              type === 'password'
                ? show
                  ? 'text'
                  : 'password'
                : type
                ? type
                : 'text'
            }
            className={`${
              errors[id] && !focused && !value
                ? 'border-rose-500'
                : 'border-gray-300'
            } border-solid tracking-wide text-sm border-[1px] peer w-full p-3 rounded-md outline-none`}
          />
          <label
            htmlFor={id}
            className={`${
              focused || value ? '-translate-y-[22px]' : 'translate-y-0'
            } ${
              errors[id] && !focused && !value
                ? 'text-rose-800 font-bold'
                : 'text-gray-700 peer-focus:text-gray-500'
            } text-xs tracking-wide absolute top-3 font-Manrope  bg-white px-1 transition-all ease-linear duration-200 left-2`}
          >
            {errors[id] && !focused ? 'Fill this field!' : label}
          </label>
        </>
      ) : (
        <>
          <Controller
            name={id}
            control={control}
            rules={{ required }}
            render={({ field }) => (
              <div
                className={`w-full relative border-solid  ${
                  errors[id] && !field.value
                    ? 'border-rose-400 border-b-[1px]'
                    : 'border-[1px] border-gray-300 rounded-md'
                } p-3`}
              >
                <PhoneInput
                  id={id}
                  defaultCountry={'US'}
                  value={field.value}
                  onChange={field.onChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disable}
                  className="text-sm outline-none"
                />
                <label
                  htmlFor={id}
                  className={`${
                    focused || field.value
                      ? '-translate-y-[1px]'
                      : 'translate-y-0'
                  } ${
                    errors[id] && !field.value
                      ? 'text-rose-500 font-bold'
                      : 'text-gray-700 font-normal'
                  } tracking-wide absolute font-Manrope -top-2 left-3 bg-white font-bold text-xs transform transition ease-linear duration-200`}
                >
                  {errors[id] && !focused ? 'Fill this field!' : label}
                </label>
              </div>
            )}
          />
        </>
      )}

      {type === 'password' && (
        <div
          onClick={() => setShow((show) => !show)}
          className="absolute top-[7px] active:scale-[1.01] transition-all ease-linear duration-200 cursor-pointer hover:scale-[.98] right-2 w-8 h-8 flex items-center justify-center border-solid border-[1px] border-gray-200 rounded-full"
        >
          {!show ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
};

export default Input;
