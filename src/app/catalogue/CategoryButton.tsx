interface CategoryButtonProps {
    category: string;
    isActive: boolean;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 border border-secondary-1 rounded transition-colors duration-200 ${isActive ? 'bg-secondary-1 text-timeless-white' : 'text-secondary-1 hover:bg-secondary-1 hover:text-timeless-white'
                }`}
        >
            {category}
        </button>
    );
};

export default CategoryButton;
