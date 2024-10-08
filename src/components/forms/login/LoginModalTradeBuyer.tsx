/* eslint-disable @next/next/no-img-element */
// src/components/forms/LoginModal.tsx
"use client";
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  title: string;
  logoText: string;
  onClose: () => void;
  // Prop to differentiate the type of login
  loginType: 'Exhibitor' | 'Trade Buyer';
}

const LoginModal: React.FC<LoginModalProps> = ({ title, logoText, onClose, loginType, }) => {
  const router = useRouter();

  // Function to handle registration navigation
  const handleRegisterClick = () => {
    if (loginType === 'Exhibitor') {
      router.push('/exhibitor-registration');
    } else if (loginType === 'Trade Buyer') {
      router.push('/trade-buyer-registration');
    }
    // Close modal after navigation
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center text-primary-2 bg-opacity-50"
      // Closes the modal when clicking outside
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-[60%] bg-secondary-7 shadow-lg transition-colors duration-300"
        // Prevent close when clicking inside the modal
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side - Logo */}
        <div className="flex items-center justify-center w-full bg-primary-2 p-8">
          <img className='px-12' src="assets/logo_white.png" alt="" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full p-8 shadow-custom-shadow">
          <h2 className="text-17xl leading-tight font-bold mb-6 capitalize">Login to your <br /> trade buyer account</h2>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-secondary-5 focus:outline-secondary-5"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-secondary-5 focus:outline-secondary-5"
            />
            <div className="flex justify-end ">
              <a href="#" className="text-sm -mt-4 text-gray-600 dark:text-gray-400 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary-5 text-white p-4 font-bold transition-colors duration-300"
            >
              LOGIN
            </button>
          </form>
          {/* Registration Link */}
          <div className="mt-4 text-center text-sm">
            Don&#39;t have an account?{' '}
            <a href="#" className="text-[#656445] dark:text-[#a0a37a] hover:underline" onClick={handleRegisterClick}>
              Register Here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
