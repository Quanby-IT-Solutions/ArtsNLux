import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import { AuctionFirstSection } from "@/components/ui/auction-sections/AuctionFirstSection";
import { AuctionFourthSection } from "@/components/ui/auction-sections/AuctionFourthSection";
import { AuctionSecondSection } from "@/components/ui/auction-sections/AuctionSecondSection";
import { AuctionThirdSection } from "@/components/ui/auction-sections/AuctionThirdSection";
import { Buttons } from "@/components/ui/auction-sections/Buttons";
import Link from "next/link";

export default function Auction() {
  return (
    <div className="w-full flex flex-col justify-center items-center tracking-wide text-lg">
      <section className="w-full py-6 text-timeless-black relative flex justify-center items-center">
        <h1 className="text-[70px] font-bold mx-auto">
          AUCTI<span className="italic font-serif font-medium text-secondary-5">O</span>N +
        </h1>
        <div>
          <Link href={"auction/faqs"} className="p-4 w-32 bg-secondary-1 text-timeless-white font-medium fixed right-0 z-20" >
            FAQ&apos;s
          </Link>
        </div>
      </section>
      <AuctionFirstSection />
      <section className="w-full flex flex-row gap-4 justify-center items-center py-16 mt-4">
        <Buttons />
      </section>
      <section className="w-full relative text-primary-2 flex flex-col justify-center items-center">
        <div className=" absolute top-[5%] left-[55%] -translate-x-1/2 z-20">
          <a
            href="#"
            className="text-lg font-[300] uppercase text-secondary-5 flex"
          >
            View all{" "}
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
          </a>
          <h1 className="text-17xl uppercase font-semibold">
            <span className="font-serif">U</span>pcoming aucti
            <span className="font-serif">o</span>ns
          </h1>
        </div>
        <AuctionSecondSection />
      </section>
      <section className="w-full flex flex-col justify-center items-center py-16">
        <div className="w-full max-w-[80%]  pb-16">
          <div className="flex flex-row gap-2 justify-start items-center text-primary-2">
            <p>Browse Products</p>
            <hr className="w-16 border border-primary-2" />
          </div>
          <h1 className="text-17xl font-semibold text-primary-2">
            AV<span className="font-serif italic font-medium">A</span>ILABLE F
            <span className="font-serif italic font-medium">O</span>R IMMEDIATE
            <span className="font-serif font-medium"> P</span>URCHASE
          </h1>
        </div>
        <AuctionThirdSection />


      </section>
      <section className="w-full h-[calc(100vh-10vh)] flex justify-center items-center py-16 pb-24">
        <AuctionFourthSection />
      </section>
      <section className="w-full py-16 bg-secondary-1">
        <Services
          textColor="text-timeless-white"
          hrColor="border-timeless-white"
          // bgColor="bg-timeless-white"
          inputBorderColor="border-timeless-white"
          placeHolderColor="text-timeless-white"
          outlineColor="outline-secondary-1"
          buttonBgColor="bg-timeless-white"
          buttonTextColor="text-secondary-1"
        />
      </section>
      <section className="w-full">
        <Reviews />
      </section>
    </div>
  );
}
