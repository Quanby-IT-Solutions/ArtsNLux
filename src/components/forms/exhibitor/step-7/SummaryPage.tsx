// src/components/forms/exhibitor/step-7/SummaryPage.tsx

import Image from "next/image";

import { InfoRow } from "@/components/ui/InfoRow";
import { ExhibitorInfo } from "@/interfaces/exhibitor";

import NavigationButtons from "@/components/ui/NavigationButtons";
import ProgressBar from "@/components/ui/ProgressBar";
import SectionHeader from "@/components/ui/SectionHeader";

interface SummaryPageProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
  handlePrev: () => void;
  handleSubmit: () => void;
}

const SummaryPage: React.FC<SummaryPageProps> = ({
  data,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <main className="flex flex-col">

      {/* Progress Bar */}
      <section className="flex flex-col mt-24 max-w-full w-[433px] max-md:mt-10">
        <h2 className="w-full text-4xl font-bold whitespace-nowrap rounded-none text-stone-800 max-md:pr-5">
          Summary
        </h2>
        <ProgressBar current={7} total={7} />
      </section>

      <div className="mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <SectionHeader title="Manila FAME" />

            {/* Dynamic Info Rows */}
            <InfoRow label="Registered Company Name:" value={data.companyName || "N/A"} />
            <InfoRow label="Company Email Address:" value={data.emailAddress || "N/A"} />
            <InfoRow label="Username:" value={data.username || "N/A"} />
            <InfoRow label="Business Registered in the Philippines:" value={data.businessRegisteredInPhilippines ? "YES" : "NO"} />
            <InfoRow label="Past Participation in Manila FAME Editions:" value={data.pastParticipation ? "YES" : "NO"} />

            <SectionHeader title="Contact Details" />
            <h3 className="font-medium max-md:max-w-full">Business Information</h3>
            <InfoRow label="Telephone Number (Landline):" value={data.phoneNumber || "N/A"} />
            <InfoRow label="Mobile Number:" value={data.mobileNumber || "N/A"} />
            <InfoRow label="Office Address:" value={data.officeAddress || "N/A"} />
            <InfoRow label="Factory Address:" value={data.factoryAddress || "N/A"} />

            <h3 className="font-medium max-md:max-w-full">Online and Social Media Presence</h3>
            <InfoRow label="Website:" value={data.website || "N/A"} />
            <InfoRow label="Facebook:" value={data.facebook || "N/A"} />
            <InfoRow label="Instagram:" value={data.instagram || "N/A"} />
            <InfoRow label="X:" value={data.twitter || "N/A"} />
            <InfoRow label="LinkedIn:" value={data.linkedin || "N/A"} />
            <InfoRow label="International Online Directory:" value={data.directory || "N/A"} />

            <h3 className="font-medium max-md:max-w-full">Contact Person(s)</h3>
            <InfoRow label="Name: (Primary)" value={data.contactPerson || "N/A"} />
            <InfoRow label="Designation:" value={data.designation || "N/A"} />
            <InfoRow label="Email Address:" value={data.email || "N/A"} />
            <InfoRow label="Mobile Number:" value={data.mobileNumber || "N/A"} />
            <InfoRow label="App/s Linked to Mobile Number:" value={data.mobileAppsLinked ? "YES" : "NO"} />

            <SectionHeader title="Business Information" />
            <h3 className="font-medium max-md:max-w-full">Business Registration</h3>
            <InfoRow label="Year Established:" value={data.yearEstablished || "N/A"} />
            <InfoRow label="Validity of Business/Mayor's Permit:" value={data.businessPermitValidity || "N/A"} />
            <InfoRow label="Industry Affiliations:" value={data.industryAffiliation || "N/A"} />

            {/* Number of Workers */}
            <h4 className="font-bold px-8 py-3.5 min-w-[240px] w-[399px] max-md:px-5">Number of Workers</h4>
            <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
              <InfoRow label="Direct Workers:" value={data.directWorkers || "N/A"} />
              <InfoRow label="Indirect Workers:" value={data.indirectWorkers || "N/A"} />
            </div>

            <SectionHeader title="Uploaded Documents" />
            <InfoRow label="For PHILEXPORT Members:" value={data.philexportMember ? "YES" : "NO"} />
            <InfoRow label="Financial Statement:" value={data.financialStatement ? "Uploaded" : "Not Uploaded"} />
            <InfoRow label="Mayor's / Business Permit:" value={data.mayorPermit ? "Uploaded" : "Not Uploaded"} />
            <InfoRow label="Brand Story / Write-up:" value={data.brandStoryWriteup ? "Uploaded" : "Not Provided"} />
            <InfoRow label="Product Photos:" value={data.productPhotos && data.productPhotos.length > 0 ? "Uploaded" : "Not Uploaded"} />

            {/* Physical Participation Section */}
            <SectionHeader title="Physical Participation" />
            <InfoRow label="Participating in:" value={data.participatingIn || "N/A"} />
            <InfoRow label="Participating as:" value={data.participatingAs || "N/A"} />
            <InfoRow label="Participation Package:" value={data.participationPackage || "N/A"} />
            <InfoRow label="Booth Size Requirements:" value={data.boothSizeRequirement || "N/A"} />
            <InfoRow label="Space / Booth Cost:" value={data.spaceBoothCost || "N/A"} />
            <InfoRow label="FAME+ Subscription Fee:" value={data.fameSubscriptionFee || "N/A"} />
            <InfoRow label="Participation Package Cost Estimate:" value={data.packageCostEstimate || "N/A"} />
            <InfoRow label="Name to be used in event promotional materials and will appear in fascia board:" value={data.promotionalName || "N/A"} />
            <InfoRow label="Majority (>80%) of products to be showcased in Manila FAME+:" value={data.majorityProductsShowcased || "N/A"} />

            {/* Navigation Buttons */}
            <NavigationButtons
              handlePrev={handlePrev}
              handleNext={handleSubmit}
              isSubmit={true}
              showPrev={true}
              showNext={true}
            />
          </div>

          {/* Right Column - Decorative Images */}
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/022fbe28f0cafc061dfeefcdc5c07c6c573948f7068a105b60435c27ad1ba286?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                className="object-contain w-full aspect-[0.31] max-md:max-w-full"
                alt="Decorative image 1"
                width={500}
                height={155}
              />
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e0658404f76e765b177f586cdc3f774b7da6f079eb88a6ad96734175e648531?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                className="object-contain mt-9 w-full aspect-[0.75] max-md:max-w-full"
                alt="Decorative image 2"
                width={500}
                height={375}
              />
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/334cf0e5514a824359f3b08eec020004acf845ebba50ca81acb25b257bc5b271?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                className="object-contain mt-10 w-full aspect-[0.51] max-md:max-w-full"
                alt="Decorative image 3"
                width={500}
                height={255}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SummaryPage;
