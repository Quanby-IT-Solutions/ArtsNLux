/* eslint-disable @next/next/no-img-element */
import { ManilaFameFirstSection } from "@/components/ui/manilaFame-sections/ManilaFameFirstSection";
import { Buttons } from "@/components/ui/auction-sections/Buttons";
import ManilaFameSecondSection from "@/components/ui/manilaFame-sections/ManilaFameSecondSection";
import ManilaFameThirdSection from "@/components/ui/manilaFame-sections/ManilaFameThirdSection";
import ManilaFameFourthSection from "@/components/ui/manilaFame-sections/FourthSection/ManilaFameFourthSection";

export default function ManilaFame() {
  return (
    <div className="w-full flex flex-col justify-center items-center tracking-wide text-lg">
      <div className="w-full py-6 text-timeless-black relative flex justify-center items-center">
        <div className="flex items-center space-x-6">
          <h1 className="text-[70px] font-bold font-urbanist">MANILA</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/814e4b7518aaed6c098d36c60f247bea17d91cf2d64281abb67edf47d8f3b56e?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106"
            className="object-contain max-w-full aspect-[4.85] w-[250px]"
            alt="Company logo"
          />
        </div>
        <div>
          <button className="p-4 w-32 bg-secondary-1 text-timeless-white font-medium fixed right-0 z-20">
            FaQ&apos;s
          </button>
        </div>
      </div>

      {/*  Page Video #1 */}

      <ManilaFameFirstSection />

      {/* Page Image #1 */}

      <div className="flex px-20 py-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbac6c55ef112628a55047bc2b04ab2251295ce2c53122561d01a6e24b9ae5fe?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
          alt=""
          className="object-contain w-full aspect-[2.35]"
        />
      </div>

      {/* End Page Image #1 */}

      <ManilaFameSecondSection />

      <ManilaFameThirdSection />

      <ManilaFameFourthSection />
    </div>
  );
}
