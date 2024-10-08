/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";

interface Features {
  title: string;
}

// Story data
const stories: Features[] = [
  {
    title: "The Future Of Interior Environments With AI",
  },
  {
    title: "Storytelling through Artisan Profiles",
  },
  {
    title: "Exclusive Auction Platform",
  },
  {
    title: "Curated Catalogue",
  },
  {
    title: "Handmade Collections",
  },
  {
    title: "Traditional Designs Revived",
  },
];

export default function FeatureSection() {
  // Set default selected index to 2 (third item)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(2); // Initialize to 2

  return (
    <div className="w-full h-full pt-[100px] px-[20px] xl:pt-[200px] xl:px-[100px]">
      <div className="md:flex justify-between items-center">
        {/* Text Section */}
        <div className="w-full xl:mt-[-40px]">
          <div className="flex gap-3">
            <div className="text-[#2B271E] text-[20px] xl:text-[28px]">Features</div>
            <div className="mt-3 xl:mt-5">
              <img src="assets/line.png" alt="" />
            </div>
          </div>
          <div>
            <p className="text-[40px] xl:text-[50px] font-semibold text-[#2B271E]">
              Experience the Art of Filipino Craftsmanship
            </p>
          </div>

          {/* Scrollable Section */}
          <div className="mt-4">
            <div
              className="max-h-[250px] xl:max-h-[350px] w-[500px] xl:w-[650px] overflow-y-auto text-end pl-[10px] md:pl-[40px] custom-scrollbar scroll-smooth"
              style={{ direction: "rtl" }}
            >
              {stories.map((story, index) => (
                <div key={index} className="feature mb-4">
                  <p
                    className={`text-[20px] xl:text-[25px] text-[#6A704C] hover:bg-[#6A704C] cursor-pointer hover:text-white p-[20px] xl:p-[30px] ${
                      selectedIndex === index ? 'bg-[#6A704C] text-white' : ''
                    }`}
                    onClick={() => setSelectedIndex(index)} // Set selected index on click
                  >
                    {story.title}
                  </p>
                </div>
              ))}           
            </div>
                        {/* Display the total items and selected index at the left */}
 <div className=" text-[16px] ml-[-103%] mt-[-8%]"> {/* Adjust alignment to left */}
  {stories.length > 0 && (
    <p className="flex flex-col items-center"> 
      {/* Display the total count first and then the selected index */}
      {selectedIndex !== null ? (
        `${stories.length}/${selectedIndex + 1}` // Change the order here
          .split('')
          .map((char, index) => {
            // Determine if the character is part of the selected index
            const isSelectedIndex = char <= `${selectedIndex + 1}`;
            return (
              <span 
                key={index} 
                className={`transform -rotate-90 ${isSelectedIndex ? 'text-black' : 'text-gray-500'}`}
              >
                {char === '/' ? '/' : `0${char}`}
              </span>
            );
          })
      ) : (
        `${stories.length}`
          .split('')
          .map((char, index) => (
            <span key={index} className="transform -rotate-90 text-gray-500">
              {char}
            </span> // Rotate each character to the left
          ))
      )}
    </p>
  )}
</div>




          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-end">
          <Image
            src="/assets/craftsmanImg.png"
            alt="Craftsmanship"
            className="rounded-lg shadow-lg"
            layout="responsive"
            width={1000}
            height={750}
          />
        </div>
      </div>
    </div>
  );
}
