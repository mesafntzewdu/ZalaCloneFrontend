import React from 'react';
import { RiPoliceBadgeFill } from 'react-icons/ri';
import { FaFacebook, FaLinkedin, FaPhoneSquareAlt, FaYoutube } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BiChevronRight, BiLogoTelegram } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { TfiYoutube } from 'react-icons/tfi';

let Images = [
  '/FooterImages/first.png',
  '/FooterImages/second.png',
  '/FooterImages/third.png',
  '/FooterImages/fourth.png',
  '/FooterImages/fifth.jpg',
  '/FooterImages/siz.png',
];

let FirstLink = [
  {
    id: 1,
    label: 'Quick Links',
    header: true,
  },
  {
    id: 2,
    label: 'Software Development',
    header: false,
  },
  {
    id: 3,
    label: 'ERP Solutions',
    header: false,
  },
  {
    id: 4,
    label: 'Website Development',
    header: false,
  },
  {
    id: 5,
    label: 'ShortCode VAS Software',
    header: false,
  },
  {
    id: 6,
    label: 'SEO Service',
    header: false,
  },
  {
    id: 7,
    label: 'Business and IT Consulting Service',
    header: false,
  },
  {
    id: 8,
    label: 'Website Hosting',
    header: false,
  },
];
let SecondLink = [
  {
    id: 1,
    label: 'Popular Software Modules',
    header: true,
  },
  {
    id: 2,
    label: 'HR, Payroll, Leave & Attendance Management',
    header: false,
  },
  {
    id: 3,
    label: 'Inventory or Warehouse Management',
    header: false,
  },
  {
    id: 4,
    label: 'Sales Management',
    header: false,
  },
  {
    id: 5,
    label: 'Purchase Management',
    header: false,
  },
  {
    id: 6,
    label: 'HR, Payroll, Leave & Attendance Management',
    header: false,
  },
];
let ThirdLink = [
  {
    id: 1,
    label: 'About Us',
    header: true,
  },
  {
    id: 2,
    label: 'Who We Are',
    header: false,
  },
  {
    id: 3,
    label: 'Contact Us',
    header: false,
  },
  {
    id: 4,
    label: 'Privacy Policy',
    header: false,
  },
  {
    id: 5,
    label: 'Disclaimer',
    header: false,
  },
];
let FourthLink = [
  {
    id: 1,
    label: 'Contact Us',
    header: true,
  },
  {
    id: 2,
    icon: <FaPhoneSquareAlt size={19} className="text-normalBlue" />,
    label: (
      <div>
        +251-911-645867 <br /> +251-912-974411
      </div>
    ),
    header: false,
  },
  {
    id: 3,
    label: 'info@zalatechs.com',
    icon: <MdMarkEmailUnread size={19} className="text-normalBlue" />,
    header: false,
  },
  {
    id: 4,
    icon: <BiLogoTelegram size={19} className="text-normalBlue" />,
    label: (
      <div>
        2nd Floor Gulf Aziz Bldg. In-front of Bonanza Hotel <br /> Addis
        Ababa I Ethiopia
      </div>
    ),
    header: false,
  },
];
let FifthLink = [
  {
    id: 1,
    icon: <FaFacebook size={20} className="text-normalBlue" />,
  },
  {
    id: 2,
    icon: <FaLinkedin size={20} className="text-normalBlue" />,
  },
  {
    id: 3,
    icon: <TfiYoutube size={20} className="text-normalBlue" />,
  },
];
const Footer = () => {
  return (
    <footer className="w-full min-h-[60vh] py-10 footer relative">
      <div className="lg:flex-row flex-col w-11/12 lg:w-10/12 mx-auto flex items-start justify-start gap-10">
        <div className="lg:w-[50%] flex items-start justify-start gap-4 flex-col">
          <img src="/logo.png" width={200} className="object-cover" alt="" />
          <p className="text-sm text-gray-600 leading-7">
            ZalaTech is a technology solution provider company situated in Addis
            Ababa, Ethiopia. ZalaTech is a reliable Website Design &
            Development, Software Development, ERP Implementation Solution,
            Networking solutions and SEO service provider in Ethiopia. We
            provide custom web, software, multi-platform solutions for
            Enterprise and Startup companies in Ethiopia.
          </p>
          <button className="p-4 font-semibold rounded-md hover:bg-gray-200 transition-all ease-linear duration-200 cursor-pointer active:scale-105 hover:scale-95 flex items-center justify-start gap-1 text-sm">
            <RiPoliceBadgeFill size={17} />
            About Us
          </button>
          <div className="flex items-center justify-start gap-4 w-full">
            {Images.map((image) => {
              return (
                <Link to={'/'} className="cursor-pointer">
                  <img width={100} height={100} src={image} alt="none" />
                </Link>
              );
            })}
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-600">
            ZalaTech PLC © All rights reserved contents
          </p>
        </div>
        <div className="lg:w-[70%] w-full flex-wrap md:flex-row flex-col flex items-start justify-start gap-5">
          <div className="lg:max-w-[200px] flex items-start justify-start flex-col gap-3">
            {FirstLink.map((first) => {
              return (
                <Link
                  className={`${
                    first.header &&
                    'text-normalBlue select-none font-bold text-xl'
                  } text-sm`}
                  key={first}
                  to={'/'}
                >
                  {first.label}
                </Link>
              );
            })}
          </div>
          <div className="lg:max-w-[200px] flex items-start justify-start flex-col gap-3">
            {SecondLink.map((second) => {
              return (
                <Link
                  className={`${
                    second.header &&
                    'text-normalBlue select-none font-bold text-xl'
                  } text-sm`}
                  key={second}
                  to={'/'}
                >
                  {second.label}
                </Link>
              );
            })}
            {ThirdLink.map((third) => {
              return (
                <Link
                  className={`${
                    third.header &&
                    'text-normalBlue select-none font-bold text-xl'
                  } text-sm`}
                  key={third}
                  to={'/'}
                >
                  {third.label}
                </Link>
              );
            })}
          </div>
          <div className="lg:max-w-[200px] flex items-start justify-start flex-col gap-6">
            <div className="flex items-start justify-start flex-col gap-3">
              {FourthLink.map((four) => {
                return (
                  <Link
                    className={`${
                      four.header && 'text-normalBlue font-bold text-xl'
                    } text-sm gap-2 flex items-center select-none justify-start`}
                    key={four}
                    to={'/'}
                  >
                    {four.icon}
                    {four.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-start justify-start gap-3">
              {FifthLink.map((fifth) => {
                return (
                  <Link
                    className={`${
                      fifth?.header && 'text-normalBlue font-bold text-xl'
                    } text-sm gap-2 flex items-center select-none justify-start`}
                    key={fifth.id}
                    to={'/'}
                  >
                    {fifth?.icon}
                    {fifth?.label}
                  </Link>
                );
              })}
            </div>
            <button className="w-full p-10 rounded-md flex items-center justify-center flex-col gap-1 text-xl font-semibold bg-normalBlue/80 hover:bg-normalBlue group transition-all ease-linear duration-300 text-white">
              <h1 className="">Visit Us</h1>
              <span className="flex items-center text-xs justify-center gap-1 group-hover:scale-x-105 transition-all ease-linear duration-200">
                Check it out <BiChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
