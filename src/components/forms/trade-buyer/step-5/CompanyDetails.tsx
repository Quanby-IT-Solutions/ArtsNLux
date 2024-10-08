// src/components/forms/trade-buyer/step-5/CompanyDetails.tsx

interface CompanyDetailsProps {
  details: {
    officeAddress: string;
    contactNumber: string;
    purchasingRole: string;
    natureOfBusiness: string;
    marketSegment: string[];
    annualSalesVolume: string;
    supplierName: string;
  };
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ details }) => {
  const sections = [
    {
      title: "Business Information",
      fields: ["officeAddress", "contactNumber", "purchasingRole"],
    },
    {
      title: "Industry Representation",
      fields: ["natureOfBusiness", "marketSegment", "annualSalesVolume"],
    },
    { title: "Supplier Information", fields: ["supplierName"] },
  ];

  return (
    <section className="flex flex-col mt-11 max-w-full text-lg text-stone-800 text-opacity-70 w-[723px] max-md:mt-10">
      <div className="flex flex-col w-full text-xl font-bold text-stone-800 max-md:max-w-full">
        <div className="flex flex-col items-start w-full min-h-[30px] max-md:max-w-full">
          <div className="flex overflow-hidden gap-4 items-center">
            <h2 className="self-stretch my-auto">Company Details</h2>
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
          </div>
        </div>
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col mt-2.5 w-full leading-loose max-md:max-w-full"
        >
          <h3 className="font-medium max-md:max-w-full">{section.title}</h3>
          <div className="flex flex-col w-full max-md:max-w-full">
            {section.fields.map((field) => (
              <div
                key={field}
                className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full"
              >
                <div className="overflow-hidden grow shrink px-8 py-3.5 font-bold min-w-[240px] w-[344px] max-md:px-5">
                  {field.replace(/([A-Z])/g, " $1").trim()}:
                </div>
                <div className="overflow-hidden grow shrink py-3.5 min-w-[240px] w-[219px]">
                  {Array.isArray(details[field as keyof typeof details])
                    // Check if it's an array
                    ? (details[field as keyof typeof details] as string[]).join(", ")
                    // Convert array to a string
                    : details[field as keyof typeof details]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
