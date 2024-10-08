// src/components/forms/exhibitor/step-3/ContactDetails.tsx

import Image from 'next/image';

import ContactForm from "./ContactForm";
import AddressForm from "./AddressForm";
import SocialMediaForm from "./SocialMediaForm";

import ContactPersonForm from "./ContactPersonForm";
import NavigationButtons from "@/components/ui/NavigationButtons";
import ProgressBar from "@/components/ui/ProgressBar";
import { ExhibitorInfo } from "@/interfaces/exhibitor";

interface ContactDetailsProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  data,
  updateData,
  handleNext,
  handlePrev,
}) => {
  return (
    <main className="flex flex-col items-start pr-20 max-md:pr-5">
      <ProgressBar current={3} total={7} />
      <div className="mt-8 w-full max-w-[1275px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fcd7f9d9d0b8cf55364b6a9f0a76e739074fd6c9659e5a0b168c88f5b805498?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                alt="Exhibitor Registration Illustration 1"
                width={700}
                height={1058}
                className="object-contain w-full aspect-[0.66] max-md:max-w-full"
              />
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1824a12dea8786d3ea806b1f8647bde06542552088e8e009c0ad0ba49a279a0d?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                alt="Exhibitor Registration Illustration 2"
                width={700}  // Provide appropriate width
                height={273}  // Provide appropriate height
                className="object-contain mt-12 w-full aspect-[0.39] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </aside>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center w-full max-md:mt-10 max-md:max-w-full">
              <ContactForm data={data} updateData={updateData} />
              <AddressForm title="Office Address" data={data} updateData={updateData} />
              <AddressForm title="Factory Address" data={data} updateData={updateData} />
              <SocialMediaForm data={data} updateData={updateData} />
              <ContactPersonForm data={data} updateData={updateData} />
              {/* Navigation buttons with scroll functionality */}
              <NavigationButtons
                handlePrev={handlePrev}
                handleNext={handleNext}
                isSubmit={false}
                showPrev={true}
                showNext={true}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactDetails;
