import TouchPoint from '@/components/home/TouchPoint/TouchPoint';
import Footer from '@/components/layouts/footer/Footer';
import FooterContainer from '@/components/layouts/footer/FooterContainer';
import Header from '@/components/layouts/header/Header';
import AuctionHeader from '@/components/ui/auction-sections/AuctionHeader';
import HeroSection from '@/components/ui/hero-section/HeroSection';
import HeroSection1 from '@/components/ui/hero-section/HeroSection1';
import PlusFeatures from '@/components/ui/PlusFeatures';
import SubscriptionServiceComponent from '@/components/ui/subscription/SubscriptionServiceComponent';
import FeatureSection from '@/components/features/features';
export default function Home() {
  return (
    <div className='flex-grow w-full h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory'>
      <div className="bg-[#F4F4F2] sticky top-0 z-30">
        <Header />
        </div>
        <section className="h-screen snap-start">
          <HeroSection />
        </section>
        <section className="h-screen snap-start">
          <HeroSection1 />
        </section>
        <section className="h-screen snap-start">
          <TouchPoint />
        </section>
        <section className="h-screen snap-start">
          {/* <SubscriptionServiceComponent /> */}
          <FeatureSection />
        </section>
        <section className="h-screen snap-start">
          <AuctionHeader upcomingAuctions={upcomingAuctions} />
        </section>
        <section className="h-screen snap-start">
          <PlusFeatures />
        </section>
        <section className="h-screen snap-start">
          <div className="pt-[500px]">
          <FooterContainer/>
          </div>
        </section>
    </div>
  );
}

const upcomingAuctions = [
  {
    id: 1,
    image: "/assets/auction/earings.png",
    title: "Earings 4",
    venue: "MJORIAN",
    button: "BID",
    inlineSize: 350,
    blockSize: 350,
  },
  {
    id: 2,
    image: "/assets/auction/painting.png",
    title: "ZZ Runner",
    venue: "Weave Manila Inc.",
    button: "BID",
    inlineSize: 350,
    blockSize: 350,
  },
  {
    id: 3,
    image: "/assets/auction/1.png",
    title: "MELE + MARIE",
    venue: "2-3 SEPTEMBER 2024 | CEBU",
    button: "View Auction",
    estimate: "",
    startingBid: "",
    inlineSize: 350,
    blockSize: 350,
  },
  {
    id: 4,
    image: "/assets/auction/2.png",
    title: "Agsam Fashion Fern",
    venue: "15-22 OCTOBER 2024 | TAGUIG",
    button: "View Auction",
    estimate: "",
    startingBid: "",
    inlineSize: 350,
    blockSize: 350,
  },
  {
    id: 5,
    image: "/assets/auction/fashion.png",
    title: "Aishe Fashion",
    venue: "23 DECEMBER 2024 | MAKATI",
    button: "View Auction",
    estimate: "",
    startingBid: "",
    inlineSize: 350,
    blockSize: 350,
  },
  {
    id: 6,
    image: "/assets/auction/candles.png",
    title: "Scented Candles",
    venue: "Alice Blue",
    button: "View Auction",
    estimate: "",
    startingBid: "",
    inlineSize: 350,
    blockSize: 350,
  },
  {
    id: 7,
    image: "/assets/auction/alda.png",
    title: "The Alda Top in Stratus",
    venue: "A Las Siesta",
    button: "BID",
    estimate: "",
    startingBid: "",
    inlineSize: 350,
    blockSize: 350,
  },
];
