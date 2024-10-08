"use client"; // Make sure to specify that this is a Client Component

import React, { useState } from 'react';

export const IdentityModal = () => {
  const [selectedIdentity, setSelectedIdentity] = useState(''); // State to track selected identity

  const closeModal = () => {
    // Implement your close modal functionality here
  };

  const handleIdentityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIdentity(event.target.value); // Update the state when a radio button is selected
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-40 overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-fit px-24 max-w-screen-md shadow-custom-shadow bg-timeless-white py-8 gap-4 flex flex-col justify-center items-center text-timeless-black">
          <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-8 inline-flex">
            <div className="self-stretch text-center text-primary-2 text-5xl font-bold font-['Urbanist']">
              Joining Live Auction
            </div>
            <div className="flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch flex-col justify-center items-center gap-4 flex">
                <div className="self-stretch text-primary-2 text-base font-bold font-['Lato'] leading-7">
                  You are about to join a Live Auction, how would you like your identity to be known?
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch px-6 flex-col justify-center items-start gap-2.5 flex">
                    {/* Radio button for Mrs. Jane Doe */}
                    <label className="justify-start items-center gap-1.5 inline-flex cursor-pointer">
                      <input
                        type="radio"
                        name="identity"
                        value="mrsJaneDoe"
                        className="hidden"
                        onChange={handleIdentityChange}
                        checked={selectedIdentity === 'mrsJaneDoe'}
                      />
                      <div className="w-5 h-5 rounded-full border border-black flex justify-center items-center">
                        {selectedIdentity === 'mrsJaneDoe' && <div className="w-5 h-5 rounded-full bg-secondary-5"></div>}
                      </div>
                      <div className="text-primary-2 text-base font-medium font-['Urbanist'] leading-7">
                        Mrs. Jane Doe (Paddle 4)
                      </div>
                    </label>
                    {/* Radio button for Anonymous */}
                    <label className="justify-start items-center gap-1.5 inline-flex cursor-pointer">
                      <input
                        type="radio"
                        name="identity"
                        value="anonymous"
                        className="hidden"
                        onChange={handleIdentityChange}
                        checked={selectedIdentity === 'anonymous'}
                      />
                      <div className="w-5 h-5 rounded-full bg-white border border-black flex justify-center items-center">
                        {selectedIdentity === 'anonymous' && <div className="w-5 h-5 rounded-full bg-secondary-5"></div>}
                      </div>
                      <div className="text-primary-2 text-base font-medium font-['Urbanist'] leading-7">
                        Anonymous (Paddle 4)
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="self-stretch text-primary-2 text-base font-normal font-['Lato'] leading-7">
                By entering the auction, you agree to all Terms and Conditions.
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="border-2 border-[#6a704c] justify-center items-center gap-2.5 flex">
                <button
                  className="w-36 p-2.5 text-[#6a704c] text-xl font-medium font-['Urbanist']"
                  onClick={closeModal} // Close modal on button click
                >
                  Cancel
                </button>
              </div>
              <div className="bg-[#6a704c] justify-center items-center gap-2.5 flex">
                <button className="w-36 p-2.5 text-center text-white text-xl font-medium font-['Urbanist']">
                  Join Auction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
