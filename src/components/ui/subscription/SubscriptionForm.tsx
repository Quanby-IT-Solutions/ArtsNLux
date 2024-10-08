"use client";

const SubscriptionForm = ({ openEmailNewsletterSubscriptio: openEmailNewsletterSubscription }: { openEmailNewsletterSubscriptio: () => void }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 tracking-wide font-[300]">
      <h1 className="text-18xl font-bold w-full max-w-sm mt-2 leading-snug">
        Can’t get enough of Fame+?
      </h1>
      <p>
        Our free email newsletter is bursting at the seams with the latest in
        high quality design-oriented home, fashion, holiday, and interior
        products.
      </p>
      <div className="w-full flex flex-col gap-2.5">
        <div className="w-full flex flex-row gap-4">
          <input
            type="text"
            className="w-full p-3 pl-6 border border-timeless-white bg-primary-2 placeholder:text-timeless-white outline-none"
            placeholder="Your email"
          />
          <button
            className="uppercase p-3 w-44 bg-secondary-5 text-timeless-white"
            onClick={openEmailNewsletterSubscription}
          >
            Submit
          </button>
        </div>
        <p className="text-xs font-[200] max-w-md">
          Your data is safe with us and you can unsubscribe at any time. For
          more information see our
          <a
            className="text-timeless-white underline"
            href="https://fameplus.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionForm;
