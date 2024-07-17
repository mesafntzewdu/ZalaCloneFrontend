import React, { lazy, useEffect, useRef, useState } from 'react';
import { BsChevronBarRight, BsChevronRight, BsPhone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { MdClose, MdEmail } from 'react-icons/md';
import { BiChevronDown, BiEdit, BiInfoCircle } from 'react-icons/bi';
import useRegister from '../Hooks/useRegister';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { CiMenuFries } from 'react-icons/ci';
import { LOGOUT } from '../Token/userSlice';

const Links = [
  {
    label: 'Home',
    href: 'home',
  },
  {
    label: 'Software Solution',
    href: '/soft',
    noCols: 2,
    haveAnImage: true,
    subMenus: [
      [
        {
          label: 'Software Development',
          href: '',
        },
        {
          label: 'ERP System Software Technology',
          href: '',
        },
        {
          label: 'Database Development',
          href: '',
        },
        {
          label: 'Social Media App and Web Development',
          href: '',
        },
        {
          label: 'Mobile Application Development',
          href: '',
        },
      ],
      [
        {
          label: 'Business Process Outsourcing – BPO',
          href: '',
        },
        {
          label: 'Cloud Server Management and Consulting',
          href: 'Cloud Server Management and Consulting',
        },
        {
          label: 'Shortcode SMS Messaging',
          href: '',
        },
        {
          label: 'Business and IT Consulting Service',
          href: '',
        },
        {
          label: 'UAT – Software Testing',
          href: '',
        },
      ],
    ],
  },
  {
    label: 'Website Services',
    href: '/website',
    noCols: 3,
    haveAnImage: false,
    subMenus: [
      [
        {
          label: 'Web Based Solutions',
          href: '',
        },
        {
          label: 'Website System',
          href: '',
        },
        {
          label: 'Website Design',
          href: '',
        },
        {
          label: 'Web Portal Development',
          href: '',
        },
      ],
      [
        {
          label: 'Content Management System – CMS',
          href: '',
        },
        {
          label: 'Ecommerce Development',
          href: '',
        },
        {
          label: 'UX User Interface Design',
          href: '',
        },
      ],
      [
        {
          label: 'Search Engine Optimization',
          href: '',
        },
        {
          label: 'Local SEO',
          href: '',
        },
        {
          label: 'SEO Audit',
          href: '',
        },
        {
          label: 'SEO Report',
          href: '',
        },
      ],
    ],
  },
  {
    label: 'Our Products',
    href: '/pro',
    noCols: 2,
    haveAnImage: true,
    subMenus: [
      [
        {
          label: 'Accounting & Finance',
          href: '',
        },
        {
          label: 'Customer Centric CRM',
          href: '',
        },
        {
          label: 'HR, Payroll & Attendance Management',
          href: '',
        },
        {
          label: 'Project Management',
          href: '',
        },
        {
          label: 'Manufacturing',
          href: '',
        },
      ],
      [
        {
          label: 'Purchase Order Management',
          href: '',
        },
        {
          label: 'Sales And Marketing',
          href: '',
        },
        {
          label: 'Warehouse – Inventory Management',
          href: '',
        },
        {
          label: 'Vehicle Fleet Management',
          href: '',
        },
        {
          lazy: 'Point of Sale',
          href: '',
        },
      ],
    ],
  },
  {
    label: 'Website Hosting',
    href: '/host',
  },
  {
    label: 'Register Now',
  },
  {
    label: '251-911-645867 | +251-912-974411',
  },
];
const NavBar = () => {
  let [hovered, setHovered] = useState(null);
  let [dropdown, setDropDown] = useState(false);
  let [subMenuDrop, setSubMenuDrop] = useState({
    subMenu: [],
    drop: false,
  });
  let { username, profile, email } = useSelector((state) => state.user);
  let registerModal = useRegister();
  let handleDrop = (link) => {
    setSubMenuDrop((prev) => ({
      drop: !prev.drop,
      subMenu: link?.subMenus,
    }));
    if (link.label === 'Register Now') {
      registerModal.setOpen();
      setDropDown((prev) => !prev);
    }
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 400px)',
  });
  let [drop, setDrop] = useState(false);
  let dispatch = useDispatch();
  let handleLogout = () => {
    dispatch(LOGOUT({}));
    if (drop) setDrop(false);
  };
  return (
    <div
      className={`flex items-center top-0 justify-between h-auto lg:h-[80px] bg-white md:gap-6 w-full md:py-1 flex-col border-solid border-gray-200 border-b-[1px]`}
    >
      <div className="px-5 sm:px-16 xl:px-44 flex items-center justify-between w-full">
        <Link to={'/'} className="w-36 md:w-48">
          <img src="/logo.png" alt="" />
        </Link>
        <ul className="lg:flex hidden items-center justify-end flex-1 gap-7 p-6 font-medium">
          {Links?.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.label !== 'Register Now' &&
                isDesktopOrLaptop &&
                link.label !== '251-911-645867 | +251-912-974411' && (
                  <button className="relative before:absolute text-sm before:contents-[''] before:-bottom-1 before:h-1 hover:before:right-0 before:w-0 hover:before:w-full before:bg-normalBlue before:rounded-md before:transition-all before:duration-200 before:ease-in-out">
                    {link.label}
                  </button>
                )}
              {
                <div
                  className={`${
                    link.subMenus && hovered === index
                      ? 'z-50 opacity-100 show -translate-y-2'
                      : 'opacity-0 -z-50 hide translate-y-0'
                  } w-9/12 absolute flex-col transition-all duration-300 ease-linear  left-[15%] top-[88px] shadow-md rounded-md shadow-gray-300`}
                >
                  <div
                    className={`rounded-b-lg submenu no-cols-${link.noCols}`}
                  >
                    {link?.subMenus?.map((subMenu, subIndex) => {
                      return (
                        <div key={subIndex} className={`submenu-col p-5`}>
                          {subMenu.map((item, itemIndex) => (
                            <Link key={itemIndex} to={item.href} className="">
                              <div className="p-3 text-[15px] hover:bg-black/5 -mb-1 rounded-md">
                                {item.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                  {link?.haveAnImage && (
                    <Link
                      to={'/'}
                      className="w-full relative flex overflow-hidden group items-start justify-center gap-8 rounded-b-lg p-6 pb-0 h-24"
                    >
                      <Link className="text-normalBlue z-50 text-xl" to={'/'}>
                        All in One Software <br /> Demo
                      </Link>
                      <Link className="text-gray-600 z-50 text-xs" to={'/'}>
                        Please request us for any <br /> missing software module
                      </Link>
                      <Link
                        className="text-xs flex z-50 items-center justify-center gap-2 group"
                        to={'/'}
                      >
                        Click Here{' '}
                        <BsChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-all ease-linear duration-150"
                        />
                      </Link>
                      <div className="-z-50 group-hover:scale-[1.1] transition-all ease-linear duration-200 absolute top-0 left-0 w-full h-full">
                        <img src="/subMenuImage.jpg" alt="" />
                      </div>
                    </Link>
                  )}
                </div>
              }
            </li>
          ))}
        </ul>
        <button className="active:scale-[.97] hidden xl:flex hover:scale-[1.02] transition ease-linear duration-200">
          <Link
            className="bg-normalBlue text-white p-3 rounded-md text-sm tracking-wide font-medium"
            to={'/'}
          >
            Training - Certification
          </Link>
        </button>
        <button
          onClick={() => setDropDown((pre) => !pre)}
          className="lg:hidden flex items-center justify-center"
        >
          {dropdown ? (
            <MdClose size={35} className="text-normalBlue" />
          ) : (
            <TiThMenu size={35} className="text-normalBlue" />
          )}
        </button>
      </div>
      <div className="w-full">
        <ul
          className={`${
            dropdown
              ? `${subMenuDrop.drop ? 'h-auto' : 'h-[400px]'} show`
              : 'h-0 hide'
          } ${drop ? 'h-[680px]' : 'h-0'} lg:hidden flex p-3 overflow-hidden transition-all ease-in-out duration-500 items-start justify-start gap-2 flex-col  w-full`}
        >
          {Links.map((link) => {
            return (
              <div className={`w-full`}>
                {link.label === 'Register Now' && username ? (
                  <div className="flex relative flex-col items-center justify-center gap-2 rounded-md">
                    <button
                      onClick={() => setDrop((prev) => !prev)}
                      className="flex items-center w-full bg-normalBlue p-2 justify-center gap-2 px-3 transition-all ease-linear duration-200 rounded-md"
                    >
                      <div className="w-12 h-12 rounded-full p-[1px] border-solid border-[1px] border-gray-300">
                        <img
                          src={profile}
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <BiChevronDown size={24} color="white" />
                    </button>
                    <div
                      className={`${
                        drop
                          ? 'show opacity-100 z-[999999999] translate-y-0'
                          : 'hide opacity-0 -z-50 translate-y-full'
                      } p-2 gap-2 flex origin-top transition-all ease-linear duration-200 items-start justify-start flex-col shadow-md bg-white w-full rounded-md top-12 before:absolute before:-top-1 before:content-[''] before:w-3 before:h-3 before:bg-white before:-z-50 before:left-[44%] before:rotate-45`}
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
                        className="flex text-xs p-3 hover:bg-gray-100 w-full rounded-md font-semibold items-center justify-start gap-1"
                      >
                        <MdEmail size={20} />
                        {email}
                      </Link>
                      <Link
                        to={'/'}
                        className="flex text-xs p-3 hover:bg-gray-100 w-full rounded-md font-semibold items-center justify-start gap-1"
                      >
                        <BiEdit size={20} />
                        Edit Profile
                      </Link>
                      <Link
                        to={'/'}
                        className="flex text-xs p-3 hover:bg-gray-100 w-full rounded-md font-semibold items-center justify-start gap-1"
                      >
                        <BiInfoCircle size={20} />
                        Account Info
                      </Link>
                      <button className="w-full flex text-center p-3 bg-rose-600 text-white text-[10px] font-bold items-center justify-center cursor-pointer rounded-md">
                        Delete Account
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full flex text-center p-3 bg-sky-600 text-white text-[10px] font-bold items-center justify-center cursor-pointer rounded-md"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDrop(link)}
                    className={`${
                      link.label === 'Register Now' &&
                      'text-center bg-normalBlue text-white justify-center rounded-lg p-4'
                    } text-normalBlue w-full p-3 active:bg-normalBlue/10 font-semibold flex items-center justify-start gap-2`}
                  >
                    {link.label} {link.subMenus && <BiChevronDown />}
                  </button>
                )}
                <div className="px-3">
                  <div
                    className={`${
                      subMenuDrop?.drop &&
                      link?.subMenus?.length > 0 &&
                      subMenuDrop?.subMenu === link?.subMenus
                        ? 'h-[470px] show'
                        : 'h-0 hide'
                    } flex items-start overflow-hidden transition-all ease-in-out duration-500 w-full justify-start flex-col gap-2`}
                  >
                    {link?.subMenus?.map((subMenu, subIndex) => {
                      return (
                        <div className="w-full">
                          <div className="w-full text-normalBlue">
                            <div key={subIndex} className={``}>
                              {subMenu?.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.href}
                                  className=""
                                >
                                  <div className="p-3 text-[15px] hover:bg-black/5rounded-md">
                                    {item?.label}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
