import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { FaHouseCrack } from 'react-icons/fa6';
import { FaChartBar } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';
import { BiLogoTelegram } from 'react-icons/bi';
import { BsEnvelopePaperFill } from 'react-icons/bs';
const ThirdCard = React.lazy(() => import('./ThirdCard'));

const cards = [
  {
    id: 1,
    icon: <FaCamera size={30} className="text-normalBlue" />,
    title: 'Accounting and Finance',
    desc: 'Primarily formed of accounting modules that keep tabs on your company’s total cash flow and profit and loss.',
  },
  {
    id: 2,
    icon: <RiContactsBook3Fill size={30} className="text-normalBlue" />,
    title: 'HR, Payroll & Attendance',
    desc: 'While automating operations involving the employees in your firm, such payroll, recruitment, leave, attendance , etc…',
  },
  {
    id: 3,
    icon: <FaHouseCrack size={30} className="text-normalBlue" />,
    title: 'Warehouse – Inventory Management',
    desc: 'Keeping track of stock levels and pricing for all products that your organization manufactures, purchases, stores, and sells.',
  },
  {
    id: 4,
    icon: <FaChartBar size={30} className="text-normalBlue" />,
    title: 'Project Management',
    desc: 'Management includes managing raw material, accounting for requirements, and tracking project status.',
  },
  {
    id: 5,
    icon: <FaClipboardList />,
    title: 'Purchase Order Management',
    desc: 'Record track of all essential order information such as purchase quantities, items purchased, and payment expenses.',
  },
  {
    id: 6,
    icon: <MdBusinessCenter size={30} className="text-normalBlue" />,
    title: 'Sales And Marketing',
    desc: 'Sales Management, integration with CRM processes let user easily manage your products, customers, quotations and invoices.',
  },
  {
    id: 7,
    icon: <BiLogoTelegram size={30} className="text-normalBlue" />,
    title: 'Vehicle Fleet Management',
    desc: 'Manages the registration, repair, maintenance, driver and fuel consumption, and every other aspect of the vehicles.',
  },
  {
    id: 8,
    icon: <BsEnvelopePaperFill size={30} className="text-normalBlue" />,
    title: 'Customer Centric CRM',
    desc: 'Manages contact management, communication tracking, opportunity/lead tracking, quote creation, and sales agent productivity.',
  },
];
const ThirdCards = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="text-center w-[calc(100%-20%)] md:w-[calc(100%-35%)] gap-4 text-normalBlue flex items-center justify-center flex-col z-50">
          <h1 className="text-[13px] md:text-[29px] font-semibold">
            ERP System Software Developed Exclusively for Ethiopian Companies
          </h1>
          <p className="text-[14px] md:text-[17px] text-black/90 leading-7">
            Each and every module has specific purpose in ERP software. These
            modules look over and manage different divisions and departments of
            the industry.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center gap-6 py-10 flex-wrap w-[95%] md:w-[84%] mx-auto">
        {cards.map((card) => (
          <ThirdCard info={card} />
        ))}
      </div>
    </div>
  );
};

export default ThirdCards;
