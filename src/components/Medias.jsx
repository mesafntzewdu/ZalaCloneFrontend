import React, { useState } from 'react';
import { BsEnvelopeOpen, BsPhone, BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { CiMenuFries } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BiEdit, BiInfoCircle, BiUser } from 'react-icons/bi';
import { MdClose, MdEmail } from 'react-icons/md';
import { LOGOUT } from '../Token/userSlice.jsx';

const SearchBar = React.lazy(() => import('./SearchBar.jsx'));
const LeftLinks = [
  {
    icon: <BsEnvelopeOpen />,
    label: 'example@gmail.com',
  },
  {
    icon: <BsPhone />,
    label: '+251-911-645867 | +251-912-974411',
  },
];
const RightLinks = [
  {
    icon: <BsSearch />,
    label: '',
  },
  {
    label: 'About Us',
  },
  {
    label: 'Articles',
  },
  {
    label: 'Jobs -  Careers',
  },
  {
    label: 'Contact Us',
  },
  {
    label: 'Register Now',
  },
];
const LinksComponent = React.lazy(() => import('./LinksComponent.jsx'));

const Medias = () => {
  let [open, setOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1236px)',
  });
  const isDesktopOrLaptop2 = useMediaQuery({
    query: '(min-width: 1236px)',
  });
  let { username, profile, email } = useSelector((state) => state.user);
  let [drop, setDrop] = useState(false);
  let dispatch = useDispatch();
  let handleLogout = () => {
    dispatch(LOGOUT({}));
    if (drop) setDrop(false);
  };
  return (
    <div className="px-10 sm:px-20 xl:px-40 flex relative items-center justify-between w-full gap-3 py-2 border-solid border-gray-200 border-b-[1px]">
      <div className="hidden lg:flex w-full items-center justify-start gap-2">
        {LeftLinks.map((link, index) => (
          <div
            key={link.label}
            className={`flex items-center ${
              index !== LeftLinks.length - 1
                ? 'border-r border-gray-300 pr-3'
                : ''
            }`}
          >
            <LinksComponent link={link} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between xl:justify-end gap-3 font-medium w-full">
        {RightLinks.map((link, index) =>
          link.label === 'Register Now' && username ? null : (
            <div
              key={link.label}
              className={`items-center ${
                index !== RightLinks.length - 1
                  ? 'border-r border-gray-300 justify-end lg:pr-3 text-[11px] sm:text-[16px]'
                  : ''
              } ${
                (link.label === 'Articles' || link.label === 'Register Now') &&
                isDesktopOrLaptop
                  ? 'hidden'
                  : 'flex'
              }`}
            >
              {<LinksComponent setOpen={setOpen} open={open} link={link} />}
            </div>
          )
        )}
        <SearchBar open={open} setOpen={setOpen} />
      </div>
      {username && isDesktopOrLaptop2 && (
        <div className="flex relative items-center justify-center gap-2 rounded-md">
          <button
            onClick={() => setDrop((prev) => !prev)}
            className="flex items-center justify-start gap-2 px-3 transition-all ease-linear duration-200 rounded-md p-1 hover:bg-gray-200"
          >
            <div className="w-8 h-8 rounded-full p-[1px] border-solid border-[1px] border-gray-300">
              <img
                src={profile}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {drop ? <MdClose /> : <CiMenuFries />}
          </button>
          <div
            className={`${
              drop
                ? 'show opacity-100 z-[9999999] translate-y-0'
                : 'hide opacity-0 -z-50 translate-y-full'
            } absolute p-2 gap-2 flex origin-top transition-all ease-linear duration-200 items-start justify-start flex-col shadow-md bg-white w-60 rounded-md top-12 before:absolute before:-top-1 before:content-[''] before:w-3 before:h-3 before:bg-white before:-z-50 before:left-[44%] before:rotate-45`}
          >
            <button className="flex text-xs p-1 hover:bg-gray-100 w-full rounded-md font-semibold items-center justify-start gap-1">
              <div className="w-6 h-6 rounded-full border-solid border-[1px] border-gray-300 p-[1px]">
                <img
                  src={profile}
                  alt=""
                  className="w-full object-cover h-full rounded-full"
                />
              </div>
              {username}
            </button>
            <Link
              to={'/'}
              className="flex text-xs p-2 hover:bg-gray-100 w-full rounded-md font-semibold items-center justify-start gap-1"
            >
              <MdEmail size={20} />
              {email}
            </Link>
            <Link
              to={'/'}
              className="flex text-xs p-2 hover:bg-gray-100 w-full rounded-md font-semibold items-center justify-start gap-1"
            >
              <BiEdit size={20} />
              Edit Profile
            </Link>
            <Link
              to={'/'}
              className="flex text-xs p-2 hover:bg-gray-100 w-full rounded-md font-semibold items-center justify-start gap-1"
            >
              <BiInfoCircle size={20} />
              Account Info
            </Link>
            <button className="w-full flex text-center p-2 bg-rose-600 text-white text-[10px] font-bold items-center justify-center cursor-pointer rounded-md">
              Delete Account
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex text-center p-2 bg-sky-600 text-white text-[10px] font-bold items-center justify-center cursor-pointer rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medias;
