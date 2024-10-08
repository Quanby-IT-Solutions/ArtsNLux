"use client";
import { useState } from "react";
import { Buttons } from "./Buttons";
import { GeneralInformation } from "./GeneralInformation";
import { ForBidders } from "./ForBidders";
import { ForSellers } from "./ForSellers";

export const QuestionsSection = () => {
  const [activeButton, setActiveButton] = useState("auction/questions");

  return (
    <div className="w-full min-h-dvh max-h-fit flex flex-col gap-4 justify-start items-center text-urbanist text-primary-2">
      <h1 className="text-[70px] font-bold mx-auto text-timeless-black py-6">
        AUCTI
        <span className="italic font-serif font-medium text-secondary-5">O</span>
        N +
      </h1>
      <div className="w-full flex flex-col gap-4 justify-center items-center max-w-[80%]">
        <div className="w-full bg-secondary-7 sticky top-0 flex flex-col gap-4 py-6 justify-center items-center">
          <h6 className="text-5xl font-bold">Frequently Asked Questions</h6>
          <Buttons activeButton={activeButton} setActiveButton={setActiveButton} />
        </div>
        <div className="w-full flex flex-col max-w-3xl pt-6">
          {activeButton === "general" && <GeneralInformation />}
          {activeButton === "buyers" && <ForBidders />}
          {activeButton === "sellers" && <ForSellers />}
          {activeButton === "auction/questions" && (
            <>
              <GeneralInformation />
              <ForBidders />
              <ForSellers />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
