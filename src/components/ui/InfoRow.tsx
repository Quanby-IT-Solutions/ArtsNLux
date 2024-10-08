interface InfoRowProps {
  label: string;
  value: string;
}

export const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
      <div className="overflow-hidden grow shrink px-8 py-3.5 font-bold min-w-[240px] w-[344px] max-md:px-5">
        {label}
      </div>
      <div className="overflow-hidden grow shrink py-3.5 min-w-[240px] w-[220px]">
        {value}
      </div>
    </div>
  );
};
