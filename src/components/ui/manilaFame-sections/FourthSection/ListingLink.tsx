import React from 'react';

const ListingLink: React.FC = () => {
  return (
    <div className="flex justify-center mt-12 mb-40 max-w-full">
      {/* Container with 1 Row and Minimal Gap */}
      <div className="flex items-center gap-x-1 text-xl font-semibold leading-tight text-stone-600">
        <div>Click here to view listings</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4811ffd88e9559d7f12dc4ce1130788435c712712c0312feaf52e48e10e276?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
          alt=""
          className="object-contain w-8 aspect-square"
        />
      </div>
    </div>
  );
};

export default ListingLink;
