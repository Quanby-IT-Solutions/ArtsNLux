// src/components/ui/RadioGroup.tsx

interface RadioGroupProps {
  title: string;
  description?: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ title, description, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-4 items-center self-start text-xl font-bold text-stone-800 max-md:max-w-full">
        <div className="self-stretch my-auto max-md:max-w-full">{title}</div>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </div>

      {/* Optional description */}
      {description && (
        <p className="mt-2 text-base font-medium leading-7 text-stone-800 text-opacity-70 max-md:max-w-full">
          {description}
        </p>
      )}

      <div className="flex flex-col mt-2.5 w-full text-base font-medium leading-7 whitespace-nowrap text-stone-800 text-opacity-70 max-md:max-w-full">
        <div className="flex flex-col justify-center items-start px-8 w-full max-md:px-5 max-md:max-w-full">
          {options.map((option) => (
            <label key={option} className="flex items-center mb-2">
              <input
                type="radio"
                name={title}
                value={option}
                checked={selectedValue === option}
                onChange={() => onChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;
