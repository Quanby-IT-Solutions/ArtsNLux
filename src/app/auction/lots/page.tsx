import { LotsFirstSection } from "@/components/ui/auction-sections/lots-section/LotsFirstSection";
import { LotsSecondsSection } from "@/components/ui/auction-sections/lots-section/LotsSecondsSection";
import { LotsThirdSection } from "@/components/ui/auction-sections/lots-section/LotsThirdSection";

/* eslint-disable @next/next/no-img-element */
export default function Lots() {
  return (
    <section className="w-full flex flex-col gap-20 pb-20">
      <div className="w-full">
        <LotsFirstSection />
      </div>
      <div className="w-full">
        <LotsSecondsSection />
      </div>
      <div className="w-full">
        <LotsThirdSection />
      </div>
    </section>
  );
}
