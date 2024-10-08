export const TermsAndConditionModal = () => {
  const closeModal = () => {};
  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-40 overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-[50%] px-24 max-w-screen-md shadow-custom-shadow bg-timeless-white py-12 gap-8 flex flex-col justify-center items-center text-timeless-black">
          <h1 className="font-bold text-xl">
            Auction: Terms and Conditions
          </h1>
          <div className="flex flex-col w-full gap-4">
            <h1 className="font-medium">TERMS AND CONDITIONS: BIDDING AND BUYING AT OUR AUCTIONS</h1>
            <p className="italic font-urbanist">These terms were last updated on: 27/08/2024</p>
            <p>
              These terms and conditions may have changed since you last
              participated in, or purchased items at an auction, please
              therefore ensure that you have read and...
            </p>
            <div className="w-full justify-between items-center flex ">
                <button className="border border-secondary-5 text-secondary-5 p-4 w-32 hover:bg-secondary-5 hover:bg-opacity-80 duration-300 hover:text-timeless-white">Cancel</button>
                <button className="bg-secondary-5 text-timeless-white p-4 w-32 hover:bg-secondary-5 hover:bg-opacity-80 duration-300">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
