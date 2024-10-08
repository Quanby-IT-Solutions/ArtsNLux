// src/components/home/TouchPoint/StoryCard.tsx
import Image from 'next/image';

interface Story {
  imageSrc: string;
  title: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <article className="flex flex-col mb-8 p-4">
      {/* Image Container with Button Overlay */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
      <div className="relative h-full w-[80%] mx-auto">
        {/* Image positioned to fill the container */}
        <Image
          loading="lazy"
          src={story.imageSrc}
          alt={story.title || 'Story image'}
          layout="fill"
          objectFit="cover" // Ensures the image covers the container
          className="object-left"
        />
        {/* Overlay Button positioned in the bottom-left corner */}
        <button className="absolute w-[100px] h-[100px] bottom-0 left-0 bg-[#6A704C] text-white p-2 flex items-center justify-center hover:bg-green-700 transition duration-200">
          <img className="w-[45px] h-[45px]" src="assets/icons/down.png" alt="" />
        </button>
        </div>
      </div>
      {/* Card Content: Title */}
      {story.title && (
        <h2 className="text-center text-lg md:text-xl font-bold text-stone-800 mt-4">
          {story.title}
        </h2>
      )}
    </article>
  );
};

export default StoryCard;
