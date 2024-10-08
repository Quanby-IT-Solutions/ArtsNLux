import { LotSideDetails } from "./LotSideDetails";

/* eslint-disable @next/next/no-img-element */
export const LotDetails = () => {
  return (
    <div className="w-full h-full max-h-dvh overflow-hidden relative">
      <div className="w-full h-full">
      <div className="-ml-[10%] w-full h-full absolute inset-0 bg-black opacity-40"></div>
        <img
          src="/assets/auction/live-auction.png"
          className="w-full h-full -ml-[10%] object-cover"
          alt=""
        />
        
      </div>
      <LotSideDetails />
    </div>
  );
};
