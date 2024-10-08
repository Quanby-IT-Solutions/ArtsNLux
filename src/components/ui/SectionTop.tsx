'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import LoginModal from '../forms/login/LoginModalTradeBuyer';
import SectionTopTitle from './SectionTopTitle';

export default function SectionTop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loginType, setLoginType] = useState<'Exhibitor' | 'Trade Buyer'>('Exhibitor');
    const router = useRouter();

    const openModal = (type: 'Exhibitor' | 'Trade Buyer') => {
        setLoginType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <div className="w-full flex flex-col items-center justify-start tracking-wide">
            <div className=" w-full flex flex-col items-center justify-center pt-2">
                
                <SectionTopTitle
                    titleSegments={[
                        { content: "R" },
                        { content: "E", italic: true, serif: true },
                        { content: "GISTER " },
                        { content: "N", serif: true },
                        { content: "OW" },
                    ]}
                />
                
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 max-w-7xl mx-auto p-4">

                    <motion.div
                        className="group bg-white my-4 p-8 w-full md:w-[30%] drop-shadow-sm max-w-md text-center transition-colors duration-300 border border-transparent hover:bg-gray-100"
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white">FOR TRADE BUYERS</h2>
                        <p className="text-gray-700 mb-4 group-hover:text-white">
                            The platform is reserved exclusively for decor, design, and lifestyle professionals.
                        </p>
                        <p className="text-gray-700 mb-4 group-hover:text-white">Get in touch with suppliers and brands.</p>
                        <p className="text-gray-700 mb-4 group-hover:text-white">Access to product specifications.</p>
                        <p className="text-gray-700 mb-6 group-hover:text-white">Access to exclusive content.</p>
                        <button
                            type="button"
                            className="bg-darkolivegreen text-white py-3 px-6 w-full transition-colors duration-300 group-hover:bg-gray-700"
                            onClick={() => router.push('/trade-buyer-registration')}
                        >
                            <p className="font-bold text-lg">Create Trade Buyer Account</p>
                        </button>
                        <p className="text-sm mt-4 text-gray-700 group-hover:text-white">
                            Already a FAME buyer?{' '}
                            <button
                                onClick={() => openModal('Trade Buyer')}
                                className="underline hover:text-stone-200"
                            >
                                Login here.
                            </button>
                        </p>
                    </motion.div>

                    <motion.div
                        className="group bg-darkolivegreen my-4 p-10 md:p-12 w-full md:w-[30%] max-w-md text-center shadow-custom-shadow-2xl text-white transition-colors duration-300 hover:bg-darkgreen"
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <h2 className="text-2xl font-bold mb-4">FOR VISITORS</h2>
                        <p className="mb-4 group-hover:text-white">
                            Non-trade buyers are welcome to visit Manila FAME. Pre-register here for the October 2024 show.
                        </p>
                        <p className="mb-4 group-hover:text-white">
                            Do not miss out on the most awaited Philippine fair for home, fashion, and lifestyle.
                        </p>
                        <p className="mb-6 group-hover:text-white">Indulge your senses, be inspired, and network.</p>
                        <button
                            type="button"
                            className="bg-white text-darkolivegreen mt-1 py-3 px-6 w-full transition-colors duration-300 group-hover:bg-gray-300"
                            onClick={() => router.push('/visitor-registration')}
                        >
                            <p className="font-bold text-lg text-black group-hover:text-white">Register</p>
                        </button>
                    </motion.div>

                    <motion.div
                        className="group bg-white my-4 p-8 w-full md:w-[30%] max-w-md text-center drop-shadow-sm transition-colors duration-300 border border-transparent hover:bg-gray-100"
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white">FOR EXHIBITORS</h2>
                        <p className="text-gray-700 mb-4 group-hover:text-white">
                            Continuous online visibility to your brands with a network of professionals worldwide.
                        </p>
                        <p className="text-gray-700 mb-4 group-hover:text-white">
                            Exclusive to Philippine manufacturers, traders, designers, and artisans who are currently exporting or
                            looking to expand to the global market.
                        </p>
                        <button
                            type="button"
                            className="bg-darkolivegreen text-white py-3 px-6 w-full transition-colors duration-300 group-hover:bg-gray-700"
                            onClick={() => router.push('/exhibitor-registration')}
                        >
                            <p className="font-bold text-lg">Create Exhibitor Account</p>
                        </button>
                        <p className="text-sm mt-4 text-gray-700 group-hover:text-white">
                            Already a FAME Exhibitor?{' '}
                            <button
                                onClick={() => openModal('Exhibitor')}
                                className="underline hover:text-stone-200"
                            >
                                Login here.
                            </button>
                        </p>
                    </motion.div>
                </div>

                {isModalOpen && (
                    <LoginModal
                        title={`Login To Your ${loginType} Account`}
                        logoText="FAME+"
                        onClose={closeModal}
                        loginType={loginType}
                    />
                )}
            </div>
        </div>
    );
}
