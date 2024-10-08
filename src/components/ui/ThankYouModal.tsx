import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ThankYouModalProps {
    accountType: string;
    onClose: () => void;
    title?: string;
    successMessage?: string;
    additionalMessage?: string;
    redirectPath?: string;
    duration?: number;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({
    accountType,
    onClose,
    title = 'THANK YOU!',
    successMessage = `You have successfully applied for a ${accountType} account!`,
    additionalMessage = 'Your submission has been received and is under review. You will be notified via email once your account is approved.',
    redirectPath = '/',
    duration = 5000,
}) => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
            router.push(redirectPath);
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, router, redirectPath, duration]);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white p-8 shadow-lg text-center max-w-2xl mx-4">
                <h1 className="text-4xl font-bold mb-4 text-stone-900">{title}</h1>
                <p className="text-lg font-medium text-stone-900 mb-4">{successMessage}</p>
                {additionalMessage && <p className="text-lg font-medium text-stone-900 mb-6">{additionalMessage}</p>}
            </div>
        </div>
    );
};

export default ThankYouModal;