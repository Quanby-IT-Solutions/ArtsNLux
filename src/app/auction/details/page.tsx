import { ExhibitFirstSection } from "@/components/ui/auction-sections/live-exhibit/ExhibitFirstSection";
import { LotsSecondsSection } from "@/components/ui/auction-sections/lots-section/LotsSecondsSection";
import { LotsThirdSection } from "@/components/ui/auction-sections/lots-section/LotsThirdSection";


export default function Details() {
    return (
        <div className="w-full gap-20 flex flex-col pb-20">
        <ExhibitFirstSection showNavigationButtons={false} />
        <LotsSecondsSection />
        <LotsThirdSection />
        </div>
    );
}