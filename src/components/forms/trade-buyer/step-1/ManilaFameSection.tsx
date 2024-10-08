// src/components/forms/trade-buyer/step-1/ManilaFameSection.tsx

import CheckboxField from '@/components/ui/CheckboxField';
import SectionHeader from '../../../ui/SectionHeader';
import { BuyerInfo } from '@/interfaces/trade-buyer';

interface ManilaFameSectionProps {
    data: BuyerInfo;
    updateData: (data: Partial<BuyerInfo>) => void;
}

const ManilaFameSection: React.FC<ManilaFameSectionProps> = ({ data, updateData }) => {
    return (
        <section className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
            <SectionHeader title="Manila Fame 2024" />
            <p className="text-lg leading-loose max-md:max-w-full font-medium text-stone-800 text-opacity-70">
                Are you attending Manila FAME on October 17-19, 2024 in Manila?
            </p>
            <div className="flex gap-10 justify-between items-center mt-1.5 max-w-full text-base leading-7 whitespace-nowrap w-[133px]">
                <CheckboxField label="Yes" checked={data.attendingFame === 'Yes'} onChange={() => updateData({ attendingFame: 'Yes' })} />
                <CheckboxField label="No" checked={data.attendingFame === 'No'} onChange={() => updateData({ attendingFame: 'No' })} />
            </div>
        </section>
    );
};

export default ManilaFameSection;
