// src/components/ui/CheckboxGroup.tsx

interface CheckboxOption {
  label: string;
  hasInput?: boolean;
}

interface CheckboxGroupProps {
  title?: string;
  description?: string;
  options: (string | CheckboxOption)[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, description, options, selectedValues, onChange }) => {
  const handleCheckboxChange = (label: string) => {
    const newValues = selectedValues.includes(label)
      ? selectedValues.filter((value) => value !== label)
      : [...selectedValues, label];
    onChange(newValues);
  };

  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      {title && (
        <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
          <div className="self-stretch my-auto">{title}</div>
          <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
        </div>
      )}

      {/* Optional description */}
      {description && (
        <p className="mt-2 text-base font-medium leading-7 text-stone-800 text-opacity-70 max-md:max-w-full">
          {description}
        </p>
      )}

      <div className="flex flex-col px-8 mt-4 w-full max-w-[533px] max-md:px-5 max-md:max-w-full">
        {options.map((option, index) => {
          const isString = typeof option === "string";
          const label = isString ? option : option.label;
          const hasInput = !isString && option.hasInput;
          const isChecked = selectedValues.includes(label);

          return (
            <div
              key={index}
              className="flex gap-4 items-center mt-2 w-full text-sm font-medium leading-loose text-zinc-600 max-md:max-w-full"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(label)}
                className="mr-2"
              />
              <div className="self-stretch my-auto w-[497px] max-md:max-w-full">
                {label}
                {hasInput && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    className="ml-2 p-2 border border-gray-300 rounded"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
