import { Furniture } from "./furniture";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection1() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full pt-10 flex flex-col justify-evenly gap-8 text-lg items-center md:items-start tracking-wider md:mt-[110px]">
        <div className="w-full flex justify-end items-end relative">
          <img
            className="h-full w-full max-w-[90%] object-cover"
            src="assets/landing-page/1.png"
            alt=""
          />
          <Furniture />
        </div>
      </div>
    </div>
  );
}
