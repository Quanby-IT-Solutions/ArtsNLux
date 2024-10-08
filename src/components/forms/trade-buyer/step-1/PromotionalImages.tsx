// src/components/forms/trade-buyer/step-1/PromotionalImages.tsx

import Image from 'next/image';

const PromotionalImages: React.FC = () => {
    return (
        <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-36 max-md:mt-10 max-md:max-w-full">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf18850ed284a01f0d60d9a532ac1ba6743e1034c7e6c929762c47ebaefa7038?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                    alt="Buyer registration promotional image"
                    className="object-contain w-full aspect-[0.89] max-md:flex max-md:max-w-full max-sm:hidden"
                    layout="responsive"
                    width={700}
                    height={600}
                    quality={100}
                />
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/859901a7c1216a25e4bef539616c58373c3659a3f3d5105d3feaa54814916508?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                    alt="Additional buyer registration promotional image"
                    className="object-contain mt-5 w-full aspect-[0.88] max-md:flex max-md:max-w-full max-sm:hidden"
                    layout="responsive"
                    width={700}
                    height={600}
                    quality={100}
                />
            </div>
        </aside>
    );
};

export default PromotionalImages;
