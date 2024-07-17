import React from 'react';
const Card = React.lazy(() => import('./Card'));
import { FaRadio } from 'react-icons/fa6';
import { FaServer } from 'react-icons/fa';
import { SiHomeassistantcommunitystore } from 'react-icons/si';

let CardsArray = [
  {
    id: 1,
    icon: <FaRadio size={39} className="text-white" />,
    label: 'Software Development & Implementation',
    desc: 'Design & Develop Custom Software Solutions that empower Ethiopian businesses to stay ahead of their competition.',
  },
  {
    id: 2,
    icon: <FaServer size={39} className="text-white" />,
    label: 'Website Design & Development',
    desc: 'Designing and creating custom built websites, web portals and web applications. We analyze and research the market trends and collaborate these with your business requirements.',
  },
  {
    id: 3,
    icon: <SiHomeassistantcommunitystore size={39} className="text-white" />,
    label: 'ERP System Development & Implementation',
    desc: 'Enhance Business Operations with Comprehensive ERP Software in Ethiopia Streamlining Data Flow for Accounting, Fleet Management, Inventory, Sales, HR, and More',
  },
  {
    id: 4,
    icon: <FaRadio size={39} className="text-white" />,
    label: 'Software Development & Implementation',
    desc: 'Design & Develop Custom Software Solutions that empower Ethiopian businesses to stay ahead of their competition.',
  },
  {
    id: 5,
    icon: <FaServer size={39} className="text-white" />,
    label: 'Website Design & Development',
    desc: 'Designing and creating custom built websites, web portals and web applications. We analyze and research the market trends and collaborate these with your business requirements.',
  },
  {
    id: 6,
    icon: <SiHomeassistantcommunitystore size={39} className="text-white" />,
    label: 'ERP System Development & Implementation',
    desc: 'Enhance Business Operations with Comprehensive ERP Software in Ethiopia Streamlining Data Flow for Accounting, Fleet Management, Inventory, Sales, HR, and More',
  },
];

const Cards = () => {
  return (
    <div className="w-full flex sudoContainer z-50 relative py-8  items-start justify-center gap-8 flex-wrap">
      {CardsArray.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default Cards;
