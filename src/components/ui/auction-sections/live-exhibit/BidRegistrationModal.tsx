export const BidRegistrationModal = () => {
  const closeModal = () => {};
  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-40 overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-[50%] px-24 max-w-screen-md shadow-custom-shadow bg-timeless-white py-12 gap-8 flex flex-col justify-center items-center text-timeless-black">
          <h1 className="font-bold text-xl">Registration Complete</h1>
          <div className="flex flex-col w-full gap-4">
            <h1 className="font-medium">
              CONGRATULATIONS, YOU ARE NOW REGISTERED.
            </h1>
            <p>
              Best of luck in the auction. Your bidding paddle is below and will
              also be emailed to you for your records.
            </p>
            <h1 className="font-medium text-41xl text-center">4</h1>
            <div className="w-full justify-end items-end flex ">
              <button className="bg-secondary-5 text-timeless-white p-4 w-32 hover:bg-secondary-5 hover:bg-opacity-80 duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
