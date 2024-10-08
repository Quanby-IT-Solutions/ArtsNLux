// src/components/forms/trade-buyer/step-2/CompanyDetails.tsx

import { BusinessInfo } from "@/interfaces/trade-buyer";
import InputField from "@/components/ui/InputField";
import RadioField from "@/components/ui/RadioField";

interface CompanyDetailsProps {
  data: BusinessInfo;
  updateData: (data: Partial<BusinessInfo>) => void;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ data, updateData }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateData({ [name]: value });
  };

  const handleRadioChange = (value: string) => {
    updateData({ purchasingRole: value });
  };

  return (
    <div className="flex flex-col max-w-full font-medium text-stone-800 text-opacity-70 w-[518px]">
      <h2 className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <span className="self-stretch my-auto">Business Information</span>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </h2>

      <div className="flex flex-col items-start mt-4 w-full text-lg leading-loose max-md:max-w-full">
        <InputField
          label="Office Address*"
          name="officeAddress"
          placeholder="Office Address"
          value={data.officeAddress}
          onChange={handleInputChange}
        />
        <InputField
          label="Contact Number"
          name="contactNumber"
          type="tel"
          placeholder="Contact Number"
          value={data.contactNumber}
          onChange={handleInputChange}
        />
      </div>

      <fieldset className="flex flex-col mt-4 w-full max-md:max-w-full">
        <legend className="text-lg leading-loose max-md:max-w-full">
          Role in the Company&apos;s Purchasing Activity*
        </legend>
        <RadioField
          name="purchasingRole"
          options={["Decision Maker", "Recommendatory", "Others"]}
          selectedValue={data.purchasingRole}
          onChange={handleRadioChange}
        />
      </fieldset>
    </div>
  );
};

export default CompanyDetails;
