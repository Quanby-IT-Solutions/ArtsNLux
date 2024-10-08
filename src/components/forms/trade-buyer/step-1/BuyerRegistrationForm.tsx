// src/components/forms/trade-buyer/step-1/BuyerRegistrationForm.tsx

import ProgressBar from "../../../ui/ProgressBar";
import { BuyerInfo } from '@/interfaces/trade-buyer';
import ManilaFameSection from './ManilaFameSection';
import BuyerInformationSection from './BuyerInformationSection';
import AdditionalInformationSection from './AdditionalInformationSection';
import TermsAndAgreementsSection from './TermsAndAgreementsSection';
import PromotionalImages from './PromotionalImages';
import NavigationButtons from "@/components/ui/NavigationButtons";

interface BuyerRegistrationFormProps {
  data: BuyerInfo;
  updateData: (data: Partial<BuyerInfo>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const BuyerRegistrationForm: React.FC<BuyerRegistrationFormProps> = ({ data, updateData, handleNext, handlePrev }) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <main className="overflow-hidden mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center w-full max-md:mt-10 max-md:max-w-full">
              <h2 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
                Account Registration
              </h2>

              <ProgressBar current={1} total={5} />

              <ManilaFameSection data={data} updateData={updateData} />
              <BuyerInformationSection data={data} updateData={updateData} />
              <AdditionalInformationSection data={data} updateData={updateData} />
              <TermsAndAgreementsSection data={data} updateData={updateData} />
            </div>
          </section>

          <PromotionalImages />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-8">
          <NavigationButtons
            handlePrev={handlePrev}
            handleNext={handleNext}
            isSubmit={false}
            showPrev={false}
          />
        </div>
      </main>
    </div>
  );
};

export default BuyerRegistrationForm;
