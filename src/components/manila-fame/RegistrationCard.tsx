/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface RegistrationCardProps {
  title: string;
  imageSrc: string;
  altText: string;
  highlight?: boolean; // New prop for conditional styling
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ title, imageSrc, altText, highlight }) => {
  return (
    <div className={`flex flex-col items-center justify-center rounded-md p-6 my-6 mx-4 min-h-[200px] h-[240px] min-w-[280px] w-[350px] ${highlight ? 'bg-darkolivegreen text-white' : 'bg-white'} shadow-custom-shadow relative`}>
      {/* Centered Title */}
      <h3 className={`text-2xl font-semibold mb-8 ${highlight ? 'text-white' : 'text-black'}`}>{title}</h3>
      
      {/* Image Positioned at the Bottom with Centered Button */}
      <button className="p-2  shadow-md absolute bottom-4">
        <img
          loading="lazy"
          src={imageSrc}
          alt={altText}
          className="w-24 h-24"
        />
      </button>
    </div>
  );
};

export default RegistrationCard;
