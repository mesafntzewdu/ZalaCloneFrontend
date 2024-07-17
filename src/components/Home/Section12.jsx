import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { LuChevronRight } from 'react-icons/lu';
import { useMediaQuery } from 'react-responsive';
let Accordion = [
  {
    id: 1,
    icon: <LuChevronRight />,
    title:
      'We Provide Competitive Pricing We create experiences that are attractive, simple to use,',
    desc: 'We offer website design, web development, software development, ERP, online marketing, web hosting and web application development at fair market pricing with a quicker turnaround than most other web design companies. It is a function of our in-house skill set and the ability to leverage technology to meet a wide array of demands; we’re great at what we do, and our efficiency allows us to price our work competitively.',
  },
  {
    id: 2,
    icon: <LuChevronRight />,
    title:
      'We Create Experiences We create experiences that are attractive, simple to use,',
    desc: 'We create experiences that are attractive, simple to use, and drive results for your company. We are well experienced on software development, ERP deployment and website design, in addition we’re really focused on making things work for your audience … and your business.',
  },
  {
    id: 3,
    icon: <LuChevronRight />,
    title:
      'We Are On Time And On Budget We create experiences that are attractive, simple to use,',
    desc: 'We determine the scope of the web development, ERP or software development project, create a budget and timeline, and once they’re approved, we stick to them. Just to make sure, we do weekly status checks on progress and deadlines to keep everyone – you included – on track.',
  },
  {
    id: 4,
    icon: <LuChevronRight />,
    title: 'We offer website design, web development, ',
    desc: 'ZalaTech strives to be the best. Our substantial experience and competency in providing diversified website and software development services with the latest technology standards have empowered many businesses. Our development experts specialize in customer-centric engagement models, strict quality measures, in-depth technical and domain expertise, and an understanding of different software development frameworks, programming languages, and platforms to deliver the best web software solutions.',
  },
  {
    id: 5,
    icon: <LuChevronRight />,
    title: 'Unlike other outsource development companies, we?',
    desc: 'ZalaTech a leading outsourced development company, thoroughly analyzes your project and then gives a list of experts whose knowledge and understanding match the best for your project. Moreover, you can shortlist from the choices, and once you have confirmed the applicants, we will continue with the work.',
  },
  {
    id: 6,
    icon: <LuChevronRight />,
    title:
      'ZalaTech a leading outsourced development company, We create experiences that are attractive, simple to use,',
    desc: 'Unlike other outsource development companies, we offer all the services at a competitive price. We believe in providing cost-effective, professional, and reliable services. Being one of the top outsourcing companies in India, our experts deliver high-quality solutions.',
  },
];
const Section12 = () => {
  let [drop, setDrop] = useState(null);
  let handleDrop = (id) => {
    if (drop === id) {
      setDrop(null);
    } else {
      setDrop(id);
    }
  };
    const isDesktopOrLaptop = useMediaQuery({
      query: '(max-width: 700px)',
    });
  return (
    <section className="w-full py-10">
      <div className="w-11/12 md:flex-row flex-col md:w-10/12 flex items-center justify-center gap-10 mx-auto">
        <div className="flex-1 gap-3 flex items-center justify-end flex-col">
          <div className="max-w-[55%]">
            <img src="/secondBg.png" alt="" />
          </div>
          <h1 className="text-[23px] md:text-left text-center font-semibold text-normalBlue">
            Website and Software Development FAQ's
          </h1>
          <button className='flex items-center justify-center gap-2 rounded-md bg-normalBlue/20 p-4 text-normalBlue font-semibold hover:bg-normalBlue/50 hover:gap-5 transition-all ease-linear duration-200'>
            <IoMdMenu size={20} /> Contact Us
          </button>
        </div>
        <div className="flex flex-1 items-start justify-start flex-col gap-3 w-full">
          {Accordion.map((acc) => {
            return (
              <div key={acc.id} className="w-full md:w-11/12">
                <div
                  onClick={() => handleDrop(acc.id)}
                  className="flex cursor-pointer items-center p-5 bg-white shadow-md shadow-gray-300 rounded-md w-full justify-start gap-2"
                >
                  <div className="flex items-start text-blue-600 justify-start">
                    <div className="-mr-2 text-normalBlue/50">{acc.icon}</div>
                    {acc.icon}
                  </div>
                  <h1 className="text-[15px] font-semibold text-normalBlue">
                    {acc.title}
                  </h1>
                </div>
                <div
                  className={`${
                    drop === acc.id ? 'h-48' : 'h-0'
                  } text-sm font-medium relative overflow-hidden text-gray-400 transition-all ease-linear duration-300`}
                >
                  <p className="p-4">{acc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section12;
