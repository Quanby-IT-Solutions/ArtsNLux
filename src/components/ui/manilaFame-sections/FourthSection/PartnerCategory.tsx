import React from 'react';

type PartnerCategoryProps = {
  title: string;
  partners: { imgSrc: string; imgAlt: string; imgClass: string }[];
};

const PartnerCategory: React.FC<PartnerCategoryProps> = ({ title, partners }) => {
  return (
    <section className="flex flex-col justify-center mt-48 w-full max-md:mt-10 max-md:max-w-full">
      <div className="text-3xl font-bold text-center text-stone-800">{title}</div>
      <div className="flex flex-wrap gap-7 items-start mt-7 max-md:max-w-full">
        {partners.map((partner, index) => (
          <img
            key={index}
            loading="lazy"
            src={partner.imgSrc}
            alt={partner.imgAlt}
            className={`object-contain shrink-0 ${partner.imgClass}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnerCategory;