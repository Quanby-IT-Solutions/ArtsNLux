"use client";

import Carousel from '@/components/forms/login/Carousel';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import InspirationCard from './InspirationCard';
import CategoryButton from './CategoryButton';
import ProductCard from './ProductCard';
import SubscriptionServiceComponent from '@/components/ui/subscription/SubscriptionServiceComponent';

export default function Catalogue() {
  const [activeButton, setActiveButton] = useState<string>('Home Decor & Houseware');

  const handleButtonClick = (category: string) => {
    setActiveButton(category);
  };

  const reviewers = [
    {
      name: "Pedro Ibanez",
      specialization: "UI Designer at Google",
      profile: "/assets/login/pandok1.png",
      comment:
        "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet in there. Thank you for frispes and team.",
    },
    {
      name: "Raymond Thual",
      specialization: "Professional Freelancer",
      profile: "/assets/login/pandok2.png",
      comment:
        "The high-speed internet at frispes was so amazing. I can get the best experience when running a video call with my clients. Frispes has a spacious and safe parking area, that’s what I need because I used to work as a freelancer for a long time.",
    },
    {
      name: "Yuli Berlian",
      specialization: "iOS Dev at Tokopedia",
      profile: "/assets/login/pandok3.png",
      comment: "Just three words: Frispes is Awesome!",
    },
    {
      name: "Maria Gonzalez",
      specialization: "Backend Developer at Amazon",
      profile: "/assets/login/pandok1.png",
      comment:
        "The environment at frispes allows for a productive workflow with all the facilities needed to focus and work. Highly recommended for teams who want to work outside the office.",
    },
    {
      name: "Liam Smith",
      specialization: "Product Manager at Microsoft",
      profile: "/assets/login/pandok2.png",
      comment:
        "Frispes has become my go-to place for brainstorming sessions and deep work. The ambience is inspiring, and the amenities are top-notch.",
    },
    {
      name: "Sophia Lee",
      specialization: "Marketing Specialist at Facebook",
      profile: "/assets/login/pandok3.png",
      comment:
        "Frispes is a unique co-working space with an excellent blend of comfort and functionality. I always enjoy working here.",
    },
  ];

  const categories = [
    'Home Decor & Houseware',
    'Beauty and Wellness',
    'Festive and Seasonal Decor',
    'Fashion',
    'Furniture',
    'Gifts',
    'Lamps and Lighting',
  ];

  const products = [
    { title: 'Red Oval Paper Clay Storage', brand: 'Indigenous', image: '/assets/catalogue/background.png' },
    { title: 'Napa Chest Table', brand: 'PILIPINAS SHELL', image: '/assets/catalogue/background.png' },
    { title: 'Fiore Lamp', brand: 'Final Furniture', image: '/assets/catalogue/background.png' },
  ];

  const inspirations = [
    {
      title: 'Pretty As Peach Fuzz',
      description: 'FAME+ Finds featuring the Pantone Color of the Year 2024',
      image: '/assets/catalogue/background.png',
    },
    {
      title: 'Light Of The Home',
      description: 'What better way to present your lighting collection than in your own house?',
      image: '/assets/catalogue/background.png',
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center tracking-wide text-lg">
      <section className="w-full py-6 text-timeless-black relative flex justify-center items-center">
        <h1 className="text-[70px] font-bold mx-auto">
          CATAL<span className="italic font-serif font-medium">O</span>GUE
        </h1>
      </section>

      <main className="w-full bg-white">
        <section className="w-full py-10 text-center text-timeless-black relative flex flex-col items-center">
          <div className="flex justify-center space-x-4 mt-4">
            {categories.map((category, index) => (
              <CategoryButton
                key={index}
                category={category}
                isActive={activeButton === category}
                onClick={() => handleButtonClick(category)}
              />
            ))}
          </div>
          <div className="relative mt-8">
            <Image
              src="/assets/catalogue/background.png"
              alt="Catalogue"
              width={1920}
              height={1080}
              className="w-full h-[95vh] object-cover"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] flex items-center bg-white/80 shadow-md rounded-md">
              <input
                type="text"
                className="w-full py-3 pl-4 text-gray-700 border-none outline-none bg-transparent placeholder-gray-500"
                placeholder="Search for a brand, product, or material"
              />
              <Image
                src="/assets/catalogue/search.png"
                alt="Search Icon"
                width={40}
                height={40}
                className="w-10 h-10 mr-4"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-row gap-2 justify-start items-center text-primary-2">
              <p>Browse Products</p>
              <hr className="w-16 border border-primary-2" />
            </div>
            <h1 className="text-17xl font-semibold text-primary-2">
              AV<span className="font-serif italic font-medium">A</span>ILABLE F
              <span className="font-serif italic font-medium">O</span>R IMMEDIATE
              <span className="font-serif font-medium"> P</span>URCHASE
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} title={product.title} brand={product.brand} image={product.image} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-timeless-black">INSPIRATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {inspirations.map((inspiration, index) => (
                <InspirationCard
                  key={index}
                  title={inspiration.title}
                  description={inspiration.description}
                  image={inspiration.image}
                />
              ))}
            </div>
          </div>
        </section>

        <SubscriptionServiceComponent />

        <Carousel slides={reviewers} />
      </main>
    </div>
  );
}
