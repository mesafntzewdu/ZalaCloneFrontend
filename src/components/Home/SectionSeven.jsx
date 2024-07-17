import React from 'react';

const SectionSeven = () => {
  return (
    <div className="w-full min-h-[90vh]">
      <div className="flex items-center justify-center py-8 mx-auto w-[calc(100%-10%)]  md:w-[calc(100%-20%)] flex-col gap-14">
        <div className="text-center gap-2 w-11/12 md:w-10/12 text-normalBlue flex items-center justify-center flex-col z-50">
          <h1 className="text-[20px] md:text-[31px] font-semibold">
            Discover the Unique Edge of ZalaTech in Ethiopia's IT Landscape,
            Focusing on Software, Website, and ERP Services
          </h1>
        </div>
        <div className="w-full flex md:flex-row flex-col items-center justify-center">
          <div className="w-11/12 md:w-[49%]">
            <p className="text-gray-500 leading-8 font-medium tracking-wide">
              ZalaTech stands out by providing cutting-edge Software, Website,
              and ERP services in Ethiopia. Our commitment to
              Software-as-a-Service (SaaS) ensures that we stay at the forefront
              of technological advancements, meeting the needs of both Ethiopian
              and international clientele. <br /> <br /> Our comprehensive range
              of IT solutions covers ERP, Software, and Website services
              tailored to the Ethiopian and East African markets. ZalaTech
              empowers Ethiopian businesses to enhance operational efficiency
              without exceeding their budget constraints. Our tried-and-tested
              products include cost-effective ERP and software solutions,
              showcasing our dedication to affordability. <br /> <br /> As a
              leading software development company in Ethiopia, ZalaTech is
              synonymous with quality and robustness, backed by a team of highly
              competent and expert professionals. Our services span Frontend
              Development, Software and Web Development, Offshore Development,
              Content Management, Mobile App Development, and E-commerce.
              Experience excellence with ZalaTech’s bespoke IT solutions in
              Ethiopia, designed to elevate businesses to new heights.
            </p>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="/animatedPc.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
