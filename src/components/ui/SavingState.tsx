import { useEffect } from 'react';

interface SavingStateProps {
  accountType: string;
  onSuccess: () => void;
}

const SavingState: React.FC<SavingStateProps> = ({ accountType, onSuccess }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onSuccess();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onSuccess]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70">
      <h1 className="text-3xl font-bold mb-4 text-white">Processing Your Application...</h1>
      <p className="text-2xl font-normal text-white">
        Your {accountType} account is being set up. Please wait.
      </p>
      {/* Loading Spinner */}
      <div className="flex justify-center mt-8">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default SavingState;
