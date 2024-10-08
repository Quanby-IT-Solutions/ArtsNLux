import Image from "next/image";
import Footer from "@/components/ui/subscription/SubscriptionServiceComponent";

export default function AboutUs() {
  return (
    <section className="w-full h-fit text-primary-2 text-lg font-[300]">
      <div className="w-full h-full flex flex-col gap-20">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

const FirstSection = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-8 items-center py-8">
      <div className="w-full max-w-[80%] flex flex-col gap-10">
        <h1 className="text-18xl font-bold text-center">About Us</h1>
        <div className="pb-12 w-full flex flex-row justify-center items-center gap-6 text-secondary-5">
          <Buttons />
        </div>
        <div className="w-full font-[300]">
          <div className="flex flex-row gap-2 justify-start items-center">
            <p>FAME+</p>
            <hr className="w-16 border border-primary-2" />
          </div>
          <div className="w-full flex flex-row justify-center pb-8">
            <FirstDiv />
            <div className="w-full flex justify-end items-end">
              <Image
                className="object-cover"
                src="/assets/about-us/1.png"
                alt="About Us Image 1"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p>
              FAME+ is published by the Center for International Trade Expositions & Missions (CITEM).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Buttons = () => {
  const buttonNames = ["FAME+", "Manila FAME", "CITEM"];
  return (
    <>
      {buttonNames.map((name, index) => (
        <button
          key={index}
          type="button"
          className="px-4 py-1.5 w-full min-w-52 max-w-52 z-10 border border-secondary-5 text-secondary-5 hover:bg-secondary-5 hover:text-timeless-white duration-300"
        >
          About {name}
        </button>
      ))}
    </>
  );
};

const FirstDiv = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-10 tracking-wide">
      <h1 className="text-13xl font-bold">PHILIPPINE DESIGN <br /> AND BEYOND</h1>
      <p>
        FAME+ is the ultimate digital sourcing and storytelling platform for Philippine quality home, fashion, and lifestyle products.
      </p>
      <p>
        FAME+ enables Philippine brands and manufacturers to generate leads and reach global buyers through the content creation, learning opportunities, and B2B capabilities. It intends to ensure and improve the discoverability of exhibitors online, creating a community of exhibitors, buyers, and stakeholders in one digital space.
      </p>
      <div>
        <p>Official website: <a href="#">https://fameplus.com/</a></p>
        <p>Facebook: <a href="#">ManilaFAMEofficial</a></p>
        <p>Twitter: <a href="#">@TheManilaFAME</a></p>
        <p>Instagram: <a href="#">@ManilaFame</a></p>
        <p>Pinterest: <a href="#">@ManilaFAME</a></p>
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-full max-w-[80%] flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-row justify-start items-start pb-6">
          <div className="w-full">
            <Image
              className="object-cover"
              src="/assets/about-us/2.png"
              alt="About Us Image 2"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-row gap-2 justify-start items-center">
              <p>MANILA FAME</p>
              <hr className="w-16 border border-primary-2" />
            </div>
            <SecondDiv />
          </div>
        </div>
        <div>
          <p className="w-full max-w-screen-md text-center">
            Manila FAME is a member of the Union des Foires Internationales (UFI) and is organized by the Center for International Trade Expositions and Missions (CITEM).
          </p>
        </div>
      </div>
    </div>
  );
};

const SecondDiv = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 tracking-wide">
      <h1 className="text-13xl font-bold max-w-md leading-snug">
        THE PHILIPPINES PREMIER DESIGN AND LIFESTYLE EVENT
      </h1>
      <p>
        Manila FAME is the Philippines’ premier trade show for quality home, fashion, and lifestyle products.
      </p>
      <p>
        Since 1983, it has been supporting and showcasing Philippine MSMEs and artisan communities from the home, fashion and lifestyle sectors through various capacity-building efforts, collaborations with international design figures, and networking activities with buyers from around the world.
      </p>
      <p>
        Together with FAME+ (fameplus.com), Manila FAME continues to promote the craft of the artisan to even more markets in the digital sphere.
      </p>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-full max-w-[80%] flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-row justify-start items-start">
          <div className="w-full flex flex-col gap-8">
            <ThirdDiv />
          </div>
          <div className="w-full flex justify-end items-center">
            <Image
              className="object-cover"
              src="/assets/about-us/3.png"
              alt="About Us Image 3"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdDiv = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-6 tracking-wide">
      <Image className="pb-4" src="/assets/about-us/dti.png" alt="DTI Logo" width={200} height={200} />
      <p>
        The Center for International Trade Expositions and Missions (CITEM) is the export promotion arm of the Philippine Department of Trade and Industry (DTI)
      </p>
      <p>
        CITEM is committed to developing, nurturing, and promoting globally-competitive small and medium enterprises (SMEs), exporters, designers, and manufacturers by implementing an integrated approach to export marketing in partnership with other government and private entities.
      </p>
      <p>
        For three decades, CITEM has established the country’s image as the premier destination for quality export products and services. It continues to set the highest standards of creativity, excellence and innovation to achieve export competitiveness in the international market.
      </p>
    </div>
  );
};
