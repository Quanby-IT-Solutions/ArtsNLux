/* eslint-disable @next/next/no-img-element */
export const ManilaFameFirstSection = () => {
    return (
      <div className="w-full h-[calc(100vh-20vh)] relative border border-black tracking-wide">
        {/* Video background */}
        <div className=" w-full h-full absolute inset-0 z-0">
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src="/assets/auction/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
  
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-timeless-white bg-black bg-opacity-40">
          <div className="flex flex-col justify-center items-start leading-none">
            <h1 className="-ml-[5%] text-21xl md:text-29xl drop-shadow-md font-bold mb-4">
            THE PHILIPPINES’ PREMIER TRADE SHOW
           </h1>
            <div className="ml-[5%] w-full">
              <h1 className="text-21xl md:text-29xl drop-shadow-md font-bold mb-4">
              FOR QUALITY HOME, FASHION AND
            </h1>
            
            </div>
            <h1 className="-ml-[5%] text-21xl md:text-29xl drop-shadow-md font-bold mb-4">
            LIFESTYLE PRODUCTS
           </h1>

           
           <p className="-ml-[5%] text-lg md:text-xl font-[300] max-w-2xl text-left">
              17 - 20 OCTOBER 2024 | 72ND EDITION
            </p>

            <p className="-ml-[5%] text-lg md:text-xl font-[300] max-w-2xl text-left">
            Reimagination: Ordinary into extraordinary  
            </p>


          </div>
        </div>

       

      </div>
      
    );
  };
  