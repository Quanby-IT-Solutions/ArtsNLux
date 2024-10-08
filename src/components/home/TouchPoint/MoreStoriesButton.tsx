// src/components/home/TouchPoint/MoreStoriesButton.tsx

const MoreStoriesButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 mt-6 bg-stone-600 text-stone-100 rounded-md hover:bg-stone-700 transition duration-200">
      <span className="text-sm md:text-base">More stories</span>
      {/* SVG icon for arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 md:w-6 md:h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
};

export default MoreStoriesButton;
