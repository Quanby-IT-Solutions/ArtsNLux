const Logo: React.FC = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col w-full text-base font-bold leading-loose text-stone-800'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/814e4b7518aaed6c098d36c60f247bea17d91cf2d64281abb67edf47d8f3b56e?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106'
          className='object-contain max-w-full aspect-[4.85] w-[175px]'
          alt='Company logo'
        />
        <div className='mt-8'>
          <span className=''>P</span>HILIPPINE D{' '}
          <span className='italic '>E</span>SIGN AND BEY{' '}
          <span className='italic '>O</span>ND
        </div>
      </div>
    </div>
  );
};

export default Logo;
