// src/components/ui/BoothOption.tsx

import Image from "next/image";

interface BoothOptionProps {
  title: string;
  price: string;
  subscription: string;
  description: string;
  imageSrc: string;
  inclusions?: string[];
  isSelected: boolean;
  onSelect: () => void;
}

const BoothOption: React.FC<BoothOptionProps> = ({
  title,
  price,
  subscription,
  description,
  imageSrc,
  inclusions,
  isSelected,
  onSelect,
}) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div
        className={`flex grow gap-2.5 items-center p-7 w-full text-lg font-bold bg-white border border-solid border-stone-800 min-h-[826px] text-stone-800 max-md:px-5 ${isSelected ? "bg-stone-100" : ""
          }`}
      >
        <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[499px] max-md:max-w-full">
          <h3 className="overflow-hidden gap-4 self-center max-w-full text-xl w-[499px] max-md:max-w-full">
            {title}
          </h3>
          <p className="mt-4 w-full leading-7 text-stone-800 text-opacity-70 max-md:max-w-full">
            {price} per square meter <br />
            <span className="text-stone-600">{subscription}</span>
          </p>
          <div className="flex flex-col mt-4 w-full text-sm font-medium leading-7 text-black max-md:max-w-full">
            {/* Use the Next.js Image component here */}
            <Image
              src={imageSrc}
              alt={`${title} booth layout`}
              width={500}
              height={450}
              className="object-contain w-full aspect-[0.9] max-md:max-w-full"
              loading="lazy"
            />
            <div className="flex flex-col items-start mt-1.5 w-full max-md:max-w-full">
              <p className="max-w-full w-[555px] max-md:max-w-full">
                {description}
              </p>
              {inclusions && (
                <ul className="mt-4 list-disc pl-5">
                  {inclusions.map((inclusion, index) => (
                    <li key={index} className="text-stone-600">
                      {inclusion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex flex-col self-center mt-4 max-w-full leading-loose whitespace-nowrap w-[175px]">
            <button
              onClick={onSelect}
              className={`gap-2.5 self-stretch px-12 py-3.5 border border-black border-solid min-h-[53px] max-md:px-5 ${isSelected ? "bg-stone-600 text-white" : ""
                }`}
            >
              SELECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothOption;
