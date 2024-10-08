import React from 'react';
import PartnerCard from './PartnerCard';
import PartnerCategory from './PartnerCategory';
import PartnerNav from './PartnerNav';
import AccreditedHotels from './AccreditedHotels';
import ListingLink from './ListingLink';

const PartnerSection: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-4 py-14 bg-white max-w-full">
      {/* Header Section */}
      <section className="flex flex-col w-full text-center max-md:max-w-full">
  <header className="flex flex-col items-center w-full max-md:max-w-full">
    <h1 className="text-4xl font-bold text-stone-800 max-md:max-w-full">
      OUR <span className="italic">PARTNERS</span>
    </h1>
    {/* Navigation buttons */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center mt-8  w-full max-w-[900px] text-lg text-stone-600 max-md:mt-5 max-md:max-w-full">
      <button className="py-2 px-4 bg-darkolivegreen border border-white text-white ">All</button>
      <button className="py-2 px-4 bg-white border border-darkolivegreen ">Partner Organization</button>
      <button className="py-2 px-4 bg-white border border-darkolivegreen ">Gold Partner</button>
      <button className="py-2 px-4 bg-white border border-darkolivegreen ">Event Partner</button>
      <button className="py-2 px-4 bg-white border border-darkolivegreen ">Business Solutions Partners</button>
      <button className="py-2 px-4 bg-white border border-darkolivegreen ">Media Partners</button>
      <button className="py-2 px-4 bg-white border border-darkolivegreen ">Official Messaging App Partners</button>
      <button className="py-2 px-4 bg-white border border-darkolivegreen ">Partner Hotels</button>
    </div>
  </header>
</section>

      {/* Partner Cards Section */}
      <section className="flex flex-col items-center mt-12 w-full max-w-[1111px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center">
          {/* Example Partner Cards */}
          <PartnerCard
            title="Partner Organization"
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8347c8526cc4017903ee610b1721ea5ea3f6e70eeecb1f06776a4aa6441339f8?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
            imgAlt="Logo of Partner Organization"
            imgClass="max-w-full aspect-[1.65] w-[168px] mx-auto"
          />
          <PartnerCard
            title="Gold Partner"
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/92a76b8d5cf5ea07c91cfff84c9806500b1aa49480c763f89e297ad8a5b476ed?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
            imgAlt="Logo of Gold Partner"
            imgClass="max-w-full aspect-[1.65] w-[168px] mx-auto"
          />
          <PartnerCard
            title="Event Partner"
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4d04bddf64ea4cb0e9fca7947a0331a5e2932ecbdeb79ee7f75fb18c7798b108?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
            imgAlt="Logo of Event Partner"
            imgClass="max-w-full aspect-[1.96] w-[200px] mx-auto"
          />
        </div>

        {/* Partner Category Section */}
        <PartnerCategory
          title="Business Solutions Partners"
          partners={[
            { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6fa9d21a630f4095950dac8c7b24d0b74bf74b0d2a60e835eb93fed19ba17109?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Logo of Business Solutions Partner 1', imgClass: 'aspect-[1.96] w-[200px] mx-auto' },
            { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d349ffe15a35e7f6e8ebce72bf5fa76109f660444f92f23719c6888f17f2ad02?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Logo of Business Solutions Partner 2', imgClass: 'aspect-[1.96] w-[200px] mx-auto' },
            { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a59528da24e880436c28a64e547dd8c46cb093b0aa8b294493021608bc6450ac?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Logo of Business Solutions Partner 3', imgClass: 'aspect-[1.96] w-[200px] mx-auto' },
          ]}
        />

        {/* Additional Partner Sections */}
        <PartnerCard
          title="Media Partners"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/14cacb5c15e68426f03f3b2808a2bd28c43d8ebdf8a8bff15a74b25c71de7420?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
          imgAlt="Logo of Media Partners"
          imgClass="w-full aspect-[4.24] max-md:max-w-full mx-auto"
        />
        <PartnerCard
          title="Official Messaging App Partner"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7529ae36adbf98d1b1e12c222b3c428ab2daa6c7aed5fc5b09331bce6bfdc4f5?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
          imgAlt="Logo of Official Messaging App Partner"
          imgClass="max-w-full aspect-[2.45] w-[250px] mx-auto"
        />

        {/* Accredited Hotels Section */}
        <section className="flex flex-col justify-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center self-center max-w-full text-3xl font-bold text-center text-stone-800 w-[483px] mx-auto">
            <h2>Manila FAME Partner Hotel</h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c9bbbfe34236d206be6c6525e2ad92e04569cbf156afabe381c5dc514cd7a02?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03" alt="Logo of Manila FAME Partner Hotel" className="object-contain mt-7 max-w-full aspect-[2.68] w-[252px] mx-auto" />
          </div>
          <AccreditedHotels
            hotels={[
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/799b6ce6a8ce3e5443f768f5db46c4264e00248bfcaf61be5095c74734ad370b?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 1', imgClass: 'aspect-[2.73] min-w-[240px] w-[257px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c71c983b05eda0b69c4ed3c4d53fc765abc6cff3fb0d452229989eb93da2d5a5?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 2', imgClass: 'aspect-square w-[172px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/518fa018cf669b9e25390e1da9f10c0224d854c39a7b7c393e0bafd1c15b51a4?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 3', imgClass: 'aspect-square w-[172px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5dde3adee12339b8bea22cc17ed310f639cbe0137112c0e787252eff133d3251?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 4', imgClass: 'aspect-square w-[172px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6a840b3c99000da07d5626ddaf936cec0de4dc29679279d0ce8e8a5247149fc4?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 5', imgClass: 'aspect-square w-[172px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/46d504e1a32aa2a1749e810c73803b2ad7c4613f3471562d753824a013a62e26?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 6', imgClass: 'aspect-square min-w-[240px] w-[257px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fca70930eb27afec497eee784ed0a2147290b71d52011b6ad61c7674e4a34004?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 7', imgClass: 'aspect-square w-64 min-w-[240px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9e4532f150ef0880cee0b644822781717f4d99c40ef388fe0d42e17e24ab0b6c?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 8', imgClass: 'aspect-[1.58] w-80 min-w-[240px] mx-auto' },
              { imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e100a08341b15af4433a8cd5d8fab66b3c162dc5f7bbc62728f9c27006863df2?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', imgAlt: 'Accredited Hotel 9', imgClass: 'aspect-square w-[172px] mx-auto' },
            ]}
          />
        </section>
        {/* Listings Link */}
        <ListingLink />
      </section>
    </main>
  );
};

export default PartnerSection;
