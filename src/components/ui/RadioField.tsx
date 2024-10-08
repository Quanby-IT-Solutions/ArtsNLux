// src/components/ui/RadioField.tsx

interface RadioFieldProps {
    name: string;
    options: string[];
    onChange: (value: string) => void;
    selectedValue: string;
}

const RadioField: React.FC<RadioFieldProps> = ({ name, options, onChange, selectedValue }) => {
    return (
        <div className="flex flex-col mb-4">
            {options.map((option) => (
                <label key={option} className="flex items-center mb-2">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={selectedValue === option}
                        onChange={() => onChange(option)}
                        className="mr-2"
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default RadioField;
