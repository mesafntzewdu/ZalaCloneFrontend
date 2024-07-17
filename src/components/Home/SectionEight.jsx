import React, { useEffect, useState } from 'react';
import { LuChevronRight } from 'react-icons/lu';
import { useMediaQuery } from 'react-responsive';
const Messages = [
  'Why You Work With Us',
  'Why You Love Us',
  'Why You Choose Us',
];
let Accordion = [
  {
    id: 1,
    icon: <LuChevronRight />,
    title: 'We Provide Competitive Pricing',
    desc: 'We offer website design, web development, software development, ERP, online marketing, web hosting and web application development at fair market pricing with a quicker turnaround than most other web design companies. It is a function of our in-house skill set and the ability to leverage technology to meet a wide array of demands; we’re great at what we do, and our efficiency allows us to price our work competitively.',
  },
  {
    id: 2,
    icon: <LuChevronRight />,
    title: 'We Create Experiences',
    desc: 'We create experiences that are attractive, simple to use, and drive results for your company. We are well experienced on software development, ERP deployment and website design, in addition we’re really focused on making things work for your audience … and your business.',
  },
  {
    id: 3,
    icon: <LuChevronRight />,
    title: 'We Are On Time And On Budget',
    desc: 'We determine the scope of the web development, ERP or software development project, create a budget and timeline, and once they’re approved, we stick to them. Just to make sure, we do weekly status checks on progress and deadlines to keep everyone – you included – on track.',
  },
];
const SectionEight = () => {
  const [texts, setTexts] = useState(Messages[0]);
  const [animate, setAnimate] = useState(false);
  let i = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        i = (i + 1) % Messages.length;
        setTexts(Messages[i]);
        setAnimate(false);
      }, 500); // Match this duration with the CSS animation duration
    }, 3500); // Longer interval to account for both the disappearance and appearance

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
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
    <section className="bg-[#F8F9FA] w-full">
      <div className="md:w-[calc(100%-30%)] w-[calc(100%-10%)] md:flex-row flex-col mx-auto py-14 flex items-center justify-center gap-10">
        <div className="flex-1">
          <img src="/SectionEight.png" alt="" />
        </div>
        <div className="flex-1 flex items-center gap-7 justify-start flex-col">
          <h1
            className={`textChange ${
              animate ? 'animate' : ''
            } tracking-wide font-semibold text-normalBlue text-3xl`}
          >
            {texts}
          </h1>
          <div className="flex items-start justify-start flex-col gap-3 w-full">
            {Accordion.map((acc) => {
              return (
                <div key={acc.id} className="w-full">
                  <div
                    onClick={() => handleDrop(acc.id)}
                    className="flex cursor-pointer items-center p-4 bg-white shadow-md rounded-md w-full justify-start gap-2"
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
                      drop === acc.id ? isDesktopOrLaptop ? 'h-52' : 'h-36' : 'h-0'
                    } text-sm font-medium relative overflow-hidden text-gray-400 transition-all ease-linear duration-300`}
                  >
                    <p className="p-4">{acc.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
