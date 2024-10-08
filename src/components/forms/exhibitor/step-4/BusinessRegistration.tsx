// src/components/forms/exhibitor/step-4/BusinessRegistration.tsx

import Image from "next/image";

import ProgressBar from "@/components/ui/ProgressBar";
import CheckboxGroup from "@/components/ui/CheckboxGroup";
import InputField from "@/components/ui/InputField";
import RadioGroup from "@/components/ui/RadioGroup";
import { ExhibitorInfo } from "@/interfaces/exhibitor";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionHeader from "@/components/ui/SectionHeader";
import FileUpload from "@/components/ui/FileUpload";
import NavigationButtons from "@/components/ui/NavigationButtons";

interface BusinessRegistrationProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const BusinessRegistration: React.FC<BusinessRegistrationProps> = ({
  data,
  updateData,
  handleNext,
  handlePrev,
}) => {
  // Handler for updating financial statement file
  const handleFinancialStatementChange = (file: File | File[] | null) => {
    if (Array.isArray(file)) {
      updateData({ financialStatement: file[0] || null }); 
    } else {
      updateData({ financialStatement: file });
    }
  };

  return (
    <main className="flex overflow-hidden flex-col">
      {/* Header and Progress Bar */}
      <section className="flex flex-col justify-center mt-24 max-w-full w-[555px] max-md:mt-10">
        <h2 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
          Business Information
        </h2>
        <ProgressBar current={4} total={7} />
      </section>

      {/* Business Information Image */}
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30eed9d260c55c8336e0cc4785163cc4ec8f01c1ad05d483d1f58825ce254a3e?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
        alt="Business Information Illustration"
        width={1130}
        height={320}
        className="object-contain mt-8 w-full aspect-[3.46] max-md:max-w-full"
      />

      {/* Business Information Form */}
      <div className="mt-24 w-full max-w-[1130px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Column */}
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <SectionHeader title="Business Registration" />

            <InputField
              label="Year Established*"
              name="yearEstablished"
              type="text"
              placeholder="Year Established*"
              value={data.yearEstablished || ""}
              onChange={(e) => updateData({ yearEstablished: e.target.value })}
              required
            />

            <InputField
              label="Validity of Business / Mayor's Permit*"
              name="businessPermitValidity"
              type="text"
              placeholder="Validity of Business / Mayor's Permit*"
              value={data.businessPermitValidity || ""}
              onChange={(e) =>
                updateData({ businessPermitValidity: e.target.value })
              }
              required
            />

            <InputField
              label="Industry Affiliation / Business Support Organization"
              name="industryAffiliation"
              type="text"
              placeholder="Industry Affiliation / Business Support Organization"
              value={data.industryAffiliation || ""}
              onChange={(e) =>
                updateData({ industryAffiliation: e.target.value })
              }
            />

            <InputField
              label="Mobile Number*"
              name="businessMobile"
              type="tel"
              placeholder="Mobile Number*"
              value={data.businessMobile || ""}
              onChange={(e) => updateData({ businessMobile: e.target.value })}
              required
            />

            <RadioGroup
              title="COMPANY SIZE"
              description="Total company assets in Philippine Peso."
              options={[
                "Micro (Php 3M and Below)",
                "Small (Php 3M - 15M)",
                "Medium (PhP 15M - 100M)",
                "Large (Above Php100M)",
              ]}
              selectedValue={data.companySize || ""}
              onChange={(value) => updateData({ companySize: value })}
            />

            <FileUpload
              title="Financial Statement"
              description="If available, please provide your company's latest financial statement for validation purposes"
              fileTypes=".doc, .docx, .pdf, .png, .jpg, and .jpeg"
              maxSize="2MB"
              onChange={handleFinancialStatementChange}
            />

            {/* Number of Workers */}
            <div className="flex flex-col mt-4 w-full text-lg text-stone-800 text-opacity-70 max-md:max-w-full">
              <div className="font-bold leading-7 max-md:max-w-full">
                NUMBER OF WORKERS <br />
                <span className="">
                  Input numbers must be lower than one (1).
                </span>
              </div>
              <div className="flex flex-wrap gap-4 items-start mt-1.5 font-medium leading-loose max-md:max-w-full">
                <InputField
                  label="Direct Workers*"
                  name="directWorkers"
                  type="text"
                  placeholder="Direct Workers*"
                  value={data.directWorkers || ""}
                  onChange={(e) => updateData({ directWorkers: e.target.value })}
                  required
                />
                <InputField
                  label="Indirect Workers / Subcontractors"
                  name="indirectWorkers"
                  type="text"
                  placeholder="Indirect Workers / Subcontractors"
                  value={data.indirectWorkers || ""}
                  onChange={(e) =>
                    updateData({ indirectWorkers: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Industry Representation */}
            <SectionTitle title="Industry Representation" />
            <RadioGroup
              title="Type of Organization / Representation*"
              options={[
                "Single Proprietorship",
                "Corporation",
                "Government",
                "Non-Government Organization",
                "Trade Promotion Office / Embassy",
                "School / University / Academe",
                "Partnership",
                "Foundation / Cooperative",
                "Limited Liability Corporation (LLC)",
                "One Person Corporation (OPC)",
                "Independent Designer / Artist",
                "Allied Industry / Service Supplier",
              ]}
              selectedValue={data.organizationType || ""}
              onChange={(value) => updateData({ organizationType: value })}
            />

            {/* Nature of Business */}
            <RadioGroup
              title="Nature of Business*"
              options={[
                "Manufacturing - Direct Exporter",
                "Manufacturing - Indirect Exporter",
                "Trading",
                "Trade Association / Business Support Organization",
                "Others",
              ]}
              selectedValue={data.natureOfBusiness || ""}
              onChange={(value) => updateData({ natureOfBusiness: value })}
            />

            {/* Trade Experience */}
            <RadioGroup
              title="Trade Experience*"
              description="Do you have export experience (direct/indirect)?"
              options={["Yes", "No"]}
              selectedValue={data.tradeExperience || ""}
              onChange={(value) => updateData({ tradeExperience: value })}
            />

            <InputField
              label="Please indicate the top country or countries you export to."
              name="exportCountries"
              type="text"
              placeholder="Export Countries"
              value={data.exportCountries || ""}
              onChange={(e) => updateData({ exportCountries: e.target.value })}
            />

            {/* Types of Orders Accepted */}
            <CheckboxGroup
              title="Types of Orders Accepted*"
              description="You may select multiple answers if applicable."
              options={[
                "Export - small quantity",
                "Export - large volume",
                "Domestic - small quantity",
                "Domestic - large volume",
                "Retail - domestic shipping",
                "Retail - international shipping",
              ]}
              selectedValues={data.orderTypes || []}
              onChange={(selected) => updateData({ orderTypes: selected })}
            />

            {/* Market Segment */}
            <RadioGroup
              title="Market Segment*"
              description="You may select multiple answers if applicable."
              options={[
                "Exclusively high-end market",
                "Exclusively low-end market",
                "Middle to high-end market",
                "Middle to low-end market",
              ]}
              selectedValue={data.marketSegment || ""}
              onChange={(value) => updateData({ marketSegment: value })}
            />
          </div>

          {/* Right Column - Product Category */}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <SectionTitle title="Product Category" />
            <p className="mt-2.5 text-lg font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
              Please choose at least one.
            </p>

            {/* Product Categories */}
            <CheckboxGroup
              title="Home Decor & Houseware"
              options={[
                "Art Installation",
                "Sculptures",
                "Painting",
                "Wall Art",
                "Architectural Fittings",
                "Baskets & Storage",
                "Candleholders",
                "Decorative Boxes",
                "Decorative Figurines",
                "Garden & Outdoor Accessories",
                "Home Textiles",
                "Jars & Vases",
                "Kitchenware",
                "Mirrors & Mirror Frames",
                "Pet Furniture",
                "Rugs and Carpets",
                "Tabletop Decor",
                "Tableware",
                "Wall Decor & Decorative Panels",
                "Wall Covers & Cladding",
                "Window Blinds",
                "Other Home Decor",
              ]}
              selectedValues={data.homeDecorCategories || []}
              onChange={(selected) => updateData({ homeDecorCategories: selected })}
            />
            {/* Add more CheckboxGroups for other categories similar to above */}
          </div>
        </div>
      </div>

      {/* Navigation buttons with scroll functionality */}
      <NavigationButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        isSubmit={false}
        showPrev={true}
        showNext={true}
      />
    </main>
  );
};

export default BusinessRegistration;
