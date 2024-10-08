"use client";

import React from "react";
import Image from "next/image";
import { DynamicSection } from "./DynamicSection";

interface AuctionHeaderProps {
    upcomingAuctions: any[];
}

const AuctionHeader: React.FC<AuctionHeaderProps> = ({ upcomingAuctions }) => {
    return (
        <div className="relative w-full h-full">
            <div className="absolute top-[5%] left-[55%] -translate-x-1/2 z-20 ml-32">
                <a
                    href="#"
                    className="text-lg font-[300] uppercase text-secondary-5 flex"
                >
                    View all{" "}
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.90961 20.6695C8.71961 20.6695 8.52961 20.5995 8.37961 20.4495C8.08961 20.1595 8.08961 19.6795 8.37961 19.3895L14.8996 12.8695C15.3796 12.3895 15.3796 11.6095 14.8996 11.1295L8.37961 4.60953C8.08961 4.31953 8.08961 3.83953 8.37961 3.54953C8.66961 3.25953 9.14961 3.25953 9.43961 3.54953L15.9596 10.0695C16.4696 10.5795 16.7596 11.2695 16.7596 11.9995C16.7596 12.7295 16.4796 13.4195 15.9596 13.9295L9.43961 20.4495C9.28961 20.5895 9.09961 20.6695 8.90961 20.6695Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
                <h1 className="text-17xl uppercase font-semibold text-timeless-black">
                    <span className="font-serif">U</span>pcoming aucti
                    <span className="font-serif">o</span>ns
                </h1>
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <button
                            className="flex items-center justify-center -ml-2 p-2 border-none bg-transparent cursor-pointer"
                            aria-label="Previous Page"
                        >
                            <Image
                                src="/assets/stories-touchpoint/stories-svg/prev.svg"
                                alt="Previous"
                                className="h-6"
                                width={24}
                                height={24}
                            />
                        </button>
                        <button
                            className="flex items-center justify-center p-2 border-none bg-transparent cursor-pointer"
                            aria-label="Next Page"
                        >
                            <Image
                                src="/assets/stories-touchpoint/stories-svg/next.svg"
                                alt="Next"
                                className="h-6"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <DynamicSection auctions={upcomingAuctions} />
        </div>
    );
};

export default AuctionHeader;
