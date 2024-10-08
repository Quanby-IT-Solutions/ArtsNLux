"use client";
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./Header";
import StoryCard from "./StoryCard";
import Pagination from "./Pagination";
import MoreStoriesButton from "./MoreStoriesButton";

// Story interface
interface Story {
  imageSrc: string;
  title: string;
}

// Story data
const stories: Story[] = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b643d3863b7928756e9360c07c16ae6328db2d3b08ab3c237995a3c0b17b9514?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "The Future Of Interior Environments With AI",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b643d3863b7928756e9360c07c16ae6328db2d3b08ab3c237995a3c0b17b9514?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "The Future Of Interior Environments With AI",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1915df26bd482ade1450024a81f77443eef893b582a0a9608b6b6d285fc13623?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "KATHA Origins: The Traveler's Palm Hanging Lamp",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/50c490f78b5956eef98c623f6effd0e4ada59653adc5ae98c48f77ff7c9cd724?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "Mele + Marie: A Tale Of Fine Philippine Artistry",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1915df26bd482ade1450024a81f77443eef893b582a0a9608b6b6d285fc13623?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "Story 4",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/50c490f78b5956eef98c623f6effd0e4ada59653adc5ae98c48f77ff7c9cd724?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "Story 5",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/50c490f78b5956eef98c623f6effd0e4ada59653adc5ae98c48f77ff7c9cd724?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    title: "Story 6",
  },
];

// Constants for pagination
const ITEMS_PER_PAGE = 3;

const TouchPoint: React.FC = () => {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);

  // right button
  const [wNumber, setWNumber] = useState(100); // Set wNumber as state
  const [pNumber, setPNumber] = useState(50); // Set pNumber as state

  // left button
  const [wNumber1, setWNumber1] = useState(24); 
  const [pNumber1, setPNumber1] = useState(50);

  // Get stories for the current page
  const getCurrentPageStories = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return stories.slice(startIndex, endIndex);
  };

  // Handle navigation to the next page
  const handleNextPage = () => {
    
    if (currentPage < totalPages) {
      setSlideDirection("left");
      setCurrentPage(currentPage + 1);

      setWNumber((prev) => prev - 40);
      setPNumber((prev) => prev - 13);

      setWNumber1((prev) => prev + 40);
      setPNumber1((prev) => prev + 13);
    }
  };

  // Handle navigation to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setSlideDirection("right");
      setCurrentPage(currentPage - 1);
      setWNumber((prev) => prev + 40);
      setPNumber((prev) => prev + 13); 

      setWNumber1((prev) => prev - 40);
      setPNumber1((prev) => prev - 13);
    }
  };


  return (
    <main className="flex flex-col items-center px-4 md:px-3 md:pt-24 lg:px-3">
      {/* Header */}
      <header className="flex items-center justify-between w-full pt-[100px] md:pt-3 p-4 md:px-8 lg:px-7">
      {/* Logo and Title with typography styles */}
      <div className="flex items-center gap-[40px] sm:gap-[100px] lg:gap-[400px] xl:gap-[500px] xl:ml-3">
        <h1 className="text-4xl md:text-[30px] text-stone-800 font-normal tracking-wide">
          <span className="italic font-light">A</span>
          <span className="font-bold">RTISANS</span>
        </h1>
        {/* Tagline */}
        <p className="text-[10px] md:text-[18px] text-stone-600">
          Explore the stories behind the crafted identities
        </p>
      </div>
      {/* Pagination Buttons aligned to the right */}
      <div className="flex gap-2 xl:mr[100px]">
        <button onClick={handlePreviousPage } className={`flex items-center transition ${
           currentPage > 1 ? 'text-[#6A704C] hover:text-green-600' : 'text-stone-400 hover:text-stone-600'
             }`}
             >
          <svg xmlns="http://www.w3.org/2000/svg" 
          width={wNumber1}
          height="24" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round">
            <path d={`M${pNumber1} 12H6M12 5l-7 7 7 7`}/></svg>
        </button>
        <button
      onClick={handleNextPage}
      className={`flex items-center transition ${
        currentPage != totalPages ? 'text-[#6A704C] hover:text-green-600' : 'text-stone-400 hover:text-stone-600'
          }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={wNumber}
        height="24"
        viewBox="0 0 30 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d={`M5 12h${pNumber}M${pNumber} 5l7 7-7 7`}
        />
      </svg>
    </button>
      </div>
    </header>

      {/* Story card carousel */}
      <div className="w-full relative overflow-hidden">
      <TransitionGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-1"> {/* Adjust gap value here */}
  {getCurrentPageStories().map((story, index) => (
    <CSSTransition
      key={`${currentPage}-${index}`}
      timeout={300}
      classNames={`slide-${slideDirection}`} // Ensures correct direction is used
      unmountOnExit
    >
<div className="story-card-wrapper m-[-50px]"> {/* Add margin classes as necessary */}
  <StoryCard story={story} />
</div>

    </CSSTransition>
  ))}
</TransitionGroup>



      </div>

      {/* Pagination controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />

      {/* Button to load more stories */}
      <div className="mt-4">
        <MoreStoriesButton />
      </div>
    </main>
  );
};

export default TouchPoint;
