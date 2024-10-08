// src/components/ui/CheckboxField.tsx

interface CheckboxFieldProps {
    label: string | React.ReactNode;
    checked: boolean;
    onChange?: () => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, checked, onChange }) => {
    return (
        <div className="flex items-center mb-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="mr-2"
            />
            <label>{label}</label>
        </div>
    );
};

export default CheckboxField;
