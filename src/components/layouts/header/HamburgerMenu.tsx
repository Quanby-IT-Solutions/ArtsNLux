// src/components/layouts/header/HamburgerMenu.tsx

'use client';

interface HamburgerMenuProps {
    onClick: () => void;
    isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick, isOpen }) => {
    return (
        <div className='md:hidden flex items-center'>
            <button onClick={onClick} className='text-black focus:outline-none'>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default HamburgerMenu;
