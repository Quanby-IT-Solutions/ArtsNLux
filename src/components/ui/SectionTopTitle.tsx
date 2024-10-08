// src/components/forms/SectionTopTitle.tsx

interface TextSegment {
    content: string;
    italic?: boolean;
    serif?: boolean;
}

interface SectionTopTitleProps {
    titleSegments: TextSegment[];
}

const SectionTopTitle: React.FC<SectionTopTitleProps> = ({ titleSegments }) => (
    <h3 className="text-17xl font-semibold text-center text-gray-900">
        {titleSegments.map((segment, index) => (
            <span
                key={index}
                className={`${segment.italic ? 'italic' : ''
                    } ${segment.serif ? 'font-serif' : 'font-sans'} font-medium`}
            >
                {segment.content}
            </span>
        ))}
    </h3>
);

export default SectionTopTitle;
