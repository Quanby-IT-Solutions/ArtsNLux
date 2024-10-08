// src/components/forms/exhibitor/step-3/SocialMediaForm.tsx

import { ExhibitorInfo } from "@/interfaces/exhibitor";

import InputField from "@/components/ui/InputField";
interface SocialMediaFormProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
}

const SocialMediaForm: React.FC<SocialMediaFormProps> = ({ data, updateData }) => {
  return (
    <form className="flex flex-col mt-8 w-full text-lg max-md:max-w-full">
      {/* Section Title */}
      <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <h3 className="self-stretch my-auto">Online and Social Media Presence</h3>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </div>

      {/* Helper Text */}
      <div className="mt-2.5 font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
        Write N/A to fields that are not available.
      </div>

      {/* Social Media Input Fields */}
      <div className="flex overflow-hidden flex-wrap gap-6 py-px mt-2.5 w-full leading-loose border border-solid border-stone-800 max-md:max-w-full">
        <div className="overflow-hidden gap-2.5 self-stretch px-4 py-3 font-bold text-white whitespace-nowrap bg-stone-600">
          www.facebook.com/
        </div>
        <InputField
          label="Company Facebook"
          name="facebook"
          type="text"
          placeholder="Company Facebook"
          value={data.facebook || ""}
          onChange={(e) => updateData({ facebook: e.target.value })}
          required={false}
        />
      </div>

      <div className="flex overflow-hidden flex-wrap gap-7 py-px mt-2.5 w-full leading-loose border border-solid border-stone-800 max-md:max-w-full">
        <div className="overflow-hidden gap-2.5 self-stretch py-3 pr-3 pl-3 font-bold text-white whitespace-nowrap bg-stone-600">
          www.instagram.com/
        </div>
        <InputField
          label="Company Instagram"
          name="instagram"
          type="text"
          placeholder="Company Instagram"
          value={data.instagram || ""}
          onChange={(e) => updateData({ instagram: e.target.value })}
          required={false}
        />
      </div>

      <div className="flex overflow-hidden flex-wrap gap-6 py-px mt-2.5 w-full leading-loose border border-solid border-stone-800 max-md:max-w-full">
        <div className="overflow-hidden gap-2.5 self-stretch px-4 py-3 font-bold text-white whitespace-nowrap bg-stone-600">
          www.x.com/
        </div>
        <InputField
          label="Company X"
          name="twitter"
          type="text"
          placeholder="Company X"
          value={data.twitter || ""}
          onChange={(e) => updateData({ twitter: e.target.value })}
          required={false}
        />
      </div>

      <div className="flex overflow-hidden flex-wrap gap-7 py-px mt-2.5 w-full leading-loose border border-solid border-stone-800 max-md:max-w-full">
        <div className="overflow-hidden gap-2.5 self-stretch px-4 py-3 font-bold text-white whitespace-nowrap bg-stone-600">
          www.linkedin.com/
        </div>
        <InputField
          label="Company LinkedIn"
          name="linkedin"
          type="text"
          placeholder="Company LinkedIn"
          value={data.linkedin || ""}
          onChange={(e) => updateData({ linkedin: e.target.value })}
          required={false}
        />
      </div>

      {/* International Online Directory Field */}
      <div className="flex flex-col mt-2.5 w-full font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[554px]">
          <InputField
            label="International Online Directory"
            name="directory"
            type="text"
            placeholder="International Online Directory"
            value={data.directory || ""}
            onChange={(e) => updateData({ directory: e.target.value })}
            required={false}
          />
        </div>
      </div>
    </form>
  );
};

export default SocialMediaForm;
