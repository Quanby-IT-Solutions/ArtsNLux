// src/components/forms/trade-buyer/step-3/CategorySection.tsx

import CheckboxField from "@/components/ui/CheckboxField";

interface CategorySectionProps {
  title: string;
  items: string[];
  selectedCategories: string[];
  handleCategoryChange: (category: string, isChecked: boolean) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, items, selectedCategories, handleCategoryChange }) => {
  return (
    <div className="flex flex-col mt-5 w-full max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[554px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-lg font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
            {title}
          </h2>
          <div className="flex flex-col px-8 mt-2.5 max-w-full w-[533px] max-md:px-5">
            {items.map((item, index) => (
              <CheckboxField
                key={index}
                label={item}
                checked={selectedCategories.includes(item)}
                onChange={() => handleCategoryChange(item, !selectedCategories.includes(item))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
