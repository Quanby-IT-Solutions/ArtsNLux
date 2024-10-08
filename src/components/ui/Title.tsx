import React from 'react';

interface TitleProps {
    headerText: string;
    subheaderText: string;
    subheaderSize?: 'text-21xl' | 'text-5xl';
}

const Title: React.FC<TitleProps> = ({ headerText, subheaderText, subheaderSize = 'text-21xl' }) => {
    const splitText = (text: string, maxWords: number) => {
        const words = text.split(' ');
        const lines: string[] = [];

        for (let i = 0; i < words.length; i += maxWords) {
            lines.push(words.slice(i, i + maxWords).join(' '));
        }

        return lines;
    };

    const lines = subheaderSize === 'text-21xl' ? splitText(subheaderText, 3) : [subheaderText];

    return (
        <header className="w-full max-w-4xl flex flex-col items-start justify-start gap-6 px-4 py-6">
            <div className="flex items-center w-full gap-4">
                <h3 className="text-lg font-medium leading-snug text-gray-900">
                    {headerText}
                </h3>
                <div className="w-24 h-1 bg-gray-900" />
            </div>
            <h1 className={`${subheaderSize} font-bold text-gray-900`}>
                {lines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < lines.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h1>
        </header>
    );
};

export default Title;
