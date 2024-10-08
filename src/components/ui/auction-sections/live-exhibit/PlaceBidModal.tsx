export const PlaceBidModal = () => {
  const closeModal = () => {};
  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-40 overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-fit px-24 max-w-screen-md shadow-custom-shadow bg-timeless-white py-8 gap-4 flex flex-col justify-center items-center text-timeless-black">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">PLACE BID</h1>
            <p>Enter your Bid Amount</p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="w-full relative">
              <input
                type="number"
                className="w-96 bg-secondary-5 bg-opacity-20 focus:outline-secondary-5 p-5 pt-8"
              />
              <label
                htmlFor="amount"
                className="absolute -top-3 left-0 p-4 text-secondary-5 opacity-80 text-sm"
              >
                Amount
              </label>
            </div>
            <div className="w-full justify-between items-center flex pt-4">
              <button className="border border-secondary-5 text-secondary-5 p-4 w-32 hover:bg-secondary-5 hover:bg-opacity-80 duration-300 hover:text-timeless-white">
                Cancel
              </button>
              <button className="bg-secondary-5 text-timeless-white p-4 w-32 hover:bg-secondary-5 hover:bg-opacity-40 duration-300">
                BID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
