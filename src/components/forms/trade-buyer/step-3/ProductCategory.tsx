// src/components/forms/trade-buyer/step-3/ProductCategory.tsx

import CategorySection from "./CategorySection";
import NavigationButtons from '../../../ui/NavigationButtons'; // Import NavigationButtons

interface ProductCategoryProps {
    selectedCategories: string[];
    updateSelectedCategories: (categories: string[]) => void;
    handlePrev: () => void;
    handleNext: () => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ selectedCategories, updateSelectedCategories, handlePrev, handleNext }) => {
    const categories = [
        {
            title: 'Fashion',
            items: [
                "Ladies' Wear", "Children's Wear", "Men's Wear", "Costume Jewelry",
                "Fine Jewelry", "Footwear", "Bag / Clutch", "Fashion Textiles",
                "Others Fashion", "Fashion Complements (Belt, Hat, Headband, Scarf, Gloves)"
            ]
        },
        {
            title: 'Festive and Seasonal Decor',
            items: [
                'Holiday-themed Tabletops', 'Ornaments & Hangings', 'Seasonal Candles & Candleholders',
                'Seasonal Figurines', 'Wreaths / Garlands', 'Other Festive / Seasonal Decor'
            ]
        },
        {
            title: 'Lamps and Lighting',
            items: ['Technical & Electrical', 'Outdoor Lighting', 'Indoor Lighting']
        },
        {
            title: 'Gifts',
            items: [
                'Collectibles', 'Desk Accessories', 'Gift Boxes & Packaging Gifts',
                'Gift Candles & Votives', 'Party Products', 'Pet Accessories',
                'Personal Care, Beauty and Wellness Products', 'Picture Frames',
                'Toys & Games', 'Other Gifts'
            ]
        },
        {
            title: 'Beauty and Wellness',
            items: [
                'Bath Products', 'Cosmetics', 'Hand And Body Lotion',
                'Fragrances', 'Other Beauty and Wellness'
            ]
        },
        {
            title: 'Home Decor & Houseware',
            items: [
                'Art Installation', 'Sculptures', 'Painting', 'Wall Art',
                'Architectural Fittings', 'Baskets & Storage', 'Candleholders',
                'Decorative Boxes', 'Decorative Figurines', 'Garden & Outdoor Accessories',
                'Home Textiles', 'Jars & Vases', 'Kitchenware', 'Mirrors & Mirror Frames',
                'Pet Furniture', 'Rugs and Carpets', 'Tabletop Decor', 'Tableware',
                'Wall Decor & Decorative Panels', 'Wall Covers & Cladding',
                'Window Blinds', 'Other Home Decor'
            ]
        },
        {
            title: 'Furniture',
            items: ['Indoor Furniture', 'Kids Furniture', 'Outdoor Furniture', 'Other Furniture']
        }
    ];

    const handleCategoryChange = (category: string, isChecked: boolean) => {
        if (isChecked) {
            updateSelectedCategories([...selectedCategories, category]);
        } else {
            updateSelectedCategories(selectedCategories.filter((item) => item !== category));
        }
    };

    return (
        <main className="flex gap-5 max-md:flex-col">
            <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <header className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
                    <h1 className="self-stretch my-auto">Product Category</h1>
                    <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
                </header>
                <p className="mt-2.5 text-lg font-medium leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
                    Please choose at least one.
                </p>
                {categories.slice(0, 4).map((category, index) => (
                    <CategorySection
                        key={index}
                        title={category.title}
                        items={category.items}
                        selectedCategories={selectedCategories}
                        handleCategoryChange={handleCategoryChange}
                    />
                ))}
            </section>
            <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-24 max-md:mt-10 max-md:max-w-full">
                    {categories.slice(4).map((category, index) => (
                        <CategorySection
                            key={index}
                            title={category.title}
                            items={category.items}
                            selectedCategories={selectedCategories}
                            handleCategoryChange={handleCategoryChange}
                        />
                    ))}
                </div>
            </section>

            {/* Navigation Buttons */}
            <NavigationButtons
                handlePrev={handlePrev}
                handleNext={handleNext}
                showPrev={true}
                showNext={true}
            />
        </main>
    );
};

export default ProductCategory;
