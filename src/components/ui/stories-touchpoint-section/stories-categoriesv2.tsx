"use client";

import GridItemv2 from "../GridItemV2";

export type CombinedStoriesComponentProps = {
  className?: string;
  items?: Array<{
    image: string;
    title: string;
    subtitle: string;
    maskImage: string;
    arrowImage: string;
  }>;
  columns?: number;
};

const gridItems = [
  {
    title: "Design",
    subtitle: "Focus",
    imageSrc: "/assets/stories-touchpoint/category/design.png",
    goto: "/invited-guests",
  },
  {
    title: "Behind The",
    subtitle: "Brand",
    imageSrc: "/assets/stories-touchpoint/category/behind-the-brand.png",
    goto: "/invited-guests",
  },
  {
    title: "Artisan",
    subtitle: "Corner",
    imageSrc: "/assets/stories-touchpoint/category/artisan-corner.png",
    goto: "/invited-guests",
  },
  {
    title: "Material",
    subtitle: "Matters",
    imageSrc: "/assets/stories-touchpoint/category/material-matters.png",
    goto: "/invited-guests",
  },
  {
    title: "Creative",
    subtitle: "Dialogues",
    imageSrc: "/assets/stories-touchpoint/category/creative-dialogues.png",
    goto: "/invited-guests",
  },
  {
    title: "Industry",
    subtitle: "News",
    imageSrc: "/assets/stories-touchpoint/category/Industry.png",
    goto: "/invited-guests",
  },
];

const StoriesCategoryComponentV2: React.FC<CombinedStoriesComponentProps> = ({
  columns = 3,
}) => {

  const gridClass = `grid grid-cols-1 md:grid-cols-${columns} gap-6`;

  return (
    <>
      {/* Grid Container */}
      <div className={gridClass}>
        {gridItems.map((item, index) => (
          <GridItemv2
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            imageSrc={item.imageSrc}
            goto={item.goto}
          />
        ))}
      </div>
    </>
  );
};

export default StoriesCategoryComponentV2;
