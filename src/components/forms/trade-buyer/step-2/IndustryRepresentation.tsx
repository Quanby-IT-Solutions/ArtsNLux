// src/components/forms/trade-buyer/step-2/IndustryRepresentation.tsx

import CheckboxField from "@/components/ui/CheckboxField";
import RadioField from "@/components/ui/RadioField";

interface IndustryRepresentationProps {
  data: {
    businessNature: string;
    marketSegment: string[];
    salesVolume: string;
  };
  updateData: (data: Partial<{ businessNature: string; marketSegment: string[]; salesVolume: string; }>) => void;
}

const IndustryRepresentation: React.FC<IndustryRepresentationProps> = ({ data, updateData }) => {
  const businessNatures = [
    "Wholesaler",
    "Retailer",
    "Distributor",
    "Buying Agent",
    "E-commerce",
    "Specifier",
    "HoReCa",
    "Others, specify",
  ];

  const marketSegments = [
    "Exclusively high-end market",
    "Middle to high-end market​",
    "Middle to low-end market​",
    "Exclusively low-end market​",
    "Hospitality/Leisure/Contract market",
    "Mass Market​",
  ];

  const salesVolumes = [
    "More than USD 10 million",
    "USD 5,000,001 - USD 10 million",
    "USD 1,000,001 - USD 5 million",
    "USD 500,001 - USD 1 million",
    "USD 500,000 and below",
  ];

  const handleMarketSegmentChange = (segment: string) => {
    const newSegments = data.marketSegment.includes(segment)
      ? data.marketSegment.filter((item) => item !== segment)
      : [...data.marketSegment, segment];
    updateData({ marketSegment: newSegments });
  };

  return (
    <section className="flex flex-col mt-8 w-full max-md:max-w-full">
      <h2 className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <span className="self-stretch my-auto">Industry Representation</span>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </h2>
      <div className="flex flex-col mt-2.5 w-full font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
        {/* Nature of Business */}
        <fieldset>
          <legend className="text-lg leading-loose max-md:max-w-full">Nature of Business*</legend>
          <RadioField
            name="businessNature"
            options={businessNatures}
            selectedValue={data.businessNature}
            onChange={(value) => updateData({ businessNature: value })}
          />
        </fieldset>

        {/* Market Segment */}
        <fieldset className="flex flex-col mt-2.5 w-full max-md:max-w-full">
          <legend className="text-lg font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
            Market Segment*
          </legend>
          <div className="flex flex-col px-8 mt-1.5 max-w-full w-[533px] max-md:px-5">
            {marketSegments.map((segment) => (
              <CheckboxField
                key={segment}
                label={segment}
                checked={data.marketSegment.includes(segment)}
                onChange={() => handleMarketSegmentChange(segment)}
              />
            ))}
          </div>
        </fieldset>

        {/* Annual Sales Volume */}
        <fieldset className="flex flex-col mt-2.5 w-full font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
          <legend className="text-lg leading-loose max-md:max-w-full">Annual Sales Volume*</legend>
          <RadioField
            name="salesVolume"
            options={salesVolumes}
            selectedValue={data.salesVolume}
            onChange={(value) => updateData({ salesVolume: value })}
          />
        </fieldset>
      </div>
    </section>
  );
};

export default IndustryRepresentation;
