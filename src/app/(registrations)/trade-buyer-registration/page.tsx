'use client';

import useTradeBuyerForm from "@/hooks/useTradeBuyerForm";
import ThankYouModal from "@/components/ui/ThankYouModal";
import SavingState from "@/components/ui/SavingState";

const TradeBuyerRegistrationForm: React.FC = () => {
  const {
    isSaving,
    showModal,
    handleSuccess,
    renderStep,
    setShowModal,
  } = useTradeBuyerForm();

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {isSaving ? (
        <SavingState accountType="Trade Buyer" onSuccess={handleSuccess} />
      ) : showModal ? (
        <ThankYouModal
          accountType="Trade Buyer"
          onClose={() => setShowModal(false)}
          title="THANK YOU!"
          successMessage="You have successfully applied for a Trade Buyer account!"
          additionalMessage="Your submission has been received and is under review. You will be notified
                    via email once your account is approved."
          redirectPath="/dashboard"
          duration={8000}
        />
      ) : (
        <div className="shadow-lg rounded-lg bg-white py-20">
          <h1 className="text-17xl font-semibold text-center">
            CR<span className="italic font-serif font-medium">E</span>ATE YOUR TRADE
            <div>BUYER{" "}
              <span className=" font-serif">A</span>CCOUNT
            </div>
          </h1>
          {renderStep()}
        </div>
      )}
    </div>
  );
};

export default TradeBuyerRegistrationForm;
