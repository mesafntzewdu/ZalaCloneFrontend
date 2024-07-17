import React from 'react';
const SectionCard = React.lazy(() =>
  import('../SectionNineCardComponent/SectionCard.jsx')
);
import { FaPencilAlt } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { FaPersonChalkboard } from 'react-icons/fa6';

let Cards = [
  {
    id: 1,
    icon: <FaPencilAlt size={48} />,
    title: 'Planning And Strategy',
    desc: 'Planning And Strategy In this phase, all the integrals are discussed and estimated; timelines are decided, roles are allotted, milestones and modules etc are also decided in this phase. So, this is one of those phases where the developer chalks out the plan for developing the project as per the SRS (Software Requirement Specification) documentation signed by the client.',
  },
  {
    id: 2,
    icon: <FaBox size={48} />,
    title: 'Development & Customization',
    desc: 'The programming, testing, debugging, prototype delivery and development, project functionalities and UI – all these are developed and things start taking shape. The first working model is shown to the client and reviews or feedbacks are taken for everything. Once the client approves, we take things ahead and the project enters the next phase.',
  },
  {
    id: 3,
    icon: <FaMedal size={48} />,
    title: 'Quality Assurance',
    desc: 'In this phase, the quality of the software is checked so that it satisfies the major requirements of complete and successful project development. The project must be robust, reliable, scalable, available and feature downward compatibility.',
  },
  {
    id: 4,
    icon: <FaPersonChalkboard size={48} />,
    title: 'Support And Maintenance',
    desc: 'Support And Maintenance The rules for future service in terms of Support and Maintenance are established and contracts are signed. We proudly say ZalaTech is the best software development company in Ethiopia, as we caters software development services with high agility and perfection.',
  },
];
const SectionNine = () => {
  return (
    <section className="w-full bg-[#F7F7F9] md:h-[90vh] AfterEffect flex items-center justify-center py-10 gap-16 flex-col">
      <div className="w-11/12 md:w-8/12 mx-auto flex items-center justify-center">
        <h1 className="text-[17px] md:text-[31px] font-semibold text-normalBlue">
          ZalaTech ERP, Website And Software Development Process
        </h1>
      </div>
      <div className="wfull mx-auto flex-wrap flex items-start justify-start gap-5">
        {Cards.map((card) => {
          return <SectionCard card={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};

export default SectionNine;
