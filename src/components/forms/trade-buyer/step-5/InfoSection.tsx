// src/components/forms/trade-buyer/step-5/InfoSection.tsx

interface InfoSectionProps {
  title: string;
  info: Record<string, string>;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ title, info }) => {
  return (
    <section className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col w-full text-xl font-bold text-stone-800 max-md:max-w-full">
        <div className="flex flex-col items-start w-full min-h-[30px] max-md:max-w-full">
          <div className="flex overflow-hidden gap-4 items-center">
            <h2 className="self-stretch my-auto">{title}</h2>
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2.5 w-full text-lg leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
        {Object.entries(info).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full"
          >
            <div className="overflow-hidden grow shrink px-8 py-3.5 font-bold whitespace-nowrap min-w-[240px] w-[344px] max-md:px-5">
              {key}:
            </div>
            <div className="overflow-hidden grow shrink py-3.5 min-w-[240px] w-[220px]">
              {value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
