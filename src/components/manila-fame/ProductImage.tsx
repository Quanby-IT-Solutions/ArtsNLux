/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ProductImageProps {
  src: string;
  altText: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, altText }) => {
  return (
    <img loading="lazy" src={src} alt={altText} className="object-contain grow shrink aspect-[1.49] min-w-[240px] w-[280px]" />
  );
};

export default ProductImage;
