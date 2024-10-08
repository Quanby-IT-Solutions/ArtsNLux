import { SideInfo } from "./side-info";

/* eslint-disable @next/next/no-img-element */
export const LotsFirstSection = () => {
  return (
    <div className="w-full h-full  max-h-dvh overflow-hidden relative">
      <div className="w-full max-w-[90%] h-full">
        <img
          src="/assets/auction/lot/collage.png"
          className="w-full -mt-40 h-full object-contain"
          alt=""
        />
      </div>
      <SideInfo />
    </div>
  );
};
