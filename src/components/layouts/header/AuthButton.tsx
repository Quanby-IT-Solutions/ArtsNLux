// src/components/layouts/header/AuthButton.tsx

'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

interface AuthButtonProps {
    href: string;
    label: string;
    primary?: boolean;
    mobile?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ href, label, primary, mobile }) => {
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
        tap: { scale: 0.95 },
    };

    return (
        <motion.div layout variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
                href={href}
                className={`${primary
                    ? `bg-primary-2 text-white ${mobile ? 'w-full py-3 px-4' : 'px-6 py-2'} shadow-md hover:bg-primary-3 transition duration-300`
                    : `text-[#6A704C] ${mobile ? 'w-full py-3 px-4' : 'px-6 py-2'} border border-[#6A704C] text-bold hover:bg-[#6A704C] hover:text-white transition duration-300`
                    } ${mobile ? 'rounded-lg text-center' : 'rounded-none'}`}
            >
                {label}
            </Link>
        </motion.div>
    );
};

export default AuthButton;
