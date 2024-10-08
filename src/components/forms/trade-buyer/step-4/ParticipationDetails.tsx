// src/components/forms/trade-buyer/step-4/ParticipationDetails.tsx

import Image from 'next/image';
import ProgressBar from "../../../ui/ProgressBar";
import { ParticipationDetails } from "@/interfaces/trade-buyer";
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import RadioGroup from '@/components/ui/RadioGroup';
import NavigationButtons from '../../../ui/NavigationButtons';

interface ParticipationDetailsProps {
  data: ParticipationDetails;
  updateData: (data: Partial<ParticipationDetails>) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

const ParticipationDetailsForm: React.FC<ParticipationDetailsProps> = ({ data, updateData, handlePrev, handleNext }) => {
  const handleCheckboxGroupChange = (key: keyof ParticipationDetails, value: string[]) => {
    updateData({ [key]: value });
  };

  const handleRadioGroupChange = (key: keyof ParticipationDetails, value: string) => {
    updateData({ [key]: value });
  };

  return (
    <div className="overflow-hidden max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-end max-w-full w-[433px]">
              <h1 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
                Participation Details
              </h1>
              <ProgressBar current={4} total={5} />
            </div>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a675e6ef8838f16d0982f3601262699bcd0e5768e16b6e1bd2032e07a08c36c?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
              alt="Participation details illustration"
              className="object-contain mt-8 max-w-full aspect-[1.53] w-[563px]"
              layout="responsive"
              width={700}
              height={600}
              quality={100}
            />
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da7fe65d90136c5d0cffa786a23d8fb731c6ad20325b2d12b06707f2f4bc389?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
              alt="Additional participation details"
              className="object-contain mt-5 max-w-full aspect-[1.69] w-[563px]"
              layout="responsive"
              width={700}
              height={600}
              quality={100}
            />
          </div>
        </section>
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center mt-36 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <CheckboxGroup
                title="Reasons for Registering"
                options={[
                  "Meet Existing suppliers",
                  "Meet new suppliers",
                  "Make a purchase / place orders",
                  "Seek new products",
                  { label: "Others, please specify:", hasInput: true },
                ]}
                selectedValues={data.reasonsForRegistering}
                onChange={(values) => handleCheckboxGroupChange('reasonsForRegistering', values)}
              />
              <CheckboxGroup
                title="How Did You Learn About Fame+"
                options={[
                  "Internet search",
                  "Government websites (Philippine embassy, DTI, consulates, PTICs, etc.)",
                  "Business Associates / Friends",
                  {
                    label: "International Trade Fairs, please specify:",
                    hasInput: true,
                  },
                ]}
                selectedValues={data.howDidYouLearn}
                onChange={(values) => handleCheckboxGroupChange('howDidYouLearn', values)}
              />
              <div className="flex flex-col pl-8 mt-2.5 w-full max-md:pl-5 max-md:max-w-full">
                <h3 className="text-lg font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
                  Social Media
                </h3>
                <CheckboxGroup
                  options={[
                    "Facebook",
                    "X",
                    "Instagram",
                    { label: "Others, please specify:", hasInput: true },
                  ]}
                  selectedValues={data.socialMedia}
                  onChange={(values) => handleCheckboxGroupChange('socialMedia', values)}
                />
              </div>
              <RadioGroup
                title="Have You Attended Any Manila Fame Editions?"
                options={["Yes", "No"]}
                selectedValue={data.attendedPreviousEditions}
                onChange={(value) => handleRadioGroupChange('attendedPreviousEditions', value)}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        showPrev={true}
        showNext={true}
      />
    </div>
  );
};

export default ParticipationDetailsForm;
