"use client";

import React from "react";
import LabelCard from "@/components/features/labelCards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Title from "@/components/ui/Title";

interface Slide {
    title: string;
}

interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const swiperRef = React.useRef<any>(null);
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0); // State to keep track of the selected index

    // Functions to handle manual Swiper navigation
    const handlePrevious = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    // Handle item click
    const handleItemClick = (index: number) => {
        setSelectedIndex(index); // Update the selected index state
        // Optionally navigate to the selected slide if needed
        // swiperRef.current?.swiper.slideTo(index); 
    };

    return (
        <div className="w-full flex max-w-6xl mx-auto px-4 py-12 relative">
            {/* Progress Bar on the left */}
            <div className="flex">
                {/* Header Navigation Buttons */}
                <div className="flex justify-between items-center mb-8 text-gray-900">
                    <div className="flex flex-col gap-4">
                        {slides.length > 1 && (
                            <>
                                <button onClick={handlePrevious} className="p-2 rounded-full hover:bg-gray-100" aria-label="Previous Review">
                                    <ArrowLongLeftIcon className="h-6 w-6 text-gray-600 rotate-90" />
                                </button>
                                <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100" aria-label="Next Review">
                                    <ArrowLongRightIcon className="h-6 w-6 text-gray-600 rotate-90" />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="absolute bottom-11 left-6 text-gray-400 text-2xl flex flex-col items-start mt-[-30px]">
                <span className="font-bold transform -rotate-90">{String(slides.length).padStart(2, '0')}</span>
                <span className="mx-1 transform -rotate-90">/</span>

                <span className="text-gray-900 transform -rotate-90 font-bold">{String(selectedIndex + 1).padStart(2, '0')}</span>
            </div>
                </div>

                <div className="flex flex-col items-center justify-center mr-4">
                    <div className="relative h-96">
                        <div className="swiper-pagination-custom swiper-pagination-progressbar h-full w-1 bg-gray-300 rounded">
                            {/* Swiper will handle the progress bar fill dynamically */}
                        </div>
                    </div>
                </div>

                <div>
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={5} // Set space between slides to a smaller value for closer spacing
                        slidesPerView={3} // Show three slides at a time
                        loop={true}
                        direction="vertical" // Set direction to vertical
                        navigation={false}
                        pagination={{
                            type: 'progressbar',
                            el: '.swiper-pagination-custom',
                        }}
                        className="relative overflow-hidden h-96" // Adjust the height as needed
                    >
                        {slides.map((labels, index) => (
                            <SwiperSlide key={index} className="w-full p-2">
                                <div
                                    className="h-full flex items-center justify-center cursor-pointer"
                                    onClick={() => handleItemClick(index)} // Call handleItemClick when the slide is clicked
                                >
                                    <LabelCard labels={labels} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>

        




        </div>
    );
};

export default Carousel;
