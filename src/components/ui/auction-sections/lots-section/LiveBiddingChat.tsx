/* eslint-disable @next/next/no-img-element */
"use client";

interface Bidder {
  name: string;
  paddle: string;
  bidAmount: string;
  profileImage: string;
}

interface LiveBiddingChatProps {
  isLive: boolean;
  showTitle?: boolean;
  textColor?: string;
  textBid?: string;
  bidders: Bidder[]; // List of bidders
  maxHeight?: string;
}

export const LiveBiddingChat = ({
  isLive,
  showTitle = true,
  textColor = "text-black", // Default color for text
  textBid = "text-secondary-1", // Default color for bid text
  maxHeight = "max-h-[400px]",
  bidders,
}: LiveBiddingChatProps) => {
  if (!isLive) return null;

  return (
    <div className={`w-full max-w-md font-urbanist ${textColor}`}>
      {showTitle && <h1 className="text-17xl font-semibold">Live Bidding</h1>}
      <div className="pt-4">
        <div className={`w-full h-full overflow-y-auto scroll-none px-8 flex flex-col gap-8 ${maxHeight}`}>
          {bidders.map((bidder, index) => (
            <div
              key={index}
              className="w-full h-fit flex flex-row gap-6 justify-between items-center"
            >
              {/* User Info */}
              <div className="w-full flex gap-2 justify-start items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-200">
                  <img
                    className="w-full h-full object-cover"
                    src={bidder.profileImage}
                    alt={`${bidder.name}`}
                  />
                </div>
                <div className="h-full gap-0.5 flex flex-col justify-start items-start">
                  <p className="font-medium">
                    {bidder.name} (Paddle {bidder.paddle})
                  </p>
                  <p className={`text-xs ${textBid}`}>Bidding ${bidder.bidAmount}</p>
                </div>
              </div>
              <p className="font-[300] opacity-90">${bidder.bidAmount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

