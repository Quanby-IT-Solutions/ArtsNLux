import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

interface GridItemProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  goto: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, subtitle, imageSrc, goto }) => {
  return (
    <div className="relative overflow-hidden shadow-lg w-full h-64 group">
      {/* Clickable Image using Link */}
      <Link href={goto} className="relative block w-full h-full">
        {/* Full width and height for the Link and its contents */}
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4">
            {/* Title */}
            <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
            {/* Subtitle */}
            {subtitle && <p className="text-white text-sm font-medium">{subtitle}</p>}
          </div>
        </div>
      </Link>
      {/* Select Button - Bottom Left Position */}
      <button className="absolute bottom-0 left-0 px-6 py-2 bg-[#6A704C] text-white flex items-center transition-all duration-300">
        <span className="flex items-center">
          <span className="group-hover:inline hidden mr-2">Select</span>
          <ChevronRightIcon className="w-5 h-5" />
        </span>
      </button>
    </div>
  );
};

export default GridItem;
