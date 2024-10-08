// src/components/ui/SectionTitle.tsx

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-gray-900 mt-8 max-md:max-w-full">
            <h3 className="self-stretch my-auto">{title}</h3>
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
        </div>
    );
};

export default SectionTitle;
