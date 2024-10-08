'use client';

import Image from 'next/image';

import SectionTopTitle from "@/components/ui/SectionTopTitle";

import { useRouter } from 'next/navigation';
import { VerticaExlText } from "../VerticalText";

export default function LoginSectionTop() {
  const router = useRouter();

  const handleDashboardNavigation = () => {
    router.push('/dashboard');
  };

  return (
    <div className="w-full flex flex-col items-center justify-start tracking-wide">
      <div className="w-full flex flex-col gap-16 items-center justify-center pt-2">

        <SectionTopTitle
          titleSegments={[
            { content: 'ACC' },
            { content: 'E', italic: true, serif: true },
            { content: 'SS YOUR ' },
            { content: 'A', serif: true },
            { content: 'CCOUNT' },
          ]}
        />

        <div className="w-full flex relative mb-4">
          {/* left side */}
          <div className="w-full max-w-[35%] bg-primary-1">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="writing-vertical-rl -ml-[25%] py-4 text-primary-2 font-bold">
                <VerticaExlText text="TRADE BUYERS" />
              </div>
            </div>
          </div>
          {/* right side */}

          <div className="w-full bg-secondary-5 flex justify-end items-center text-timeless-white">
            <div className="w-fit mr-[15%] p-6 flex flex-col gap-4 justify-center items-end">
              <div className="w-full flex flex-row gap-2 justify-end items-center">
                <hr className="w-16 border border-timeless-white" />
                <p>Exhibit With Fame+</p>
              </div>
              <h1 className="text-17xl font-semibold">FOR EXHIBITORS</h1>
              <p className="w-full max-w-lg text-right">
                Manila FAME introduces FAME+, a dynamic digital platform that
                brings Philippine design to a global stage. Register as an
                exhibitor to showcase your home, fashion, and lifestyle
                collections to a worldwide audience, 365 days a year.
              </p>
              <div className="w-full flex flex-col gap-2 justify-center items-end pt-4">
                <button
                  className="p-4 bg-timeless-white text-secondary-5 w-full max-w-96"
                  onClick={handleDashboardNavigation}
                >
                  Take Me To My Dashboard
                </button>
                <p className="text-sm text-right">
                  Don&apos;t have an account yet? <br />{" "}
                  <span className="cursor-pointer hover:text-secondary-5">
                    Click here
                  </span>{" "}
                  to register as a FAME+ exhibitor
                </p>
              </div>
            </div>
          </div>

          <Image
            className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 min-h-fit max-h-[125%] object-cover z-10"
            src="/assets/login/tinanom.png"
            alt="Tinanom"
            width={450}
            height={600}
            priority
          />
        </div>
      </div>
    </div>
  );
}
