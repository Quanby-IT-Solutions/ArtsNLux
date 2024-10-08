// src/components/forms/trade-buyer/step-1/AdditionalInformationSection.tsx

import InputField from '@/components/ui/InputField';
import SectionHeader from '../../../ui/SectionHeader';
import { BuyerInfo } from '@/interfaces/trade-buyer';

interface AdditionalInformationSectionProps {
    data: BuyerInfo;
    updateData: (data: Partial<BuyerInfo>) => void;
}

export const  AdditionalInformationSection: React.FC<AdditionalInformationSectionProps> = ({ data, updateData }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateData({ [name]: value });
    };

    return (
        <section className="flex flex-col mt-8 w-full max-md:max-w-full">
            <SectionHeader title="Additional Information" />
            <InputField label="Company Name" name="companyName" placeholder="Company Name*" required value={data.companyName} onChange={handleInputChange} />
            <InputField label="Designation" name="designation" placeholder="Designation*" required value={data.designation} onChange={handleInputChange} />
            <InputField label="Website" name="website" placeholder="Website" value={data.website} onChange={handleInputChange} />
        </section>
    );
};

export default AdditionalInformationSection;
