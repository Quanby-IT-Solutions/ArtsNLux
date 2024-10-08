"use client"

import { useEffect, useState } from "react";
import { Furniture } from "./furniture";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  const [zIndex, setZIndex] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setZIndex(20); // Lower z-index when scrolling down
      } else {
        setZIndex(30); // Restore z-index when back to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full pt-[200px] flex flex-col justify-evenly gap-8 text-lg items-center md:items-start tracking-wider md:mt-[110px]">
        <img
          src="assets/logo_artLux.png"
          alt="Logo"
          className="w-[300px] lg:ml-40 md:ml-36 md:w-[500px] h-auto"
        />

        <div className="flex flex-row gap-8 md:ml-[9%] ml-[3%]">
          <div className="flex flex-col items-end font-semibold text-secondary-5 text-5xl md:text-[33px]">
            <h1>
              <span className="font-medium">FROM</span>{" "}
              <span className="italic font-medium font-serif">A</span>RTISTIC
              ROOTS
            </h1>
            <h1>
              T<span className="italic font-medium font-serif">O</span> TIMELESS{" "}
              <span className="font-medium font-serif">L</span>UXURY
            </h1>
          </div>
          <p className="text-gray-500 w-full max-w-[50rem] md:text-[20px] xl:text-[23px] md:mt-4">
            Arts&Lux is a premier online platform showcasing the finest Filipino
            craftsmanship, connecting brands with global markets.
          </p>
        </div>

        <div className="md:flex w-full h-full justify-between mt-[3%]">
          <div className="flex gap-3 items-center justify-center md:ml-[9%] md:mt-[-30px]">
            <img
              className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
              src="assets/company/qb.png"
              alt=""
            />
            <span className="mt-2 font-medium">in partnership with</span>
            <img
              className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
              src="assets/company/dti.png"
              alt=""
            />
            <img
              className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
              src="assets/company/ctm.png"
              alt=""
            />
          </div>

          <div className="relative xl:flex justify-end items-end mt-[-150px] hidden" style={{ zIndex }}>
            <img
              className="h-full w-full z-20"
              src="assets/landing-page/sofa.png"
              alt="Sofa"
            />
            <div
              className="h-[700px] w-[400px] absolute right-0 bottom-[280px] z-10"
              style={{
                backgroundImage: "url('assets/landing-page/bamboo.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
