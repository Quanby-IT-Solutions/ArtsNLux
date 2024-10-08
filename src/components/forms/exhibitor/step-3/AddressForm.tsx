// src/components/forms/exhibitor/step-3/AddressForm.tsx

import Image from 'next/image';

import InputField from "@/components/ui/InputField";
import CheckboxField from "@/components/ui/CheckboxField";
import { ExhibitorInfo } from "@/interfaces/exhibitor";

interface AddressFormProps {
  title: string;
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ title, data, updateData }) => {
  return (
    <form className="flex flex-col mt-8 w-full text-lg font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
      {/* Section Title */}
      <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <h3 className="self-stretch my-auto">{title}</h3>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </div>

      {/* Factory Address Checkboxes */}
      {title === "Factory Address" && (
        <div className="flex flex-wrap gap-4 items-center mt-2.5 w-full text-sm leading-loose max-w-[555px] text-zinc-600 max-md:max-w-full">
          <CheckboxField
            label="Same as office address"
            checked={data.sameAsOfficeAddress || false}
            onChange={() => updateData({ sameAsOfficeAddress: !data.sameAsOfficeAddress })}
          />
          <CheckboxField
            label="No factory address"
            checked={data.noFactoryAddress || false}
            onChange={() => updateData({ noFactoryAddress: !data.noFactoryAddress })}
          />
        </div>
      )}

      {/* Country Selection */}
      <div className="flex flex-col mt-2.5 max-w-full leading-loose whitespace-nowrap w-[555px]">
        <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full bg-transparent"
              value={data.country}
              onChange={(e) => updateData({ country: e.target.value })}
            >
              <option value="">Select Country</option>
              <option value="Philippines">Philippines</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="United Kingdom">United Kingdom</option>
              {/* Add more country options as needed */}
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

      {/* Region, Province, City/Municipality, and Zip Code Fields */}
      <div className="flex flex-wrap gap-4 items-start mt-2.5 leading-loose whitespace-nowrap max-md:max-w-full">
        {/* Region */}
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <div className="flex flex-col min-w-[240px] w-[270px]">
            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:pl-5">
              <div className="flex gap-10 justify-between items-center">
                <label htmlFor="region" className="sr-only">
                  Region
                </label>
                <select
                  id="region"
                  name="region"
                  className="w-full bg-transparent"
                  value={data.region}
                  onChange={(e) => updateData({ region: e.target.value })}
                >
                  <option value="">Select Region</option>
                  <option value="NCR">NCR</option>
                  <option value="Region I">Region I - Ilocos Region</option>
                  <option value="Region II">Region II - Cagayan Valley</option>
                  <option value="Region III">Region III - Central Luzon</option>
                  {/* Add more region options as needed */}
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
        </div>

        {/* Province */}
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <div className="flex flex-col min-w-[240px] w-[270px]">
            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:pl-5">
              <div className="flex gap-10 items-center">
                <label htmlFor="province" className="sr-only">
                  Province
                </label>
                <select
                  id="province"
                  name="province"
                  className="w-full bg-transparent"
                  value={data.province}
                  onChange={(e) => updateData({ province: e.target.value })}
                >
                  <option value="">Select Province</option>
                  <option value="Cavite">Cavite</option>
                  <option value="Laguna">Laguna</option>
                  <option value="Rizal">Rizal</option>
                  <option value="Bulacan">Bulacan</option>
                  {/* Add more province options as needed */}
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
        </div>
      </div>

      {/* City / Municipality and Zip Code */}
      <div className="flex flex-wrap gap-4 items-start mt-2.5 leading-loose max-md:max-w-full">
        {/* City / Municipality */}
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <div className="flex flex-col min-w-[240px] w-[270px]">
            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:pl-5">
              <div className="flex gap-10 justify-between items-center">
                <label htmlFor="city" className="sr-only">
                  City / Municipality
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-full bg-transparent"
                  value={data.city}
                  onChange={(e) => updateData({ city: e.target.value })}
                >
                  <option value="">Select City / Municipality</option>
                  <option value="Manila">Manila</option>
                  <option value="Quezon City">Quezon City</option>
                  <option value="Makati">Makati</option>
                  <option value="Pasig">Pasig</option>
                  {/* Add more city options as needed */}
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
        </div>

        {/* Zip Code */}
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <InputField
            label="Zip Code"
            name="zipCode"
            type="text"
            placeholder="Zip Code"
            value={data.zipCode}
            onChange={(e) => updateData({ zipCode: e.target.value })}
          />
        </div>
      </div>

      {/* Street Input */}
      <div className="flex flex-col mt-2.5 max-w-full leading-loose w-[555px]">
        <InputField
          label="Building / Street"
          name="street"
          type="text"
          placeholder="Building / Street*"
          value={data.street}
          onChange={(e) => updateData({ street: e.target.value })}
        />
      </div>
    </form>
  );
};

export default AddressForm;
