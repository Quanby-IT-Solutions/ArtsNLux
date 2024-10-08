// src/components/ui/NavLink.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    label: string;
    activeLabel?: JSX.Element;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, activeLabel }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
        tap: { scale: 0.95 },
    };

    return (
        <motion.div
            layout
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
        >
            <Link href={href} className={`tracking-tighter ${isActive ? 'font-bold text-black' : 'text-gray-700'}`}>
                {isActive ? (
                    <span>
                        {label[0]}{activeLabel}
                    </span>
                ) : (
                    label
                )}
            </Link>
        </motion.div>
    );
};

export default NavLink;
