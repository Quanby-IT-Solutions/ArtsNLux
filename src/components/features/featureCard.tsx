
import Carousel from "./carouselY";

export default function FeatureCard() {
    const labels = [
        {
            title:"Curated Catalague"
        },
        {
            title:"Storytelling through Artisan Profile"
        },
        {
            title:"Exclusive Auction Platform"
        },
        {
            title:"dummmyyyy"
        },
        {
            title:"dummmyyyy"
        },
        {
            title:"dummmyyyy"
        },
        {
            title:"dummmyyyy"
        },
        {
            title:"dummmyyyy"
        },

    ];

    return (
        <div className="w-full text-primary-2 flex flex-col gap-10">
            <Carousel slides={labels} />
        </div>
    );
}
