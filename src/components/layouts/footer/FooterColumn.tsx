interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className='flex flex-col self-stretch my-auto w-[136px]'>
      <div className='flex flex-col min-h-[270px]'>
        <h2 className='text-xl font-semibold text-secondary-3'>{title}</h2>
        <ul className='flex flex-col mt-8 w-full text-base leading-loose min-h-[210px]'>
          {items.map((item, index) => (
            <li key={index} className={index > 0 ? 'mt-3' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterColumn;
