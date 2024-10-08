export const AuctionFirstSection = () => {
  return (
    <div className="w-full h-[calc(100vh-20vh)] relative border border-black tracking-wide">
      {/* Video background */}
      <div className=" w-full h-full absolute inset-0 z-0">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src="/assets/auction/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-timeless-white bg-black bg-opacity-40">
        <div className="flex flex-col justify-center items-start leading-none">
          <h1 className="-ml-[5%] text-21xl md:text-29xl drop-shadow-md font-bold mb-4">
            CLAIM THE EXTRAORDINARY
          </h1>
          <div className="ml-[5%] w-full">
            <h1 className="text-21xl md:text-29xl drop-shadow-md font-bold mb-4">
              ELEVATE YOUR COLLECTION WITH FAME
            </h1>
            <p className="text-lg md:text-xl font-[300] max-w-2xl text-left">
              Bid on unique pieces from top Philippine designers. Celebrate
              craftsmanship and take home something truly special!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
