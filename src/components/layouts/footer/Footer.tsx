import FooterColumn from './FooterColumn';
import Logo from './Logo';
import SocialIcons from './SociaIIcons';

interface FooterProps {
  socialIcons: string[];
  paymentIcons: string[];
  columns: {
    title: string;
    items: string[];
  }[];
}

const Footer: React.FC<FooterProps> = ({
  socialIcons,
  paymentIcons,
  columns,
}) => {
  return (
    <footer className='flex flex-col items-center pt-24 pb-14 w-full bg-primary-1 max-md:px-5 max-md:max-w-full '>
      <div className='max-w-[80%] flex flex-wrap gap-9  justify-between items-center w-full  max-md:max-w-full'>
        <div className='flex flex-col self-stretch my-auto  '>
          <Logo />
          <div className='flex overflow-hidden gap-8 items-center mt-24 max-md:mt-10'>
            <SocialIcons icons={socialIcons} />
            <SocialIcons icons={paymentIcons} />
          </div>
        </div>
        <nav className='flex overflow-hidden flex-col justify-end items-end self-stretch px-16 my-auto min-w-[240px] text-stone-800 w-[822px] max-md:pl-5 max-md:max-w-full '>
          <div className='flex flex-wrap gap-10 items-center'>
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                items={column.items}
              />
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
