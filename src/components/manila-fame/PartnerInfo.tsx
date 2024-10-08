import React from 'react';

interface PartnerInfoProps {}

const PartnerInfo: React.FC<PartnerInfoProps> = () => {
  return (
    <div className="flex flex-col max-w-full text-white w-[526px]">
      <div className="flex flex-col max-w-full w-[433px]">
        <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-medium">
          <h2 className="self-stretch my-auto">Partner With Us</h2>
          <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-white w-[73px]" />
        </div>
        <h1 className="text-4xl font-bold max-md:max-w-full">
          BE A<span className=""> B</span>USINESS S <span className="italic ">O</span>LUTIONS PARTNER
        </h1>
      </div>
      <p className="mt-5 text-xl font-medium leading-8 max-md:max-w-full">
        Business Solutions Services is a program featuring private companies, government institutions, organizations, and individuals that offer services, solutions or products that help exporters meet their goals in all aspects of the business, from inception to operations.
      </p>
    </div>
  );
};

export default PartnerInfo;