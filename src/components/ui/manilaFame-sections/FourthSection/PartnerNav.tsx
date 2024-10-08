type PartnerNavProps = {
  labels: string[];
};

const PartnerNav: React.FC<PartnerNavProps> = ({ labels }) => {
  return (
    <nav className="flex flex-wrap gap-7 items-center self-center max-md:max-w-full">
      {labels.map((label, index) => (
        <button
          key={index}
          className={`${
            label === 'All' ? 'text-white bg-stone-600' : 'border border-solid border-stone-600'
          } gap-2.5 self-stretch px-6 py-2.5 my-auto min-w-[240px] shadow-[0px_4px_20px_rgba(106,112,76,0.3)] w-[292px] max-md:px-5`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default PartnerNav;