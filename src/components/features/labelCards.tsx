import Image from 'next/image';

import Card from '../ui/Card';
import CardContent from '../ui/CardContent';

interface labels {
    title:string;
}

interface LabelCardProps {
    labels: labels;
}

const labelCard: React.FC<LabelCardProps> = ({ labels }) => {
    return (
            <CardContent className="p-[40px] max-w-[800px] font-bold text-[20px] w-[450px] sm:w-[600px] hover:text-[white] hover:bg-[#6A704C]">
               <div>{labels.title}</div>           
            </CardContent>
    );
};

export default labelCard;
