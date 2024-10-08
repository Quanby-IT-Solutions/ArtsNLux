import React from 'react';

export default function FAQs() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white text-primary-2 flex flex-col justify-start items-start md:items-center py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl flex flex-col justify-start items-start md:items-center ">
        <h1 className="text-18xl md:text-[70px] font-bold mb-1 md:mb-8 py-6 text-timeless-black">
          AUCTI<span className="italic font-serif font-medium text-secondary-5">O</span>N +
        </h1>
        <h2 className="text-5xl md:text-21xl font-bold mb-12">Auction Rules</h2>
        <div className="w-full font-sans text-lg">
          <ul className="space-y-8">
            {[
              {
                title: "1. Item Listings",
                items: [
                  "Sellers must provide clear descriptions, images, and set starting prices."
                ]
              },
              {
                title: "2. Bidding Process",
                items: [
                  "All bids are final and legally binding.",
                  "Bids will be verified to prevent fraudulent activity.",
                  "Reserve prices, if set, must be met for the auction to be successful."
                ]
              },
              {
                title: "3. Payments",
                items: [
                  "Buyers must complete payment within the set date after winning an auction using the available payment methods.",
                  "Sellers should monitor payment status in real-time."
                ]
              },
              {
                title: "4. Shipping and Delivery",
                items: [
                  "Sellers are responsible for ensuring timely shipment of sold items.",
                  "Buyers will be provided tracking information for shipped items."
                ]
              },
              {
                title: "5. Analytics and Feedback",
                items: [
                  "Sellers are encouraged to review post-auction analytics to improve future auctions.",
                  "Buyers are encouraged to provide feedback on their experience."
                ]
              }
            ].map((rule, index) => (
              <li key={index} className="bg-white shadow-md hover:shadow-custom-sd p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-secondary-5">{rule.title}</h3>
                <ul className="list-disc ml-6 space-y-2">
                  {rule.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-primary-2">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}