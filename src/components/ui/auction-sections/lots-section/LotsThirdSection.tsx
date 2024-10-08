"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { DynamicSection } from "../DynamicSection";

export const LotsThirdSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(lots.length / itemsPerPage);

  const handlePageChange = (newPage: any) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedLots = lots.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full relative">
      <div className="w-fit absolute left-1/2 -translate-x-1/2 z-20 text-primary-2 flex flex-col items-center">
        <h1 className="text-17xl uppercase font-bold">7 LOTS</h1>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              className="flex items-center justify-center ml-10 p-2 border-none bg-transparent cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <img
                src="/assets/stories-touchpoint/stories-svg/prev.svg"
                alt="Previous"
                className="h-6"
              />
            </button>
            <button
              className="flex items-center justify-center p-2 border-none bg-transparent cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              <img
                src="/assets/stories-touchpoint/stories-svg/next.svg"
                alt="Next"
                className="h-6"
              />
            </button>
          </div>
        </div>
      </div>

      <DynamicSection auctions={selectedLots} />
    </div>
  );
};


const lots = [
  {
    id: 1,
    image: "/assets/auction/lot/melle.png",
    title: "Thea Minaudiere from the Harvest Collection",
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
    inlineSize: 400,
    blockSize: 400,
  },
  {
    id: 2,
    image: "/assets/auction/lot/gapo.png",
    title: "Thea Minaudiere from the Harvest Collection",
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
    inlineSize: 400,
    blockSize: 400,
  },
  {
    id: 3,
    image: "/assets/auction/lot/bag.png",
    title: "Thea Minaudiere from the Harvest Collection",
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
    inlineSize: 400,
    blockSize: 400,
  },
  {
    id: 4,
    image: "/assets/auction/lot/case.png",
    title: "Thea Minaudiere from the Harvest Collection",
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
    inlineSize: 400,
    blockSize: 400,
  },
  {
    id: 5,
    image: "/assets/auction/lot/puso.png",
    title: "Thea Minaudiere from the Harvest Collection",
    button: "View Auction",
    estimate: "$1,800 - $2,200 / Estimate",
    startingBid: "$1,100 / Starting Bid",
    inlineSize: 400,
    blockSize: 400,
  }
];
