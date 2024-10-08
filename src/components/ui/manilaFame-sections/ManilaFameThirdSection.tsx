import React from 'react';
import PartnerInfo from '@/components/manila-fame/PartnerInfo';
import EmailForm from '@/components/manila-fame/EmailForm';
import BenefitsList from '@/components/manila-fame/BenefitsList';

interface ManilaFameThirdSectionProps {}

const ManilaFameThirdSection: React.FC<ManilaFameThirdSectionProps> = () => {
  return (
    // Remove max-w and mx-auto to allow full-width background
    <main className="w-full flex flex-col justify-center items-center py-14 my-12 bg-secondary-1 px-40 max-md:px-5">
      {/* Center Container with 1 Row and 2 Columns */}
      <div className="flex flex-wrap justify-center items-start w-full max-w-[1440px] gap-10 max-md:flex-col">
        {/* Left Section */}
        <section className="flex flex-col w-full max-w-[600px] min-w-[300px]">
          <PartnerInfo />
          <EmailForm />
        </section>
        {/* Right Section */}
        <section className="flex flex-col w-full max-w-[400px] min-w-[300px]">
          <BenefitsList />
        </section>
      </div>
    </main>
  );
};

export default ManilaFameThirdSection;
