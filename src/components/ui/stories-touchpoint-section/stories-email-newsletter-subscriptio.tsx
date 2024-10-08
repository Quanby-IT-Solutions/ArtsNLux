import type { NextPage } from "next";

export type EmailNewsletterSubscriptioType = {
  className?: string;
  onClose?: () => void;
};

const EmailNewsletterSubscriptio: NextPage<EmailNewsletterSubscriptioType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[777px] relative shadow-[0px_4px_35px_rgba(43,_39,_30,_0.5)] bg-color-white flex flex-col items-center justify-center py-[73px] px-5 box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto ${className}`}
    >
      <section className="w-[599px] flex flex-col items-center justify-start max-w-full text-center text-[34px] text-gray-300 font-urbanist">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-xl mq750:text-[27px]">
          THANK YOU FOR SUBSCRIBING!
        </h1>
        <div className="overflow-hidden flex flex-row items-center justify-center py-[15.5px] px-0 text-lg font-lato">
          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-[inherit]">
            <p className="m-0">
              You will be the first to know about the latest in high quality
            </p>
            <p className="m-0">
              design-oriented home, fashion, holiday, architectural and interior
              products.
            </p>
          </h3>
        </div>
        <div className="self-stretch relative text-smi leading-[28px] text-black">
          <p className="m-0 font-medium">
            Your data is safe with us and you can unsubscribe at any time.
          </p>
          <p className="m-0">
            <span className="font-medium">{`For more information see our `}</span>
            <span className="font-semibold font-urbanist text-darkolivegreen">{`Privacy Policy. `}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmailNewsletterSubscriptio;