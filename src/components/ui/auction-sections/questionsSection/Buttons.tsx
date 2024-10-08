import { Dispatch, SetStateAction } from "react";

interface ButtonsProps {
  activeButton: string;
  setActiveButton: Dispatch<SetStateAction<string>>;
}

export const Buttons = ({ activeButton, setActiveButton }: ButtonsProps) => {
  const buttonName = [
    { id: 1, name: "All", route: "auction/questions" },
    { id: 2, name: "General Information", route: "general" },
    { id: 3, name: "For Buyers", route: "buyers" },
    { id: 4, name: "For Sellers", route: "sellers" },
  ];

  return (
    <div className="flex flex-col justify-start items-center gap-6">
      <div className="flex justify-start items-center gap-7">
        {buttonName.map((item) => (
          <button 
            key={item.id}
            className={` border border-secondary-5 flex justify-center items-center
               text-xl font-normal font-['Urbanist'] px-6 py-2 hover:text-timeless-white hover:bg-secondary-5 duration-300
              ${activeButton === item.route ? "bg-secondary-5 text-timeless-white" : "bg-timeless-white text-secondary-5"}
              ${item.name.length > 3 ? "w-72" : "w-fit"}`}
            onClick={() => setActiveButton(item.route)} // Handle button click
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
