// src/components/forms/exhibitor/step-6/ParticipationDetails.tsx

import { ExhibitorInfo } from "@/interfaces/exhibitor";

import ProgressBar from "@/components/ui/ProgressBar";
import InputField from "@/components/ui/InputField";
import RadioGroup from "@/components/ui/RadioGroup";
import SectionHeader from "@/components/ui/SectionHeader";
import FileUpload from "@/components/ui/FileUpload";
import NavigationButtons from "@/components/ui/NavigationButtons";
import BoothOption from "@/components/ui/BoothOption";

interface ParticipationDetailsProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const ParticipationDetails: React.FC<ParticipationDetailsProps> = ({
  data,
  updateData,
  handleNext,
  handlePrev,
}) => {
  return (
    <main className="flex flex-col">
      {/* Header and Progress Bar */}
      <section className="flex flex-col mt-24 max-w-full w-[433px] max-md:mt-10">
        <h2 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
          Participation Details
        </h2>
        <ProgressBar current={6} total={7} />
      </section>

      {/* Booth Options */}
      <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <BoothOption
            title="RAW SPACE ONLY"
            price="PHP 4,000.00"
            subscription="+ Php 30,000.00 FAME+ Subscription"
            description="No inclusions. Demarcation of space ONLY."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6c1ff50542fe9d162953d06704b9d5cee4890e0777b44d854fc20ff0c44ad5db?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
            isSelected={data.boothOption === "RAW SPACE ONLY"}
            onSelect={() => updateData({ boothOption: "RAW SPACE ONLY" })}
          />
          <BoothOption
            title="ALUMINUM BOOTH SYSTEM"
            price="PHP 4,900.00"
            subscription="+ Php 30,000.00 FAME+ Subscription"
            description="Inclusions"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ae0d7d81027310ae7cf67ae047e245cc7b3733f183ef6250802cd555086b68f6?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
            inclusions={[
              "9 sqm. - Dark Gray / Black Carpet",
              "1 lot - Structural Frame",
              "1 unit - Fascia Board with Company Name",
              "1 unit - Trash Bin",
              "1 unit - System Table",
              "2 units - Chair",
              "3 units - Shelving",
              "3 units - Light Bulb with Housing and Wiring",
            ]}
            isSelected={data.boothOption === "ALUMINUM BOOTH SYSTEM"}
            onSelect={() => updateData({ boothOption: "ALUMINUM BOOTH SYSTEM" })}
          />
        </div>
      </section>

      {/* PHILEXPORT Membership */}
      <section className="flex flex-col justify-center mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <SectionHeader title="PHILEXPORT Member" />
          <p className="mt-3 w-full font-medium leading-7 text-lg text-stone-600 max-md:max-w-full">
            PHILEXPORT members&apos; FAME+ subscription will be fully subsidized.
            Non-PHILEXPORT members are only entitled to 66.67% (Php 20,000.00)
            subsidy and will have to pay the remaining 33.33% (Php 10,000.00) of
            the subscription fee.
          </p>
          <RadioGroup
            title="PHILEXPORT Membership Status"
            options={["PHILEXPORT Member", "Not a member"]}
            selectedValue={data.philexportMembership || ""}
            onChange={(value) => updateData({ philexportMembership: value })}
          />
          <FileUpload
            title="PHILEXPORT Membership Document"
            description="Please provide related PHILEXPORT document to prove your membership."
            fileTypes=".doc, .docx, .pdf, .png, .jpg, and .jpeg"
            maxSize="2MB"
            multiple={false}
            onChange={(file) => {
              if (file && !Array.isArray(file)) {
                updateData({ philexportDocument: file });
              } else {
                console.error("Expected a single file, but got multiple or none.");
              }
            }}
          />
        </div>
      </section>

      {/* Manila FAME Details */}
      <section className="flex flex-col justify-center mt-40 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <SectionHeader title="Manila FAME" />
          <InputField
            label="Packaging Name"
            name="packagingName"
            type="text"
            placeholder="Please enter booth name"
            value={data.packagingName || ""}
            onChange={(e) => updateData({ packagingName: e.target.value })}
            required
          />

          <div className="flex flex-wrap gap-1.5 items-start mt-4 w-full font-medium leading-loose max-md:max-w-full">
            <label
              htmlFor="booth-size"
              className="overflow-hidden grow shrink px-6 py-3.5 min-w-[240px] w-[270px] max-md:px-5"
            >
              Booth size requirement:
            </label>
            <div className="flex overflow-hidden flex-col grow shrink justify-center px-6 py-3.5 whitespace-nowrap border border-solid border-stone-800 min-w-[240px] w-[698px] max-md:px-5 max-md:max-w-full">
              <select
                id="booth-size"
                className="w-full bg-transparent appearance-none"
                value={data.boothSize || ""}
                onChange={(e) => updateData({ boothSize: e.target.value })}
              >
                <option>Select</option>
                {/* Add booth size options here */}
              </select>
            </div>
          </div>

          <InputField
            label="Name to appear in event promotional materials*"
            name="boothName"
            type="text"
            placeholder="Enter booth name for promotional materials"
            value={data.boothName || ""}
            onChange={(e) => updateData({ boothName: e.target.value })}
            required
          />

          <div className="flex flex-wrap gap-1.5 justify-center items-center mt-4 w-full font-medium max-md:max-w-full">
            <label
              htmlFor="product-category"
              className="overflow-hidden grow shrink self-stretch px-6 py-3.5 my-auto leading-7 min-w-[240px] w-[270px] max-md:px-5"
            >
              Majority (&gt;80%) of products to be showcased in Manila FAME.
            </label>
            <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-6 py-3.5 my-auto leading-loose border border-solid border-stone-800 min-w-[240px] w-[698px] max-md:px-5 max-md:max-w-full">
              <select
                id="product-category"
                className="w-full bg-transparent appearance-none"
                value={data.productCategory || ""}
                onChange={(e) => updateData({ productCategory: e.target.value })}
              >
                <option>Pick product category</option>
                {/* Add product category options here */}
              </select>
            </div>
          </div>
        </div>
      </section>

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

export default ParticipationDetails;
