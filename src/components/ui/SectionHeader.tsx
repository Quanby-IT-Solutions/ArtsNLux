// src/components/forms/SectionHeader.tsx

interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
    <h3 className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-gray-900">
        {title}
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
    </h3>
);

export default SectionHeader;
