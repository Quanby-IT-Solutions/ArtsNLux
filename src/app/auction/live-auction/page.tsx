import { AuctionSecondSection } from "@/components/ui/auction-sections/AuctionSecondSection";
import { ExhibitFirstSection } from "@/components/ui/auction-sections/live-exhibit/ExhibitFirstSection";
import { LotDetails } from "@/components/ui/auction-sections/live-exhibit/LotDetails";

export default function LiveAuction() {
  return (
    <div className="w-full pb-24">
      <LotDetails />
      <div className="pb-12">
        <ExhibitFirstSection
          showNavigationButtons={false}
          showPlaceBidButton={false}
          countdownText="ends in 59s"
          currentBid="current highest bid"
        />
      </div>

      <div className="py-12">
        <AuctionSecondSection />
      </div>
    </div>
  );
}
