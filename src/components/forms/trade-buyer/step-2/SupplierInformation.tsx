// src/components/forms/trade-buyer/step-2/SupplierInformation.tsx

import { useEffect } from 'react';
import InputField from "@/components/ui/InputField";

interface SupplierInformationProps {
  suppliers: string[];
  updateSuppliers: (suppliers: string[]) => void;
}

const SupplierInformation: React.FC<SupplierInformationProps> = ({ suppliers, updateSuppliers }) => {
  // Ensure there are always at least 3 suppliers by default
  useEffect(() => {
    if (suppliers.length < 3) {
      updateSuppliers([...suppliers, ...Array(3 - suppliers.length).fill('')]);
    }
  }, [suppliers, updateSuppliers]);

  // Handler for input change
  const handleInputChange = (index: number, value: string) => {
    const updatedSuppliers = [...suppliers];
    updatedSuppliers[index] = value;
    updateSuppliers(updatedSuppliers);
  };

  // Handler to add a new supplier input field
  const addSupplier = () => {
    updateSuppliers([...suppliers, '']);
  };

  // Handler to remove a supplier input field
  const removeSupplier = (index: number) => {
    if (suppliers.length > 3) {
      const updatedSuppliers = suppliers.filter((_, i) => i !== index);
      updateSuppliers(updatedSuppliers);
    }
  };

  return (
    <section className="flex flex-col mt-8 w-full text-lg font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
      <h2 className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <span className="self-stretch my-auto">Supplier Information</span>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </h2>
      <label className="mt-2.5 leading-loose max-md:max-w-full">
        Existing Philippine supplier (if applicable)
      </label>
      <div className="flex flex-col mt-2.5 w-full leading-loose max-md:max-w-full">
        {suppliers.map((supplier, index) => (
          <div key={index} className="flex flex-col mt-5 first:mt-0 max-w-full w-[554px]">
            <InputField
              label={`Supplier Name ${index + 1}`}
              name={`supplier-${index}`}
              placeholder="Supplier Name"
              value={supplier}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            {suppliers.length > 3 && (
              <button
                type="button"
                onClick={() => removeSupplier(index)}
                className="text-red-500 mt-2 self-start"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addSupplier}
          className="mt-5 text-blue-500 self-start"
        >
          Add Supplier
        </button>
      </div>
    </section>
  );
};

export default SupplierInformation;
