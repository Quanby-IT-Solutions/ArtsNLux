'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

interface DropdownItem {
    label: string;
    subItems?: DropdownItem[];
}

interface DropdownProps {
    label: string;
    items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
        tap: { scale: 0.95 },
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Render nested dropdown items recursively
    const renderDropdownItems = (items: DropdownItem[]) => {
        return items.map((item, index) => (
            <li key={index} className='relative group'>
                {item.subItems ? (
                    <>
                        <span className='p-2 flex items-center justify-between hover:bg-[#E7E8E9] whitespace-nowrap cursor-pointer group-hover:bg-[#E7E8E9] text-gray-900'>
                            {item.label}
                            {/* Arrow Icon for Sub-dropdown */}
                            <ChevronRightIcon className='w-4 h-4 ml-2 text-gray-700 group-hover:text-black' />
                        </span>
                        {/* Sub-dropdown positioned for mobile and desktop */}
                        <ul className='absolute left-full top-0 mt-2 ml-1 hidden group-hover:flex flex-col bg-white shadow-lg border border-gray-200 rounded min-w-max'>
                            {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex} className='p-2 hover:bg-[#E7E8E9] whitespace-nowrap cursor-pointer text-gray-900'>
                                    {subItem.label}
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <span className='p-2 hover:bg-[#E7E8E9] whitespace-nowrap cursor-pointer block text-gray-900'>
                        {item.label}
                    </span>
                )}
            </li>
        ));
    };

    return (
        <div className='relative' ref={dropdownRef}>
            {/* Toggle Button */}
            <motion.div
                layout
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
                className={`tracking-tighter cursor-pointer ${isOpen ? 'text-black font-bold' : 'text-gray-700'
                    } hover:text-black p-2 flex items-center`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='inline-flex items-center'>
                    <span>{label}</span>
                    {/* Down Arrow Icon for Main Dropdown */}
                    <ChevronDownIcon className='w-4 h-4 ml-2 text-gray-700' />
                </span>
            </motion.div>

            {/* Main Dropdown Menu */}
            {isOpen && (
                <ul
                    className='absolute left-0 z-10 mt-2 bg-white shadow-lg border border-gray-200 rounded text-gray-900 min-w-max'
                >
                    {renderDropdownItems(items)}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
