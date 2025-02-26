import React, { useState } from 'react';
import { TbHeartPin } from 'react-icons/tb';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { IoBookOutline } from 'react-icons/io5';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { BsTruck } from 'react-icons/bs';
import { MdQueueMusic } from 'react-icons/md';
import { PiCarProfileThin } from 'react-icons/pi';

const SideButtons = [
  {
    id: 1,
    label: 'Healthcare',
    href: 'first',
    icon: <TbHeartPin size={19} />,
    title: 'Healthcare',
    desc: 'At ZalaTech, we offer Healthcare Software Development solutions based on in-depth research & deep industry knowledge. Our talented team of experts has years of experience in developing solutions for the betterment of mankind. Serving this sector with top-notch solutions is the main objective of our company. Our solutions not only use cutting-edge technology but also provide excellent returns on investments. Not only do we offer Healthcare Software Development services, but we also partner with our clients and consult them on the latest developments in the industry and deliver “future-ready” solutions which address healthcare needs and eliminate redundancy. Our talented team uses a technical approach and expertise to create reliable and stable web applications that are compliant with HIPAA regulations. We at ZalaTech offer you a complete range of healthcare development services. We have created the best healthcare applications for our esteemed customers who were satisfied with our service delivery.',
  },
  {
    id: 2,
    label: 'Retail & eCommerce',
    href: 'second',
    icon: <HiOutlineShoppingCart size={19} />,
    title: 'Retail & eCommerce',
    desc: 'At ZalaTech, we deliver cutting-edge technology solutions for eCommerce & retail businesses. Our eCommerce solutions are built on the latest technology platforms like Magento, SpreeCommerce, and PrestaShop. Our quality services are spread across web development, responsive web development customization, cart development, payment gateway integration, order tracking, content management, & relationship management. We at ZalaTech ensure best practices in user experience design to deliver responsive web design with high on-page performance optimization, faster page load time, page fluidity, and regular maintenance. Proper incorporation of needed features, simple navigation, and precise tailoring in view of our client’s specific business objectives assure that our online stores deliver value to customer’s businesses. We firmly believe in timely delivery & cost-efficient solutions along with consistency and premium quality. Our dedicated team of professionals uses their experience in developing online stores and domain knowledge to build products customized to our client expectations. We have experience in developing solutions across industries like retail, healthcare, grocery, transport, and much more. We specialize in plug-in & module development solutions for small and medium-level enterprises.',
  },
  {
    id: 3,
    label: 'Travel and Tourism',
    href: 'third',
    icon: <LuPlaneTakeoff size={19} />,
    title: 'Travel and Tourism',
    desc: 'At ZalaTech, we build cutting-edge technology to help travel and tourism businesses automate the management of customer communication, guest management, online booking, customer communication, and logistics management. We have a dedicated team specializing in the design and develop end-to-end travel tech solutions by integrating OTAs’ & tour operators’ websites. We keep ourselves updated on the latest trends and developments in travel and hospitality to not only develop solutions but also consult our clients and help them be future-ready. This adds immense value to our as well as our client’s businesses. We at ZalaTech focus on developing easy-to-use interfaces that boost user engagement and maximize Return on Investment. Our goal is to minimize on costs of operations while uplifting return on investment for your business.',
  },
  {
    id: 4,
    label: 'Education and eLearning',
    href: 'fourth',
    icon: <IoBookOutline size={19} />,
    title: 'Education and eLearning',
    desc: 'Our highly talented eLearning development team applies both traditional as well as innovative e-learning approaches to enhance the learning process with new technologies which will help the educators to understand their learners & deliver solutions that cover diverse e-learning techniques using emerging modern technology AR/VR enabled learning. Moreover, we offer customized e-learning solutions to improve corporate learning portals, online courses, learning management systems, online training applications, among many more. We partner with our customers to understand their needs and deliver real outcomes which make a business impact. Our solutions ensure that our customer’s investment in their employees is justified by challenging them to take risks and experience consequences within a safe, online learning and training environment. From small simulations to scenario-based software training- our web-based, easy-to-implement solutions span across all varieties depending on our client’s needs and budgets. It eliminates all geographical barriers reinforcing collaboration and opens up a broad horizon of learning, discussions, and cross-cultural interactions.',
  },
  {
    id: 5,
    label: 'Banking and Finance Solutions',
    href: 'five',
    icon: <HiOutlineBanknotes size={19} />,
    title: 'Banking and Finance Solutions',
    desc: 'Our team of experts is highly qualified and certified with in-depth expertise and years of experience in this industry. This helps us in understanding client requirements better. We not only build products, but we also work with our clients to provide them expert consulting services and tell them what they need in the future! At the same time, we are completely driven by the objective of helping financial institutions in achieving cost-efficiency and scalability. Our custom-built tech solutions for banking and finance businesses are mainly conceptualized to fill the bridge between the banking service and the common person. Our purpose is to produce personalized banking and financial solutions to improve agility, operation, and leadership.',
  },
  {
    id: 6,
    label: 'Logistics and Transportation',
    href: 'six',
    icon: <BsTruck size={19} />,
    title: 'Logistics and Transportation',
    desc: 'Whether you’re a transportation company or offer other services, logistics software development is an important means of managing inventory and keeping the supply chain running smoothly, from warehouse management to shipping. Every enterprise has logistics needs, after all. And they operate better when you have the right tech by their side. We have a highly talented smart logistics software development team who are at the same time keen learners as well. Moreover, The team specializing in logistics and transportation concentrates on maximizing return on investment and improving the overall workflow daily. We at ZalaTech offer you the top logistics software development service and help you increase your development with our cross-functional expertise.',
  },
  {
    label: 'Media and Entertainment',
    href: 'seven',
    icon: <MdQueueMusic size={19} />,
    title: 'Media and Entertainment',
    desc: 'We have an offshore software development company that provides online promotion solutions, social networking, media content distribution channels using the latest tech trends and social networking development tools. We at ZalaTech develop fully-fledged software for video streaming, offer your end-users top-notch features they need, and give access to the content on desktops as well as mobile devices. Implementing cutting-edge technology, we assist Media and Entertainment industry to build eye-catching & intuitive experiences for fans and visitors. Our versatile and advanced software development services incorporate features such as live video feeds, ticket booking, loyalty programs, social media, and fan transit. Since we hold many years of experience in the IT industry, till now, we have functioned with a few of the prominent names in the industry; also, we benefited them to boost their profits.',
  },
  {
    id: 7,
    label: 'Automotive',
    href: 'eight',
    icon: <PiCarProfileThin size={19} />,
    title: 'Automotive',
    desc: 'The automotive sector requires effective software solutions to enhance sustainability and efficiency. Being a top software development company we at ZalaTech provide innovative, customized, and technology-driven solutions to its clients across the globe. We deliver top-notch automotive software development services according to your business requirements. Embracing the complexity of the automotive software architecture, our automotive software services are built around top approaches for prototyping, developing, testing, and deploying new features. Other than that, all our automotive software development efforts don’t compromise on user satisfaction but improve software performance.',
  },
];

const SectionFive = () => {
  let [current, setCurrent] = useState(SideButtons[0].href);
  let [info, setInfo] = useState({
    title: SideButtons[0].title,
    desc: SideButtons[0].desc,
  });
  return (
    <section className="flex items-start justify-start bg-[#F8F9FA] flex-col gap-6">
      <div className="flex items-center pt-16 justify-center">
        <div className="text-center w-[calc(100%-15%)] md:w-[calc(100%-43%)] gap-2 text-normalBlue flex items-center justify-center flex-col z-50">
          <h1 className="text-[20px] md:text-[31px] font-semibold">
            Covering All Major Ethiopian Industries.
          </h1>
          <p className="text-[16px] text-black/80 leading-7">
            We have delivered highly scalable & secure website and software
            development solutions to clients in diverse industries including
            retail, healthcare to banking, travel and more. Following are the
            industries we cater to when it comes to website and software
            services.
          </p>
        </div>
      </div>
      <div className="w-11/12 lg:w-9/12 mx-auto flex items-start lg:flex-row flex-col justify-start gap-4">
        <div className="flex-1 md:max-w-[420px] w-full flex items-start justify-start flex-col gap-2 p-1 bg-gray-50">
          {SideButtons.map((buttons) => {
            return (
              <div
                ke
                onClick={() => {
                  setCurrent(buttons.href);
                  setInfo((prev) => ({ ...prev, title: buttons.title }));
                  setInfo((prev) => ({ ...prev, desc: buttons.desc }));
                }}
                key={buttons.id}
                className={`${
                  buttons.href === current
                    ? 'bg-gradient-to-r from-[#54598F] to-[#50599A] text-white'
                    : 'text-gray-500'
                } p-4 rounded-md flex font-bold text-[17px] cursor-pointer items-center justify-start w-full gap-2`}
              >
                {buttons?.icon}
                <p>{buttons.label}</p>
              </div>
            );
          })}
        </div>
        <div className="flex-1 flex-col gap-3 rounded-md py-10 bg-white flex items-start justify-start p-4 w-full">
          <h1 className="font-semibold text-normalBlue text-xl">
            {info?.title}
          </h1>
          <p className="text-sm text-gray-600 leading-6">{info?.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
