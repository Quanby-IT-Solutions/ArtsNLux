"use client";

import Image from "next/image";

interface CardProps {
  title?: string;
  content?: string;
  imageSrc?: string;
  isImageCard?: boolean;
  isFeaturedTextCard?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, imageSrc, isImageCard, isFeaturedTextCard }) => {
  return (
    <div className="flex flex-col w-full max-w-md bg-white shadow-md overflow-hidden" style={{ blockSize: "400px" }}>
      {isImageCard ? (
        <div className="relative w-full h-full">
          <Image
            loading="lazy"
            src={imageSrc || "/default-placeholder.png"}
            alt={title || "Card Image"}
            fill
            className="object-cover"
            sizes="(max-inline-size: 768px) 100vw, (max-inline-size: 1200px) 50vw, 33vw"
          />
        </div>
      ) : isFeaturedTextCard ? (
        <div className="flex flex-col justify-center w-full h-full p-8 bg-white">
          <span className="text-sm font-semibold text-green-800 uppercase mb-2">Industry News</span>
          <h3 className="text-3xl font-bold text-stone-800 mb-4">{title}</h3>
          {content && <p className="mt-2 text-lg text-neutral-600">{content}</p>}
        </div>
      ) : (
        <div className="flex flex-col w-full h-full">
          <div className="relative w-full" style={{ blockSize: "66%" }}>
            <Image
              loading="lazy"
              src={imageSrc || "/default-placeholder.png"}
              alt={title || "Card Image"}
              fill
              className="object-cover"
              sizes="(max-inline-size: 768px) 100vw, (max-inline-size: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col p-4" style={{ blockSize: "34%" }}>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">{title}</h3>
            {content && <p className="text-base text-neutral-700">{content}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

const PlusFeatures: React.FC = () => {
  const cards = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/299ce347ece300171501de2e677a45b5dd0dedc1b5a1924b3b112671983fa2f7?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
      isImageCard: true,
    },
    {
      title: "CRAFTED ELEGANCE: Embracing Modernity With Nature's Riches",
      content: "South sea veneer offers endless possibilities by creating works of art from various natural resources.",
      isFeaturedTextCard: true,
    },
    {
      title: "To Sit Is To Believe",
      content: "The narrative behind creating furniture is more than a chair.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/203526ee8c950a670ee6aac1e98b3d110b152de26299377d8b4325f06d53ad97?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    },
    {
      title: "To Sit Is To Believe",
      content: "The narrative behind creating furniture is more than a chair.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/203526ee8c950a670ee6aac1e98b3d110b152de26299377d8b4325f06d53ad97?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    },
    {
      title: "To Sit Is To Believe",
      content: "The narrative behind creating furniture is more than a chair.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/203526ee8c950a670ee6aac1e98b3d110b152de26299377d8b4325f06d53ad97?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    },
    {
      title: "To Sit Is To Believe",
      content: "The narrative behind creating furniture is more than a chair.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/203526ee8c950a670ee6aac1e98b3d110b152de26299377d8b4325f06d53ad97?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea",
    },
  ];

  return (
    <section className="flex flex-col gap-16 p-32">
      <header className="flex flex-wrap gap-8 justify-between items-center">
        <h1 className="text-5xl font-extrabold text-stone-800">
          Pl<span>u</span>s <span className="italic">F</span>eatures
        </h1>
        <div className="flex flex-row items-center justify-center gap-6">
          <button
            className="flex items-center justify-center -ml-2 p-3 border-none bg-transparent cursor-pointer"
            aria-label="Previous Page"
          >
            <Image
              src="/assets/stories-touchpoint/stories-svg/prev.svg"
              alt="Previous"
              className="h-8"
              width={32}
              height={32}
            />
          </button>
          <button
            className="flex items-center justify-center p-3 border-none bg-transparent cursor-pointer"
            aria-label="Next Page"
          >
            <Image
              src="/assets/stories-touchpoint/stories-svg/next.svg"
              alt="Next"
              className="h-8"
              width={32}
              height={32}
            />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default PlusFeatures;
