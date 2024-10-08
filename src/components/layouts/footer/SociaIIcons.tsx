interface SocialIconsProps {
  icons: string[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className='flex gap-3 items-center self-stretch my-auto'>
      {icons.map((icon, index) => (
        <img
          key={index}
          loading='lazy'
          src={icon}
          className='object-contain shrink-0 self-stretch my-auto w-6 aspect-square'
          alt={`Social icon ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
