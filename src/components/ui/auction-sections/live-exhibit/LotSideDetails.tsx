import { LiveBiddingChat } from "../lots-section/LiveBiddingChat";

export const LotSideDetails = () => {
  return (
    <div className="w-full text-lg font-urbanist max-w-2xl flex flex-col justify-center items-center absolute right-0 top-1/2 transform -translate-y-1/2 h-4/5">
      {/* top */}
      <div className="w-full h-full max-h-96 overflow-y-auto">
        <LiveBiddingChat
          isLive={true}
          showTitle={false}
          bidders={bidders}
          maxHeight="max-h-[350px]"
          textBid="text-timeless-white"
          textColor="text-timeless-white"
        />
      </div>
      <div className=" max-h-[75%] w-full flex items-center justify-center h-[50%] bg-primary-1 bg-opacity-90 text-primary-2">
        <div className="w-full max-w-md flex flex-col justify-start items-start gap-1.5">
          <div className="w-full flex justify-between items-center ">
            <div className="h-fit w-fit flex gap-2 justify-center items-center">
              <p>Lot 2 </p>
              <hr className="w-16" />
            </div>
            <p>4 bids</p>
          </div>
          <h1 className="text-5xl font-bold">
            $1,950{" "}
            <span className="font-normal text-base">/ Current Highest Bid</span>
          </h1>
          <p>The bid is yours</p>
          <div className="py-4 w-full">
            <button className="py-2 w-full bg-secondary-5 text-timeless-white">
              BID $2,000
            </button>
          </div>
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
];
