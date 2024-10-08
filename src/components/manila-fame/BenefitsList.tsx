import React from 'react';

interface BenefitsListProps {}

const BenefitsList: React.FC<BenefitsListProps> = () => {
  const benefits = [
    "Get to know more exporters or MSMEs through our platform",
    "Get the opportunity to support MSMEs to become full-fledged exporters",
    "Explore other opportunities offered to partners"
  ];

  return (
    <aside className="flex flex-col justify-center px-12 py-14 text-xl bg-stone-800 min-h-[421px] min-w-[240px] w-[479px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[382px]">
        <ul className="font-medium text-white">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-4">✓ {benefit}</li>
          ))}
        </ul>
        <button className="gap-2.5 self-stretch px-14 py-6 mt-11 w-full font-bold text-center text-white bg-darkolivegreen min-h-[72px] max-md:px-5 max-md:mt-10">
          + Learn More +
        </button>
      </div>
    </aside>
  );
};

export default BenefitsList;