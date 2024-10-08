/* eslint-disable @next/next/no-img-element */
import VerticalText from "../VerticalText";

export default function LoginFirstSection() {
  return (
    <div className="w-full  flex flex-col items-center justify-start tracking-wide">
      <div className=" w-full flex flex-col gap-16 items-center justify-center pt-2 ">
        <h1 className="text-17xl font-semibold">
          ACC<span className="italic font-serif font-medium">E</span>SS YOUR{" "}
          <span className=" font-serif">A</span>CCOUNT
        </h1>
        <div className="w-full flex relative mb-4 ">
          {/* left side  */}
          <div className="w-full bg-primary-1 flex justify-center items-center">
            <div className=" w-fit mr-[15%] p-6 flex flex-col gap-4 justify-center items-start">
              <div className="w-full flex flex-row gap-2 justify-start items-center">
                <p>Source the best Philippine designs on FAME+</p>
                <hr className="w-16 border border-primary-2" />
              </div>
              <h1 className="text-17xl font-semibold">FOR TRADE BUYERS</h1>
              <p className="w-full max-w-xl">
                Well-loved onsite show Manila FAME kicks off a new digital
                experience. FAME+, Manila FAME’s digital trade platform, is
                the new stage for Philippine design to reach a wider global
                audience. FAME+ is your newest avenue to source home, fashion,
                and lifestyle products beyond the limits of space and time.
              </p>
              <div className="w-full flex flex-col gap-2">
                <button className="p-4 bg-secondary-5 text-timeless-white w-full max-w-96">
                  Login As A Trade Buyer
                </button>
                <p className="text-sm">
                  Don&apos;t have an account yet? <br />{" "}
                  <span className="cursor-pointer hover:text-secondary-5">
                    Click here
                  </span>{" "}
                  to register as a Trade Buyer
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full max-w-[35%]  bg-secondary-5 ">
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="writing-vertical-rl ml-[25%] py-14 text-13xl text-white font-bold">
                <VerticalText text="EXHIBITOR" />
              </div>
            </div>
          </div>
          <img
            className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 min-h-fit max-h-[125%] object-cover z-10"
            src="assets/login/tinanom.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}