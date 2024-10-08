import Image from 'next/image';

interface ProductCardProps {
    title: string;
    brand: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, brand, image }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full h-48 overflow-hidden rounded-md">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <p className="text-sm text-gray-500">{brand}</p>
        </div>
    );
};

export default ProductCard;
