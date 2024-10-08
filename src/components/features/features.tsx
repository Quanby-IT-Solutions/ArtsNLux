/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import FeatureCard from "./featureCard";



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
          <div className="mt-4 ml-[-30px]">
            <div>
                    <FeatureCard/>  
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
