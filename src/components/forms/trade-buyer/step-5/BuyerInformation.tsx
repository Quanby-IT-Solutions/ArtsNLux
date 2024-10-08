// src/components/forms/trade-buyer/step-5/BuyerInformation.tsx

import Image from 'next/image';

import { InfoSection } from "@/components/forms/trade-buyer/step-5/InfoSection";
import { CompanyDetails } from "@/components/forms/trade-buyer/step-5/CompanyDetails";
import { BusinessInfo, BuyerInfo } from '@/interfaces/trade-buyer';
import NavigationButtons from '../../../ui/NavigationButtons';

interface BuyerInformationProps {
  buyerInfo: BuyerInfo;
  companyDetails: BusinessInfo;
  handlePrev: () => void;
  handleSubmit: () => void;
}

export const BuyerInformation: React.FC<BuyerInformationProps> = ({
  buyerInfo,
  companyDetails,
  handlePrev,
  handleSubmit,
}) => {
  const formattedBuyerInfo = {
    salutation: buyerInfo.salutation,
    firstName: buyerInfo.firstName,
    lastName: buyerInfo.lastName,
    country: buyerInfo.country,
    emailAddress: buyerInfo.emailAddress,
    companyName: buyerInfo.companyName,
    designation: buyerInfo.designation,
    website: buyerInfo.website,
  };

  return (
    <main className="flex gap-5 max-md:flex-col">
      <section className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center items-end w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center self-stretch w-full max-md:max-w-full">
            <InfoSection title="Buyer Information" info={formattedBuyerInfo} />
            <CompanyDetails details={{ ...companyDetails, marketSegment: companyDetails.marketSegment }} />
          </div>
        </div>
      </section>
      <aside className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4c1c3995d09952e98ed6f225208b7628abd19eb6a5199c60a092d67c97d24f?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
          alt="Buyer Information Illustration"
          className="object-contain grow w-full aspect-[0.44] max-md:mt-10 max-md:max-w-full"
          layout="responsive"
          width={700}
          height={300}
          loading="lazy"
          quality={100}
        />
      </aside>

      {/* Navigation Buttons */}
      <NavigationButtons
        handlePrev={handlePrev}
        handleNext={handleSubmit}
        showPrev={true}
        showNext={true}
        isSubmit={true}
      />
    </main>
  );
};

export default BuyerInformation;
