import Image from "next/image";

export const ImageSlider = () => {
  return (
    <div className="relative w-full h-[calc(100vh-20vh)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/stories-touchpoint/image.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-timeless-white bg-black bg-opacity-40 px-4 md:px-0">
        <div className="flex flex-col items-start justify-center leading-none space-y-4">
          <h1 className="text-21xl md:text-6xl drop-shadow-md font-bold -ml-[5%]">
            STORIES BEHIND
          </h1>
          <div className="w-full md:ml-[28%] text-left">
            <h1 className="text-21xl md:text-6xl drop-shadow-md font-bold">
              FILIPINO DESIGN EXCELLENCE
            </h1>
            <p className="text-base md:text-lg font-light max-w-[700px] mt-4">
              Cover Feature Story: Inviting Natural Home Furnishings are the Heavy Hitters to See from DesignPhilippines in 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
