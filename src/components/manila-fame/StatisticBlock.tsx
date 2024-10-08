import React from 'react';

interface StatisticBlockProps {
  value: string;
  description: string;
}

const StatisticBlock: React.FC<StatisticBlockProps> = ({ value, description }) => {
  return (
    <div className="flex flex-col w-72 min-w-[240px]">
      <div className="text-18xl font-bold text-white">{value}</div>
      <div className="mt-1.5 text-4xl leading-8 text-neutral-200">{description}</div>
    </div>
  );
};

export default StatisticBlock;
