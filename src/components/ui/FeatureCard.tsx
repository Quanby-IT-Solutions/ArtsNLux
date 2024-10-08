// src/components/forms/exhibitor/FeatureCard.tsx

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  bgColor,
  textColor,
}) => {
  return (
    <div className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full`}>
      <div
        className={`flex gap-2.5 justify-center items-center px-6 py-20 mt-2 w-full text-center ${bgColor} min-h-[405px] ${textColor} max-md:px-5 max-md:mt-8`}
      >
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[303px]">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="self-center mt-8 max-w-full text-lg font-medium leading-6 w-[280px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;