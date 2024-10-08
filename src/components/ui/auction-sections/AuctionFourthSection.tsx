export const AuctionFourthSection = () => {
  return (
    <div className="w-full flex flex-row max-w-[80%] mx-auto text-primary-2">
      <div className="w-full flex flex-col gap-8 justify-start items-start ">
        <div className="w-full flex flex-col">
          <div className="flex flex-row gap-2 justify-start items-center text-primary-2">
            <p>17 - 19 OCTOBER 2024</p>
            <hr className="w-16 border border-primary-2" />
          </div>
          <h1 className="text-17xl font-semibold leading-tight w-full max-w-xl">
            HOME, FASHION, AND LIFESTYLE TRADE SHOW
          </h1>
        </div>
        <p>
          With the theme{" "}
          <span className="italic text-secondary-5 font-medium">
            Reimagination
          </span>
          , Manila FAME will tweak the old, make the ordinary extra, turn the
          plain into something special, and experience design in a different
          light. The multisensory sourcing show translates the Philippines’
          abundant raw materials into functional lifestyle products and objects.
        </p>
        <button className="py-3 px-6 gap-8 bg-secondary-5 text-timeless-white font-normal flex justify-center items-center">
          Learn More
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
      <div className="w-full flex justify-end items-end ">
        <img src="assets/auction/fame.png" alt="" />
      </div>
    </div>
  );
};
