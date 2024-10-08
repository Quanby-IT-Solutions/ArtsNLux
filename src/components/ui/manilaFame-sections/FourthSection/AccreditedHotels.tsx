import React from 'react';

type AccreditedHotelsProps = {
  hotels: { imgSrc: string; imgAlt: string; imgClass: string }[];
};

const AccreditedHotels: React.FC<AccreditedHotelsProps> = ({ hotels }) => {
  return (
    <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
          <div className="text-3xl font-bold text-center text-stone-800">Accredited Hotels</div>
          <div className="flex flex-wrap gap-7 justify-center items-center mt-7 max-md:max-w-full">
            {hotels.slice(0, 5).map((hotel, index) => (
              <img
                key={index}
                loading="lazy"
                src={hotel.imgSrc}
                alt={hotel.imgAlt}
                className={`object-contain shrink-0 self-stretch my-auto ${hotel.imgClass}`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-center mt-7 max-md:max-w-full">
            {hotels.slice(5).map((hotel, index) => (
              <img
                key={index}
                loading="lazy"
                src={hotel.imgSrc}
                alt={hotel.imgAlt}
                className={`object-contain shrink-0 self-stretch my-auto ${hotel.imgClass}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditedHotels;