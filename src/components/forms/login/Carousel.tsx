"use client";

import React from "react";
import ReviewerCard from "@/components/ui/ReviewerCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Title from "@/components/ui/Title";

interface Slide {
  name: string;
  specialization: string;
  profile: string;
  comment: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const swiperRef = React.useRef<any>(null);

  // Functions to handle manual Swiper navigation
  const handlePrevious = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 relative">
      <div className="flex justify-between items-center mb-8 text-gray-900">

        {/* Header Section */}
        <Title
          headerText="Reviews"
          subheaderText="What our customers are saying"
          subheaderSize="text-21xl"
        />

        {/* Header Navigation Buttons */}
        <div className="flex gap-4">
          {slides.length > 1 && (
            <>
              <button onClick={handlePrevious} className="p-2 rounded-full hover:bg-gray-100" aria-label="Previous Review">
                <ArrowLongLeftIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100" aria-label="Next Review">
                <ArrowLongRightIcon className="h-6 w-6 text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        navigation={false} // mar: just leave it as false
        pagination={{
          type: 'progressbar',
          el: '.swiper-pagination-custom',
        }}
        className="relative overflow-hidden pb-12"
      >
        {slides.map((reviewer, index) => (
          <SwiperSlide key={index} className="w-full max-w-md p-4">
            <ReviewerCard reviewer={reviewer} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Progress Bar Container */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <div className="relative w-1/2">
          {/* Swiper Progress Bar (Fill element will be generated by Swiper) */}
          <div className="swiper-pagination-custom swiper-pagination-progressbar h-1 bg-gray-300 rounded">
            {/* Swiper will handle the progress bar fill dynamically */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;