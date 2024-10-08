"use client";

import Image from "next/image";

const SubscriptionVisuals = () => {
  return (
    <div className="h-full w-full flex justify-center items-center relative">
      <Image className="z-10" src="/assets/about-us/4.png" alt="About Us" width={400} height={300} />
      <Image className="absolute -bottom-24 left-6" src="/assets/about-us/mask.png" alt="Mask" width={200} height={200} />
      <Image className="absolute -top-24 right-6" src="/assets/about-us/mask.png" alt="Mask" width={200} height={200} />
    </div>
  );
};

export default SubscriptionVisuals;
