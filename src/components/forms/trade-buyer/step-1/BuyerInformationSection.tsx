// src/components/forms/trade-buyer/step-1/BuyerInformationSection.tsx

import InputField from '@/components/ui/InputField';
import SectionHeader from '../../../ui/SectionHeader';
import { BuyerInfo } from '@/interfaces/trade-buyer';

interface BuyerInformationSectionProps {
    data: BuyerInfo;
    updateData: (data: Partial<BuyerInfo>) => void;
}

const BuyerInformationSection: React.FC<BuyerInformationSectionProps> = ({ data, updateData }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateData({ [name]: value });
    };

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        updateData({ [name]: value });
    };

    return (
        <section className="flex flex-col mt-8 w-full max-md:max-w-full">
            <SectionHeader title="Buyer Information" />

            {/* Salutation Input as Dropdown */}
            <div className="flex flex-col mt-2 w-full">
                <label className="text-sm font-medium text-gray-700">Salutation</label>
                <div className="relative">
                    <input
                        type="text"
                        name="salutation"
                        placeholder="-- Salutation --"
                        value={data.salutation}
                        onChange={handleInputChange}
                        list="salutation-options"
                        className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <datalist id="salutation-options">
                        {["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."].map((option) => (
                            <option key={option} value={option} />
                        ))}
                    </datalist>
                </div>
            </div>

            {/* Other Input Fields */}
            <InputField label="First Name" name="firstName" placeholder="First Name*" required value={data.firstName} onChange={handleInputChange} />
            <InputField label="Last Name" name="lastName" placeholder="Last Name*" required value={data.lastName} onChange={handleInputChange} />
            <InputField label="Country" name="country" placeholder="Country" value={data.country} onChange={handleInputChange} />
            <InputField label="Email Address" name="emailAddress" type="email" placeholder="Email Address*" required value={data.emailAddress} onChange={handleInputChange} />
            <InputField label="Confirm Email Address" name="confirmEmailAddress" type="email" placeholder="Confirm Email Address*" required value={data.confirmEmailAddress} onChange={handleInputChange} />
            <InputField label="Password" name="password" type="password" placeholder="Password*" required value={data.password} onChange={handleInputChange} />
            <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm Password*" required value={data.confirmPassword} onChange={handleInputChange} />
        </section>
    );
};

export default BuyerInformationSection;
