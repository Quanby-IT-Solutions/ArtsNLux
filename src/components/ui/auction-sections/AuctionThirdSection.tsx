/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import StoriesCategoryComponentv2 from "../stories-touchpoint-section/stories-categoriesv2";

export const AuctionThirdSection = () => {
  // const products = [
  //   {
  //     id: 1,
  //     image: "/assets/auction/bed.png",
  //     title: "Furniture",
  //   },
  //   {
  //     id: 2,
  //     image: "/assets/auction/wings.png",
  //     title: "Home and House Decor",
  //   },
  //   {
  //     id: 3,
  //     image: "/assets/auction/fashion.png",
  //     title: "Fashion",
  //   },
  //   {
  //     id: 4,
  //     image: "/assets/auction/lamps.png",
  //     title: "Lamps and Lighting",
  //   },
  //   {
  //     id: 5,
  //     image: "/assets/auction/gift.png",
  //     title: "Gifts and Personal Care",
  //   },
  //   {
  //     id: 6,
  //     image: "/assets/auction/pumpkin.png",
  //     title: "Festive Decorations",
  //   },
  // ];
  return (
    <div className="w-full max-w-[80%] flex flex-col">
      {/* <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="w-full h-full min-h-32 max-h-72 relative overflow-y-visible flex justify-center items-center">
            <img
              className="w-full h-full object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30">
              <h1 className="text-5xl px-12 font-semibold text-white z-10 drop-shadow-md">
                {product.title}
              </h1>
            </div>
            <button className="p-4 z-20 absolute left-0 -bottom-1 bg-secondary-5 text-timeless-white">
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
            </button>
          </div>
        ))}
      </div> */}
             <StoriesCategoryComponentv2 />
    </div>
  );
};
