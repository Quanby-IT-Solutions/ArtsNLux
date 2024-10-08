// src/components/forms/trade-buyer/ProgressBar.tsx

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className="flex flex-col justify-center mt-5 max-w-full w-[200px]">
      <div className="flex flex-col self-center w-full">
        <div className="flex flex-col items-start bg-neutral-200 max-md:pr-5">
          <div
            className="flex shrink-0 h-1 bg-stone-600"
            style={{ inlineSize: `${(current / total) * 100}%` }}
          />
        </div>
      </div>
      <div className="mt-2 text-xs leading-7 text-center text-neutral-400">
        <span className="text-lg font-medium leading-7 text-stone-800">
          {current.toString().padStart(2, "0")}
        </span>{" "}
        /{" "}
        <span className="text-base leading-7 text-neutral-400">
          {total.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
