"use client";

import GridItem from "@/components/ui/GridItem";

const gridItems = [
  {
    title: "Invited Guests",
    subtitle: "(with invite code)",
    imageSrc: "/assets/auction/candles.png",
    goto: "/invited-guests",
  },
  {
    title: "Government",
    subtitle: "(Employees, Officers, Officials)",
    imageSrc: "/assets/auction/earings.png",
    goto: "/government",
  },
  {
    title: "Media",
    subtitle: "",
    imageSrc: "/assets/auction/alda.png",
    goto: "/media",
  },
  {
    title: "General Public",
    subtitle: "(Paying Visitors)",
    imageSrc: "/assets/auction/pumpkin.png",
    goto: "/general-public",
  },
];

export default function Register() {
  const columns = 3;
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-6`;

  return (
    <div className="flex flex-col items-center text-gray-900 bg-white min-h-screen">
      <div className="shadow-lg p-10 w-full max-w-5xl">
        <h1 className="text-4xl font-semibold text-center mb-6">
          VISIT<span className="italic font-serif font-medium">O</span>R REGISTR
          <span className="font-serif">A</span>TION
        </h1>
        <div className={gridClass}>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imageSrc={item.imageSrc}
              goto={item.goto}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
