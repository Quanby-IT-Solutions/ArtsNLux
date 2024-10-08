"use client";

import type { FC } from "react";
import { useState } from "react";

// Define the structure of a Story object
export type Story = {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  iconImage: string;
  extraInfo?: string; // Additional optional field for any extra information
};

// Props for YourEmail component
export type YourEmailProps = {
  className?: string;
  stories: Story[];
  itemsPerPage: number; // Maximum number of stories per page
};

// YourEmail component that accepts stories as a prop
const YourEmail: FC<YourEmailProps> = ({ className = "", stories, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(stories.length / itemsPerPage);

  // Get the stories for the current page
  const currentStories = stories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-0 box-border max-w-full text-left text-21xl text-gray-300 font-urbanist ${className}`}
    >
      <div className="w-[80%] flex flex-col items-start justify-start gap-[50px] max-w-full mx-auto mq750:gap-[25px]">
        {/* Header Section with Previous and Next Buttons */}
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
          <b className="relative mq450:text-5xl mq1025:text-13xl">RECENT STORIES</b>

          {/* Previous and Next Buttons */}
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              className="flex items-center justify-center p-2 border-none bg-transparent cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <img src="assets/stories-touchpoint/stories-svg/prev.svg" alt="Previous" className="h-6" />
            </button>
            <button
              className="flex items-center justify-center p-2 border-none bg-transparent cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              <img src="assets/stories-touchpoint/stories-svg/next.svg" alt="Next" className="h-6" />
            </button>
          </div>
        </div>

        {/* Dynamic Story Cards Section with CSS Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${itemsPerPage} gap-[30px] w-full text-center text-xl`}
        >
          {currentStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* Adjusted Pagination Section */}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
};

// StoryCard component with responsive image
const StoryCard: FC<{ story: Story }> = ({ story }) => {
  return (
    <div className="flex flex-col items-center justify-start pt-1 px-0 pb-0 box-border w-full"> {/* Responsive width */}
      <div className="flex flex-col items-center justify-start gap-[15px] w-full h-full">
        {/* Image container set to cover full available space */}
        <div
          className="w-full h-0 pb-[100%] bg-cover bg-no-repeat bg-center relative"  // Use pb-[100%] to maintain a square aspect ratio
          style={{ backgroundImage: `url('${story.backgroundImage}')` }}
        >
          {/* Positioned dark olive green container */}
          <div className="absolute bottom-0 left-0 bg-darkolivegreen w-[72px] h-[72px] z-[1] flex items-center justify-center">
            <img
              className="w-7 h-7 overflow-hidden object-contain"
              alt="Chevron down"
              src={story.iconImage}
            />
          </div>
        </div>
        {/* Title section with flexible layout */}
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-left">
          <b className="relative mq450:text-base">
            <p className="m-0">{story.title}</p>
            {story.extraInfo && <p className="m-0">{story.extraInfo}</p>}
          </b>
        </div>
      </div>
    </div>
  );
};

// Adjusted Pagination component with less margin at the top
const Pagination: FC<{ currentPage: number; totalPages: number }> = ({ currentPage, totalPages }) => {
  const sliderWidth = 25; // Width of the slider in percentage

  return (
    <div className="mb-24 self-stretch flex flex-row items-start justify-center py-4 px-5 text-left text-lg text-gray-300 font-lato mt-4">
      <div className="w-40 flex flex-col items-start justify-start gap-[7px]">
        <div className="self-stretch h-1 relative bg-color-gray-3 overflow-hidden"> {/* Added overflow-hidden */}
          <div
            className="absolute top-[0px] bg-darkolivegreen h-1 z-[1] transition-all duration-300"
            style={{
              left: `${(currentPage - 1) * ((100 - sliderWidth) / (totalPages - 1))}%`,
              width: `${sliderWidth}%`,
            }} // Adjust left position based on current page
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-[55px] pr-[54px]">
          <div className="relative inline-block min-w-[51px]">
            <span className="leading-[28px] font-medium">{currentPage.toString().padStart(2, "0")}</span>
            <span className="text-xs font-roboto text-darkslategray"> / </span>
            <span className="text-base leading-[26px] text-darkgray">{totalPages.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage of the YourEmail component with dummy data
const ExampleUsage: FC = () => {
  const stories: Story[] = [
    {
      id: "1",
      title: "The Future Of Interior Environments With AI",
      description: "Exploring the intersection of AI and interior design.",
      backgroundImage: "assets/stories-touchpoint/image-5.png",
      iconImage: "assets/stories-touchpoint/stories-svg/arrow.svg",
    },
    {
      id: "2",
      title: "The Future Of Interior Environments With AI",
      description: "Exploring the intersection of AI and interior design.",
      backgroundImage: "assets/stories-touchpoint/image-5.png",
      iconImage: "assets/stories-touchpoint/stories-svg/arrow.svg",
    },
    {
      id: "3",
      title: "The Future Of Interior Environments With AI",
      description: "Exploring the intersection of AI and interior design.",
      backgroundImage: "assets/stories-touchpoint/image-5.png",
      iconImage: "assets/stories-touchpoint/stories-svg/arrow.svg",
    },
    {
      id: "3",
      title: "The Future Of Interior Environments With AI",
      description: "Exploring the intersection of AI and interior design.",
      backgroundImage: "assets/stories-touchpoint/image-5.png",
      iconImage: "assets/stories-touchpoint/stories-svg/arrow.svg",
    },
    // Other stories...
  ];

  return (
    <YourEmail
      className="custom-class-name"
      stories={stories}
      itemsPerPage={4} // Max items per page
    />
  );
};

export default ExampleUsage;
