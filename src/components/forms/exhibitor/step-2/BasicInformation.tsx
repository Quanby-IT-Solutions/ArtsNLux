// src/components/forms/exhibitor/step-2/BasicInformation.tsx

import Image from "next/image";

import { ExhibitorInfo } from "@/interfaces/exhibitor";

import ProgressBar from "@/components/ui/ProgressBar";
import CheckboxField from "@/components/ui/CheckboxField";
import InputField from "@/components/ui/InputField";
import RadioGroup from "@/components/ui/RadioGroup";
import NavigationButtons from "@/components/ui/NavigationButtons";

interface BasicInformationProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  data,
  updateData,
  handleNext,
  handlePrev,
}) => {
  return (
    <main className="flex overflow-hidden flex-col">
      <section className="flex flex-col justify-center mt-24 max-w-full w-[555px] max-md:mt-10">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[433px]">
            <h1 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
              Account Registration
            </h1>
            <ProgressBar current={2} total={7} />
          </div>
        </div>
        <form className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full font-medium max-md:max-w-full">
                  {/* Input fields with state binding */}
                  <InputField
                    label="Registered Complete Company Name*"
                    name="companyName"
                    type="text"
                    value={data.companyName}
                    onChange={(e) => updateData({ companyName: e.target.value })}
                    required
                  />
                  <InputField
                    label="Company Email Address*"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => updateData({ email: e.target.value })}
                    required
                    placeholder="Enter your company email"
                    helperText={[
                      "Make sure you have access to this email address.",
                      "All system-generated notifications will be sent to this email address.",
                    ]}
                  />
                  <InputField
                    label="Username*"
                    name="contactPerson"
                    type="text"
                    value={data.contactPerson}
                    onChange={(e) => updateData({ contactPerson: e.target.value })}
                    required
                  />
                  <InputField
                    label="Password*"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => updateData({ password: e.target.value })}
                    required
                    helperText={[
                      "Password must include alphabets, at least one (1) number, and a special character.",
                      "This will be your password when you login to FAME+ once your account is activated.",
                    ]}
                  />
                  <InputField
                    label="Confirm Password*"
                    name="confirmPassword"
                    type="password"
                    value={data.confirmPassword}
                    onChange={(e) => updateData({ confirmPassword: e.target.value })}
                    required
                  />

                  {/* Radio Group */}
                  <RadioGroup
                    title="Is your business registered in the Philippines?"
                    options={["YES (Local)", "NO (Foreign Company)"]}
                    selectedValue={data.event}
                    onChange={(value) => updateData({ event: value })}
                  />
                  <RadioGroup
                    title="Have you participated in any physical Manila FAME editions?*"
                    options={["YES", "NO"]}
                    selectedValue={data.participationType}
                    onChange={(value) => updateData({ participationType: value })}
                  />

                  <InputField
                    label="Please specify edition*"
                    name="edition"
                    type="text"
                    value={data.edition || ""}
                    onChange={(e) => updateData({ edition: e.target.value })}
                    required
                  />
                </div>
                <CheckboxField
                  label={
                    <>
                      I agree to the{" "}
                      <span className="font-semibold underline text-stone-600">
                        Terms and Conditions.
                      </span>
                    </>
                  }
                  checked={data.agreeToTerms || false}
                  onChange={() => updateData({ agreeToTerms: !data.agreeToTerms })}
                />
                {/* Navigation Buttons */}
                <NavigationButtons
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  isSubmit={false}
                  showPrev={true}
                  showNext={true}
                />
              </div>
            </div>
            {/* Fixed Image Component */}
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d122bf4c3e3f9824c0fc96ddec331029057f47792dab93297bee98a669ff2cdd?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                alt="Exhibitor registration illustration"
                width={500}
                height={345}
                className="object-contain grow w-full aspect-[0.69] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default BasicInformation;
