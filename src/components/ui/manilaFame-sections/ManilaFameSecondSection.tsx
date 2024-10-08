/* eslint-disable @next/next/no-img-element */
import React from 'react';
import StatisticBlock from '@/components/manila-fame/StatisticBlock';
import RegistrationCard from '@/components/manila-fame/RegistrationCard';
import ProductImage from '@/components/manila-fame/ProductImage';
import StoriesCategoryComponentv2 from '../stories-touchpoint-section/stories-categoriesv2';

interface StatisticData {
  value: string;
  description: string;
}

interface RegistrationOption {
  title: string;
  imageSrc: string;
  altText: string;
}

const statisticsData: StatisticData[] = [
  { value: '7000+', description: 'Trade buyers and visitors from 60 countries' },
  { value: '250+', description: 'Exhibiting manufacturers and brands' },
  { value: '2ND', description: 'Longest-running trade event in Asia for home, fashion and lifestyle' },
  { value: '365', description: 'Days of online visibility for browsing and sourcing' }
];

const registrationOptions: RegistrationOption[] = [
  { title: 'Register as a Buyer', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b4e3f809b88d5a90ae56dc20f28e39e6aa49a8fffbf1f626650c21b2b4703782?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', altText: 'Buyer registration icon' },
  { title: 'Register as a Visitor', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1e19640afec636a20c10116e7a66d0b1c3d27791319d045b77083994a43176dc?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', altText: 'Visitor registration icon' },
  { title: 'Register as an Exhibitor', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c07148925ba3ec0d6e57195a4f7559c36056d63077cc6bdadf1a154f4c8d66c?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03', altText: 'Exhibitor registration icon' }
];


const ManilaFameSecondSection: React.FC = () => {
  return (
   
    <main className="w-full">
        
  {/* Statistics Section */}

  <section className="flex justify-center items-center w-full text-center bg-darkolivegreen min-h-[229px]">
  <div className="grid grid-cols-4 gap-20 items-start w-full max-w-[1550px]">
    {statisticsData.map((stat, index) => (
      <StatisticBlock key={index} value={stat.value} description={stat.description} />
    ))}
  </div>
</section>


  {/* Event Information Section */}

  <section className="flex flex-wrap justify-center gap-10 items-start mt-36 min-h-[328px] text-stone-800 max-w-[1115px] mx-auto max-md:mt-10 max-md:max-w-full">
    <div className="flex-1 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col max-w-full w-full">
        <div className="flex gap-4 items-center text-xl font-medium">
          <time dateTime="2024-10-17">17 - 19 OCTOBER 2024</time>
          <div className="flex-grow h-0.5 bg-stone-800" />
        </div>
        <h1 className="text-4xl font-bold max-md:max-w-full">
          HOME, FASHION, AND LIFESTYLE TRADE SHOW
        </h1>
      </div>
      <p className="mt-8 text-xl font-medium leading-8 max-md:max-w-full">
        With the theme <span className="italic font-semibold text-stone-600">Reimagination</span>, Manila FAME will tweak the old, make the ordinary extra, turn the plain into something special, and experience design in a different light. The multisensory sourcing show translates the Philippines abundant raw materials into functional lifestyle products and objects.
      </p>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7297de97d7e79fe9fd85306922ebf42a27cbd426a0f2f93e0693e3ccc068996e?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
      alt="Manila FAME event showcase"
      className="object-contain aspect-[1.46] min-w-[240px] w-[480px] max-md:max-w-full"
    />
  </section>

{/* Registration Options Section */}
<section className="flex flex-col justify-center items-center mt-32 w-full text-center max-w-[1115px] mx-auto max-md:mt-10 max-md:max-w-full">
  <h2 className="text-4xl font-bold text-stone-800 tracking-wider max-md:text-3xl">
    BE P<span className="italic">A</span>RT OF THE 72ND EDITI<span className="italic">O</span>N
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-md:max-w-full">
    {registrationOptions.map((option, index) => (
      <RegistrationCard
        key={index}
        title={option.title}
        imageSrc={option.imageSrc}
        altText={option.altText}
        highlight={option.title === 'Register as a Visitor'} 
      />
    ))}
  </div>
</section>







  {/* Product Showcase Section */}
  <section className="flex flex-col justify-center items-center mt-32 w-full max-w-[1115px] mx-auto max-md:mt-10 max-md:max-w-full">
    <div className="mb-16 flex flex-wrap justify-center gap-10 items-start w-full max-md:max-w-full">
      <h2 className="text-3xl font-bold text-right text-stone-800 max-md:max-w-full">
        EXPL<span className="italic">O</span>RE HUNDREDS OF <span>A</span>RTISANAL <br />
        BRA<span className="italic">N</span>DS AND PR<span className="italic">O</span>DUCTS
      </h2>
      <p className="text-lg font-medium leading-6 text-stone-600 w-[736px] max-md:max-w-full">
        The sourcing event showcases Philippine-made artisanal pieces from designers and manufacturers, featuring indigenous materials and age-old processes that mark fine craftsmanship.
      </p>
    </div>
 

    <StoriesCategoryComponentv2/>

    <div className="flex justify-center mt-16 w-[400px] max-md:mt-10 text-xl font-semibold leading-tight text-stone-600">
      <a href="#" className="flex items-center gap-2.5">
        <span>View Full Catalogue</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac5392ab6b93293d3d9f68d0e75e5cc6329b2c0411f0feaf09f2d7a1d39eb3bf?placeholderIfAbsent=true&apiKey=2a252d86bf2a48fe834ba322701d8e03"
          alt="Arrow icon"
          className="w-8 aspect-square"
        />
      </a>
    </div>
  </section>
</main>

  );
};

export default ManilaFameSecondSection;
