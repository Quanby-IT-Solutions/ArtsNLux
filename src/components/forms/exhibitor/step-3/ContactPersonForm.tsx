// src/components/forms/exhibitor/step-3/ContactPersonForm.tsx

import Image from "next/image";

import { ExhibitorInfo } from "@/interfaces/exhibitor";

import InputField from "@/components/ui/InputField";
import CheckboxField from "@/components/ui/CheckboxField";

interface ContactPersonFormProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
}

const ContactPersonForm: React.FC<ContactPersonFormProps> = ({ data, updateData }) => {
  return (
    <form className="flex flex-col mt-8 w-full max-md:max-w-full">
      {/* Section Title */}
      <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <h3 className="self-stretch my-auto">Contact Person(s)</h3>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </div>

      {/* Helper Text */}
      <div className="mt-2.5 text-lg font-medium leading-7 text-stone-800 text-opacity-70 max-md:max-w-full">
        <span className="font-bold">PRIMARY CONTACT</span>
        <br />
        (CEO/Owner and/or must be a decision maker.)
      </div>

      {/* First Name Input */}
      <div className="flex flex-col mt-2.5 max-w-full w-[555px]">
        <InputField
          label="First Name"
          name="firstName"
          type="text"
          placeholder="First Name*"
          value={data.firstName || ""}
          onChange={(e) => updateData({ firstName: e.target.value })}
          required
        />
      </div>

      {/* Middle Initial Input */}
      <div className="flex flex-col mt-2.5 max-w-full w-[555px]">
        <InputField
          label="Middle Initial"
          name="middleInitial"
          type="text"
          placeholder="Middle Initial"
          value={data.middleInitial || ""}
          onChange={(e) => updateData({ middleInitial: e.target.value })}
        />
      </div>

      {/* Last Name Input */}
      <div className="flex flex-col mt-2.5 max-w-full w-[555px]">
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Last Name*"
          value={data.lastName || ""}
          onChange={(e) => updateData({ lastName: e.target.value })}
          required
        />
      </div>

      {/* Gender Selection */}
      <div className="flex flex-col mt-2.5 max-w-full w-[555px]">
        <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
            <label htmlFor="gender" className="sr-only">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full bg-transparent"
              value={data.gender || ""}
              onChange={(e) => updateData({ gender: e.target.value })}
            >
              <option value="">Gender*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3280131ff66335a1b935998099a98140ebb3bf335247a24a9ac8bb15822b6144?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
              alt="Dropdown Icon"
              width={24}
              height={24}
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </div>
      </div>

      {/* Designation Input */}
      <div className="flex flex-col mt-2.5 max-w-full w-[555px]">
        <InputField
          label="Designation"
          name="designation"
          type="text"
          placeholder="Designation*"
          value={data.designation || ""}
          onChange={(e) => updateData({ designation: e.target.value })}
          required
        />
      </div>

      {/* Mobile Number Input */}
      <div className="flex flex-col mt-2.5 max-w-full w-[555px]">
        <InputField
          label="Mobile Number"
          name="mobileNumber"
          type="tel"
          placeholder="Mobile Number*"
          value={data.mobileNumber || ""}
          onChange={(e) => updateData({ mobileNumber: e.target.value })}
          required
        />
      </div>

      {/* Apps Linked to Mobile Number Checkboxes */}
      <div className="flex flex-col self-stretch mt-6 w-full max-md:max-w-full">
        <div className="text-lg leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
          App/s linked to your mobile number
        </div>
        <div className="flex items-center mt-2.5 w-full text-sm font-medium leading-loose whitespace-nowrap text-zinc-600 max-md:max-w-full">
          <CheckboxField
            label="Viber"
            checked={data.viber || false}
            onChange={() => updateData({ viber: !data.viber })}
          />
          <CheckboxField
            label="WeChat"
            checked={data.weChat || false}
            onChange={() => updateData({ weChat: !data.weChat })}
          />
          <CheckboxField
            label="WhatsApp"
            checked={data.whatsApp || false}
            onChange={() => updateData({ whatsApp: !data.whatsApp })}
          />
        </div>
      </div>

      {/* Email Address Input */}
      <div className="flex flex-col mt-6 max-w-full w-[555px]">
        <InputField
          label="Email Address"
          name="emailAddress"
          type="email"
          placeholder="Email Address*"
          value={data.emailAddress || ""}
          onChange={(e) => updateData({ emailAddress: e.target.value })}
          required
        />
      </div>

      {/* Add Secondary Contact Button */}
      <div className="flex flex-col mt-6 w-full text-lg font-bold leading-loose text-white max-w-[555px] max-md:max-w-full">
        <button
          type="button"
          className="gap-2.5 self-stretch px-12 py-3.5 bg-stone-600 min-h-[53px] max-md:px-5"
        >
          ADD A SECONDARY CONTACT PERSON
        </button>
      </div>
    </form>
  );
};

export default ContactPersonForm;
