/* eslint-disable @next/next/no-img-element */
interface ExhibitFirstSectionProps {
  showNavigationButtons: boolean;
  showPlaceBidButton?: boolean;
  countdownText?: string; // Add this line
  currentBid?: string; // Add this line
}
export const ExhibitFirstSection: React.FC<ExhibitFirstSectionProps> = ({
  showNavigationButtons,
  showPlaceBidButton,
  countdownText,
  currentBid
}) => {
  return (
    <div className="w-full h-screen flex text-xl font-urbanist tracking-wide">
      {/* left */}
      <div className="w-full h-full bg-secondary-6 bg-opacity-50 flex justify-center items-center relative">
        <div className="ml-[10%] w-full max-w-md h-[60%]">
          <img
            className="w-full h-full object-cover"
            src="/assets/auction/live.png"
            alt=""
          />
        </div>
        <div className="w-fit h-full flex flex-col gap-8 justify-center items-center absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-20 h-20 bg-gray-200">{/* image option here */}</div>
          <div className="w-20 h-20 bg-gray-200">{/* image option here */}</div>
          <div className="w-20 h-20 bg-gray-200">{/* image option here */}</div>
        </div>
      </div>
      {/* right */}
      <div className="w-full h-full text-primary-2">
        <div className="px-[10%] py-[8%] w-full h-full">
          <div className="w-full h-full flex flex-col gap-6">
            {/* Conditionally render navigation buttons */}
            {showNavigationButtons && (
              <div className="flex flex-row items-center justify-start gap-4 -ml-2">
                <button
                  className="flex items-center justify-center p-2 border-none bg-transparent cursor-pointer"
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
                  aria-label="Next Page"
                >
                  <img
                    src="/assets/stories-touchpoint/stories-svg/next.svg"
                    alt="Next"
                    className="h-6"
                  />
                </button>
              </div>
            )}

            <h1 className="text-17xl font-extrabold max-w-sm w-full pt-2 leading-tight">
              2. Emman Clutch from the Basket Collection
            </h1>
            <p className="text-xl font-urbanist">Melecio and Rosemarie Oamil</p>

            <p className="w-full max-w-xs opacity-95">
              Handmade Gold-plated Brass Luxury Handbag Width & Height: 12 x 8
              in. Depth: 4 in.
            </p>
            <p className="w-full max-w-xl opacity-95">
              Inspired by the story of David and Goliath. “The story that we
              want to impart is that no matter how big your enemy or problem is
              in life, you have the ability to go through it and remain
              victorious.”
            </p>
            <hr className="opacity-35 w-full max-w-xl" />

            {/* Countdown Section */}
            <div className="w-full flex flex-col gap-1.5">
                <p>
                  <span className="text-5xl font-bold capitalize">$ 1,100</span> / {currentBid}
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="vuesax/outline/truck">
                      <g id="truck">
                        <path
                          id="Vector"
                          d="M9.1996 9.83301H0.94193C0.634143 9.83301 0.378906 9.60634 0.378906 9.33301V3.99967C0.378906 2.25301 1.97789 0.833008 3.94472 0.833008H10.701C11.0088 0.833008 11.264 1.05967 11.264 1.33301V7.99967C11.264 9.01301 10.3407 9.83301 9.1996 9.83301ZM1.50495 8.83301H9.1996C9.71759 8.83301 10.138 8.45967 10.138 7.99967V1.83301H3.94472C2.60097 1.83301 1.50495 2.80634 1.50495 3.99967V8.83301Z"
                          fill="#2B271E"
                        />
                        <path
                          id="Vector_2"
                          d="M13.7038 13.833H12.9531C12.6453 13.833 12.3901 13.6063 12.3901 13.333C12.3901 12.873 11.9697 12.4997 11.4517 12.4997C10.9337 12.4997 10.5133 12.873 10.5133 13.333C10.5133 13.6063 10.2581 13.833 9.9503 13.833H6.94751C6.63973 13.833 6.38449 13.6063 6.38449 13.333C6.38449 12.873 5.9641 12.4997 5.44612 12.4997C4.92813 12.4997 4.50774 12.873 4.50774 13.333C4.50774 13.6063 4.25251 13.833 3.94472 13.833H3.19402C1.64008 13.833 0.378906 12.713 0.378906 11.333V9.33301C0.378906 9.05967 0.634143 8.83301 0.94193 8.83301H9.1996C9.71759 8.83301 10.138 8.45967 10.138 7.99967V3.33301C10.138 3.05967 10.3932 2.83301 10.701 2.83301H12.0823C12.8255 2.83301 13.5086 3.18635 13.8765 3.75968L15.1601 5.75301C15.2577 5.90634 15.2577 6.09968 15.1601 6.25301C15.0626 6.40634 14.8749 6.49967 14.6722 6.49967H13.7038C13.5987 6.49967 13.5161 6.57301 13.5161 6.66634V8.66634C13.5161 8.75967 13.5987 8.83301 13.7038 8.83301H15.9559C16.2637 8.83301 16.5189 9.05967 16.5189 9.33301V11.333C16.5189 12.713 15.2577 13.833 13.7038 13.833ZM13.441 12.833H13.7038C14.6347 12.833 15.3929 12.1597 15.3929 11.333V9.83301H13.7038C12.9831 9.83301 12.3901 9.30634 12.3901 8.66634V6.66634C12.3901 6.02634 12.9756 5.49967 13.7038 5.49967L12.9005 4.25301C12.7354 3.99301 12.4201 3.83301 12.0823 3.83301H11.264V7.99967C11.264 9.01301 10.3407 9.83301 9.1996 9.83301H1.50495V11.333C1.50495 12.1597 2.26316 12.833 3.19402 12.833H3.45677C3.7045 12.0663 4.50024 11.4997 5.44612 11.4997C6.392 11.4997 7.18773 12.0663 7.43546 12.833H9.46984C9.71758 12.0663 10.5133 11.4997 11.4592 11.4997C12.4051 11.4997 13.1933 12.0663 13.441 12.833Z"
                          fill="#2B271E"
                        />
                        <path
                          id="Vector_3"
                          d="M5.44723 15.1667C4.30617 15.1667 3.38281 14.3467 3.38281 13.3333C3.38281 12.32 4.30617 11.5 5.44723 11.5C6.58829 11.5 7.51165 12.32 7.51165 13.3333C7.51165 14.3467 6.58829 15.1667 5.44723 15.1667ZM5.44723 12.5C4.92925 12.5 4.50886 12.8733 4.50886 13.3333C4.50886 13.7933 4.92925 14.1667 5.44723 14.1667C5.96521 14.1667 6.3856 13.7933 6.3856 13.3333C6.3856 12.8733 5.96521 12.5 5.44723 12.5Z"
                          fill="#2B271E"
                        />
                        <path
                          id="Vector_4"
                          d="M11.4511 15.1667C10.3101 15.1667 9.38672 14.3467 9.38672 13.3333C9.38672 12.32 10.3101 11.5 11.4511 11.5C12.5922 11.5 13.5156 12.32 13.5156 13.3333C13.5156 14.3467 12.5922 15.1667 11.4511 15.1667ZM11.4511 12.5C10.9332 12.5 10.5128 12.8733 10.5128 13.3333C10.5128 13.7933 10.9332 14.1667 11.4511 14.1667C11.9691 14.1667 12.3895 13.7933 12.3895 13.3333C12.3895 12.8733 11.9691 12.5 11.4511 12.5Z"
                          fill="#2B271E"
                        />
                        <path
                          id="Vector_5"
                          d="M15.9564 9.83333H13.7043C12.9837 9.83333 12.3906 9.30667 12.3906 8.66667V6.66667C12.3906 6.02667 12.9837 5.5 13.7043 5.5H14.6728C14.8754 5.5 15.0631 5.59334 15.1607 5.75334L16.4444 7.75334C16.4894 7.82667 16.5195 7.91333 16.5195 8V9.33333C16.5195 9.60667 16.2642 9.83333 15.9564 9.83333ZM13.7043 6.5C13.5992 6.5 13.5167 6.57333 13.5167 6.66667V8.66667C13.5167 8.76 13.5992 8.83333 13.7043 8.83333H15.3934V8.13334L14.3424 6.5H13.7043Z"
                          fill="#2B271E"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Taguig, Manila, Philippines</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="vuesax/outline/clock">
                      <g id="clock">
                        <path
                          id="Vector"
                          d="M8.9609 15.1663C4.51988 15.1663 0.910156 11.953 0.910156 7.99967C0.910156 4.04634 4.51988 0.833008 8.9609 0.833008C13.4019 0.833008 17.0116 4.04634 17.0116 7.99967C17.0116 11.953 13.4019 15.1663 8.9609 15.1663ZM8.9609 1.83301C5.14148 1.83301 2.03352 4.59967 2.03352 7.99967C2.03352 11.3997 5.14148 14.1663 8.9609 14.1663C12.7803 14.1663 15.8883 11.3997 15.8883 7.99967C15.8883 4.59967 12.7803 1.83301 8.9609 1.83301Z"
                          fill="#2B271E"
                        />
                        <path
                          id="Vector_2"
                          d="M11.7386 10.6202C11.6413 10.6202 11.5439 10.6002 11.454 10.5468L9.13244 9.3135C8.55578 9.00684 8.12891 8.3335 8.12891 7.74017V5.00684C8.12891 4.7335 8.38353 4.50684 8.69059 4.50684C8.99764 4.50684 9.25227 4.7335 9.25227 5.00684V7.74017C9.25227 7.98017 9.47694 8.3335 9.7091 8.4535L12.0307 9.68684C12.3003 9.82684 12.3827 10.1335 12.2254 10.3735C12.1131 10.5335 11.9259 10.6202 11.7386 10.6202Z"
                          fill="#2B271E"
                        />
                      </g>
                    </g>
                  </svg>
                  {/* countdown */}
                  <span className="text-normal first-letter:capitalize">{countdownText}</span>
                </p>
              </div>

            {/* Conditionally render Place Bid button */}
            {showPlaceBidButton && (
              <button className="uppercase p-3 w-44 text-timeless-white bg-secondary-5 font-medium">
                Place bid
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
