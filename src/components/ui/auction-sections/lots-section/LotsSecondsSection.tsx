/* eslint-disable @next/next/no-img-element */
import { Share } from "next/font/google";
import { LiveBiddingChat } from "./LiveBiddingChat";

export const LotsSecondsSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-full max-w-[80%] items-center justify-center gap-8 relative">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <p className="font-urbanist font-normal text-primary-2 text-17xl">
              <span className="font-bold">L</span>
              <span className="italic font-serif">O</span>
              <span className="font-bold">T DET</span>
              <span className="italic font-serif">A</span>
              <span className="font-bold">ILS</span>
            </p>
            <div className="flex items-center gap-2.5 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
              >
                <path
                  d="M18.4987 34.4163C27.0131 34.4163 33.9154 27.5141 33.9154 18.9997C33.9154 10.4853 27.0131 3.58301 18.4987 3.58301C9.98431 3.58301 3.08203 10.4853 3.08203 18.9997C3.08203 27.5141 9.98431 34.4163 18.4987 34.4163Z"
                  stroke="#6A704C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.0134 27.4024C18.7359 27.4949 18.258 27.4949 17.9805 27.4024C15.5755 26.5853 10.1797 23.1474 10.1797 17.3199C10.1797 14.7453 12.2455 12.6641 14.8047 12.6641C16.3155 12.6641 17.6568 13.3886 18.5047 14.5295C19.3372 13.404 20.6938 12.6641 22.2047 12.6641C24.7638 12.6641 26.8297 14.7453 26.8297 17.3199C26.8297 23.1474 21.4338 26.5853 19.0134 27.4024Z"
                  stroke="#6A704C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="w-8 h-8 flex items-center justify-center bg-secondary-5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                >
                  <path
                    d="M18.0429 11.9366C17.7104 11.9366 17.4304 11.6828 17.3867 11.3503C17.1767 9.3728 16.1092 7.57905 14.4642 6.44155C14.1667 6.23155 14.0967 5.82905 14.2979 5.53155C14.5079 5.23405 14.9192 5.16405 15.2079 5.3653C17.1679 6.72155 18.4279 8.85655 18.6817 11.2103C18.7167 11.5691 18.4629 11.8928 18.0954 11.9366C18.0867 11.9366 18.0604 11.9366 18.0429 11.9366Z"
                    fill="white"
                  />
                  <path
                    d="M3.05391 11.9803C3.02766 11.9803 3.01016 11.9803 2.98391 11.9803C2.62516 11.9366 2.36266 11.6128 2.39766 11.2541C2.63391 8.90035 3.88516 6.7741 5.81891 5.40035C6.11641 5.19035 6.52766 5.26035 6.73766 5.55785C6.94766 5.85535 6.87766 6.2666 6.58016 6.4766C4.95266 7.62285 3.90266 9.4166 3.70141 11.3941C3.67516 11.7266 3.38641 11.9803 3.05391 11.9803Z"
                    fill="white"
                  />
                  <path
                    d="M10.5525 20.2837C9.25747 20.2837 8.02372 19.9862 6.86872 19.4087C6.54497 19.2425 6.41372 18.8487 6.57997 18.525C6.74622 18.2012 7.13997 18.07 7.46372 18.2362C9.35372 19.19 11.6287 19.2075 13.5362 18.2887C13.86 18.1312 14.2537 18.2712 14.4112 18.595C14.5687 18.9187 14.4287 19.3125 14.105 19.47C12.985 20.0125 11.795 20.2837 10.5525 20.2837Z"
                    fill="white"
                  />
                  <path
                    d="M10.5536 7.88453C8.84734 7.88453 7.46484 6.50203 7.46484 4.79578C7.46484 3.08953 8.84734 1.70703 10.5536 1.70703C12.2598 1.70703 13.6423 3.08953 13.6423 4.79578C13.6423 6.50203 12.2511 7.88453 10.5536 7.88453ZM10.5536 3.02828C9.57359 3.02828 8.77734 3.82453 8.77734 4.80453C8.77734 5.78453 9.57359 6.58078 10.5536 6.58078C11.5336 6.58078 12.3298 5.78453 12.3298 4.80453C12.3298 3.82453 11.5248 3.02828 10.5536 3.02828Z"
                    fill="white"
                  />
                  <path
                    d="M4.22547 18.5867C2.51922 18.5867 1.13672 17.2042 1.13672 15.4979C1.13672 13.8004 2.51922 12.4092 4.22547 12.4092C5.93172 12.4092 7.31422 13.7917 7.31422 15.4979C7.31422 17.1954 5.93172 18.5867 4.22547 18.5867ZM4.22547 13.7217C3.24547 13.7217 2.44922 14.5179 2.44922 15.4979C2.44922 16.4779 3.24547 17.2742 4.22547 17.2742C5.20547 17.2742 6.00172 16.4779 6.00172 15.4979C6.00172 14.5179 5.20547 13.7217 4.22547 13.7217Z"
                    fill="white"
                  />
                  <path
                    d="M16.7723 18.5867C15.0661 18.5867 13.6836 17.2042 13.6836 15.4979C13.6836 13.8004 15.0661 12.4092 16.7723 12.4092C18.4786 12.4092 19.8611 13.7917 19.8611 15.4979C19.8523 17.1954 18.4698 18.5867 16.7723 18.5867ZM16.7723 13.7217C15.7923 13.7217 14.9961 14.5179 14.9961 15.4979C14.9961 16.4779 15.7923 17.2742 16.7723 17.2742C17.7523 17.2742 18.5486 16.4779 18.5486 15.4979C18.5398 14.5179 17.7523 13.7217 16.7723 13.7217Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button className="border border-secondary-5 text-secondary-5 hover:bg-secondary-5 hover:text-timeless-white duration-300 px-4 py-2.5 flex items-center justify-center">
              Terms & Conditions
            </button>
            <button className="bg-secondary-5  text-timeless-white border border-white hover:border-secondary-5 hover:bg-white hover:text-secondary-5 duration-300 px-4 py-2.5 flex items-center justify-center">
              Auction Rules
            </button>
          </div>
        </div>
        <div className="w-full flex gap-20 overflow-hidden">
          <div className="flex flex-col items-start gap-8 w-full">
            <p className="text-xl text-primary-2 font-urbanist">
              <span className="font-bold">Description</span>
              <br />
              <span className="font-medium">LUXURY BAGS</span>
            </p>
            <p className="text-xl text-primary-2 font-urbanist">
              <span className="font-bold">Catalogue Note</span>
              <br />
              <span className="font-medium">
                Elegance, function, and style. When one thinks of the Filipino
                brand Mele + Marie, these are the qualities that spring to mind.
                The company has been making accessories and minaudieres with
                thoughtful narratives and avant-garde concepts since its modest
                beginnings. Each handmade and timeless piece tells a life story
                through wearable art.
                <br />
                <br />
                According to designer Rome Oamil, the second-generation owner of
                Mele + Marie, the Emman Clutch was inspired by the story of
                David and Goliath. “The story that we want to impart is that no
                matter how big your enemy or problem is in life, you have the
                ability to go through it and remain victorious.”
                <br />
                <br />
                Rome shared that their dedication to their customers drives them
                to create something that is distinct yet familiar. The bag is
                made of abalone shell wrapped in 24-k gold-dipped metal. Its
                shape and mold–from the base shell to the textured gold-plated
                metal, are made by hand. Its curved enclosure is intricately and
                uniquely welded to form uneven waves around its body. A
                departure from the brand&apos;s usual, the finishing touch is a
                curved handle made of shell.
                <br />
                <br />
                The original concept, fine artistry, and attention to detail
                that went into the making of the Emman Clutch didn&apos;t go
                unnoticed. In the last edition of Manila FAME 2023, it won the
                Katha Award for Best Product Design for Fashion.
                <br />
                <br />
                Set to once again captivate the market, Mele + Marie has an
                upcoming collection to be released in Spring 2024. Learn more by
                visiting their <br />
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline"
                >
                  FAME+ storefront
                </a>
                .
              </span>
            </p>
          </div>
          {/* if true there is ongoing bidding or false  */}
          <LiveBiddingChat isLive={true} bidders={bidders}  />
        </div>
      </div>
    </div>
  );
};


const bidders = [
  {
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },
  {
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },  {
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },  {
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },
  {
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },{
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },{
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },{
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },{
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },{
    name: "John Doe",
    paddle: "Paddle 1",
    bidAmount: "2,000",
    profileImage: "/assets/auction/jane.png",
  },
];


