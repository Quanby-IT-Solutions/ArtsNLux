import Image from 'next/image';

import Card from './Card';
import CardContent from './CardContent';

interface Reviewer {
    name: string;
    specialization: string;
    profile: string;
    comment: string;
}

interface ReviewerCardProps {
    reviewer: Reviewer;
}

const ReviewerCard: React.FC<ReviewerCardProps> = ({ reviewer }) => {
    return (
        <Card className="h-full">
            <CardContent className="flex flex-col h-full">
                <p className="text-gray-700 mb-4 flex-grow">{reviewer.comment}</p>
                <div className="flex items-center mt-4">
                    <Image
                        src={reviewer.profile}
                        alt={reviewer.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <div className="ml-4">
                        <p className="font-semibold text-gray-900">{reviewer.name}</p>
                        <p className="text-sm text-gray-600">{reviewer.specialization}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ReviewerCard;
