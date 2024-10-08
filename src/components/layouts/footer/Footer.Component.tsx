import FooterMenuItems from './footer.MenuItems.Component';

const Footer1 = () => {
  return (
    <footer className='bg-[#EFE3D6] py-10 px-6 text-center w-full mt-auto'>
      <div className='container mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0'>
        {/* Logo and description */}
        <div className='text-center md:text-left'>
          <h1 className='text-2xl font-bold'>FAME+</h1>
          <p className='text-sm mt-2'>PHILIPPINE DESIGN AND BEYOND</p>
          {/* Social Media Links as Text */}
          <div className='flex space-x-4 justify-center md:justify-start mt-4'>
            <a href='/test' className='text-black hover:text-gray-600'>
              Facebook
            </a>
            <a href='#' className='text-black hover:text-gray-600'>
              Instagram
            </a>
            <a href='#' className='text-black hover:text-gray-600'>
              Xing
            </a>
            <a href='#' className='text-black hover:text-gray-600'>
              LinkedIn
            </a>
            <a href='#' className='text-black hover:text-gray-600'>
              DTI
            </a>
            <a href='#' className='text-black hover:text-gray-600'>
              CITEM
            </a>
          </div>
        </div>

        {/* Footer Menu Items */}
        <FooterMenuItems />
      </div>
    </footer>
  );
};

export default Footer1;
