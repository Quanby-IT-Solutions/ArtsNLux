// src/components/forms/exhibitor/step-3/ContactForm.tsx

import { ExhibitorInfo } from "@/interfaces/exhibitor";

import InputField from "@/components/ui/InputField";

interface ContactFormProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ data, updateData }) => {
  return (
    <form className="flex flex-col w-full max-md:max-w-full">
      {/* Registered Company Name */}
      <div className="flex flex-col w-full mt-4">
        <InputField
          label="Registered Company Name"
          name="companyName"
          type="text"
          placeholder="Registered Company Name"
          value={data.companyName}
          onChange={(e) => updateData({ companyName: e.target.value })}
        />
      </div>

      {/* Company Email Address */}
      <div className="flex flex-col w-full mt-4">
        <InputField
          label="Company Email Address"
          name="companyEmail"
          type="email"
          placeholder="Company Email Address"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          helperText={[
            "Make sure you have access to this email address.",
            "All system-generated notifications will be sent to this email address.",
          ]}
        />
      </div>

      {/* Brand Name */}
      <div className="flex flex-col w-full mt-4">
        <InputField
          label="Brand Name"
          name="brandName"
          type="text"
          placeholder="Brand Name*"
          value={data.contactPerson} // Adjust to match the actual data property
          onChange={(e) => updateData({ contactPerson: e.target.value })}
          helperText={[
            "Enter your brand name here.",
            "If you don't have a brand name, enter your registered company name.",
          ]}
        />
      </div>

      {/* Telephone Number */}
      <div className="flex flex-col w-full mt-4">
        <InputField
          label="Telephone Number"
          name="telephone"
          type="tel"
          placeholder="Telephone Number*"
          value={data.phoneNumber}
          onChange={(e) => updateData({ phoneNumber: e.target.value })}
          helperText={["Write N/A if not Applicable."]}
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col w-full mt-4">
        <InputField
          label="Mobile Number"
          name="mobile"
          type="tel"
          placeholder="Mobile Number*"
          value={data.phoneNumber} // Adjust if you have a separate field for mobile
          onChange={(e) => updateData({ phoneNumber: e.target.value })}
        />
      </div>
    </form>
  );
};

export default ContactForm;
