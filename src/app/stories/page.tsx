import Image from "next/image";
import { ImageSlider } from "@/components/ui/stories-touchpoint-section/stories-image-slider";
import YourEmail from "@/components/ui/stories-touchpoint-section/stories-your-email";
import SubscriptionServiceComponent from "@/components/ui/subscription/SubscriptionServiceComponent";
import StoriesCategoryComponentv2 from "@/components/ui/stories-touchpoint-section/stories-categoriesv2";

export default function Root() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className="w-full py-6 text-timeless-black flex justify-center items-center relative">
        <Image
          className="object-cover"
          alt="Titlepoint"
          src="/assets/stories-touchpoint/pointtitle.png"
          width={500}
          height={300}
          quality={75}
        />
        <button className="p-4 w-32 bg-secondary-1 text-timeless-white font-medium fixed right-0 z-20">
          FaQ&apos;s
        </button>
      </section>
      <ImageSlider />
      <div className="w-full max-w-[80%] flex flex-col py-40">
        <StoriesCategoryComponentv2 />
      </div>
      <YourEmail />
      <SubscriptionServiceComponent />
    </div>
  );
}
