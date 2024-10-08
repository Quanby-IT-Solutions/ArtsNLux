"use client";

import React from 'react';
import MaterialMattersContent from "./stories-material-matters-content";

export type CombinedStoriesComponentProps = {
  className?: string;
  items?: Array<{
    image: string;
    title: string;
    subtitle: string;
    maskImage: string;
    arrowImage: string;
  }>;
};

const defaultItems = [
  {
    image: "/assets/stories-touchpoint/category/design.png",
    title: "Behind the",
    subtitle: "Brand",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  {
    image: "/assets/stories-touchpoint/category/design.png",
    title: "Behind the",
    subtitle: "Brand",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  {
    image: "/assets/stories-touchpoint/category/design.png",
    title: "Behind the",
    subtitle: "Brand",
    maskImage: "/assets/stories-touchpoint/mask.png",
    arrowImage: "/assets/stories-touchpoint/stories-svg/arrow.svg",
  },
  
  // ... (other default items)
];

const StoriesCategoryComponent: React.FC<CombinedStoriesComponentProps> = ({
  className = "",
  items = defaultItems
}) => {
  const getItemStyle = (itemCount: number) => {
    if (itemCount === 1) {
      return {
        flexBasis: '100%',
        maxWidth: '100%',
      };
    } else if (itemCount === 2) {
      return {
        flexBasis: 'calc(50% - 14px)',
        maxWidth: 'calc(50% - 14px)',
      };
    } else if (itemCount === 4) {
      return {
        flexBasis: 'calc(50% - 14px)',
        maxWidth: 'calc(50% - 14px)',
      };
    } else {
      return {
        flexBasis: 'calc(33.333% - 19px)',
        maxWidth: 'calc(33.333% - 19px)',
      };
    }
  };

  return (
    <div className={`flex flex-wrap justify-start gap-7 w-full ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          style={getItemStyle(items.length)}
        >
          <MaterialMattersContent
            space1={item.image}
            design={item.title}
            focus1={item.subtitle}
            maskGroup={item.maskImage}
            chevronDown={item.arrowImage}
            propHeight="100%"
            propFlex="1"
            propMinWidth="unset"
            propHeight1="100%"
            propTop="12.3px"
            propPadding="59px 10px"
            propTop1="11.3px"
            propTop2="calc(100% - 55px)"
          />
        </div>
      ))}
    </div>
  );
};

export default StoriesCategoryComponent;