'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import Image from 'next/image';
import Dropdown from './Dropdown';
import NavLink from '@/components/ui/NavLink';
import AuthButton from './AuthButton';
import HamburgerMenu from './HamburgerMenu';


const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to manage scroll detection

  const spotlightItems = [
    { label: 'Design Commune' },
    { label: 'Market Days' },
    {
      label: 'Trade Fairs',
      subItems: [
        { label: 'Tokyo International Gift Show 2024' },
        { label: 'Ambiente 2024' },
        { label: 'Maison&Objet Paris 2024' },
      ],
    },
  ];

  // Scroll event listener to change the header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`sticky top-0 flex items-center justify-between h-[80px] p-4 lg:p-6 xl:px-[167px] xl:py-[28px] gap-4 md:gap-10 mx-auto opacity-100 z-50 shadow-md transition-colors duration-300`}
      initial={{ backgroundColor: '#F4F4F2' }}
      animate={{
        backgroundColor: isScrolled ? '#D1D5DB' : 'transparent', // Change background color on scroll
      }}
    >
      {/* Logo Section */}
      <div className='logo'>
        <Image
          src='/assets/logo_artLux.png'
          alt='Company logo'
          width={73}
          height={73}
          className='object-contain shrink-0'
          loading='lazy'
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu onClick={() => setMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />

      {/* Navigation Links */}
      <nav
        className={`fixed md:static left-0 top-0 w-full h-full md:h-auto md:w-auto md:flex items-center justify-center bg-white md:bg-transparent z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full md:translate-x-0'
          }`}
      >
        <div className='flex flex-col md:flex-row items-center md:gap-6 xl:gap-8 mt-20 md:mt-0'>
          <NavLink href='/' label='Home' activeLabel={<><i className='pr-[2px]'>O</i>ME</>} />
          {/* <NavLink href='/manila-fame' label='Manila Fame' activeLabel={<><i className='pr-[2px]'>A</i>NILA FAME</>} /> */}
          {/* <Dropdown label="Spotlight" items={spotlightItems}/> */}
          {/* <NavLink href='/stories' label='Stories' activeLabel={<><i className='pr-[2px]'>T</i>ORIES</>} /> */}
          <NavLink href='/spotlight' label='Spotlight' activeLabel={<><i className='pr-[2px]'>P</i>LIGHT</>} />
          {/* Temporary Link on Artisans */}
          <NavLink href='/artisans' label='Artisans' activeLabel={<><i className='pr-[2px]'>R</i>TISANS</>} />
          <NavLink href='/auction' label='Auction' activeLabel={<><i className='pr-[2px]'>U</i>CTION</>} />
          <NavLink href='/catalogue' label='Catalogue' activeLabel={<><i className='pr-[2px]'>A</i>TALOGUE</>} />
          <NavLink href='/about-us' label='About Us' activeLabel={<><i className='pr-[2px]'>B</i>OUT US</>} />

          {/* Authentication Buttons for Mobile */}
          <div className='flex flex-col items-center gap-4 mt-6 md:hidden px-8 w-full'>
            <AuthButton href='/login' label='Login' mobile />
            <AuthButton href='/register' label='Register' primary mobile />
          </div>
          {/* Close Menu Button for Mobile */}
          <button
            className='md:hidden text-black absolute top-4 right-4 focus:outline-none'
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      </nav>

      {/* Authentication Buttons for Desktop */}
      <div className='hidden md:flex items-center gap-4 xl:text-sm 2xl:text-lg'>
        <AuthButton href='/login' label='Login' />
        <AuthButton href='/register' label='Register' primary />
      </div>
    </motion.header>
  );
};


export default Header;
