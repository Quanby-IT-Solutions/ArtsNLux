'use client';

import useExhibitorForm from "@/hooks/useExhibitorForm";
import ThankYouModal from "@/components/ui/ThankYouModal";
import SavingState from "@/components/ui/SavingState";
import SectionTopTitle from "@/components/ui/SectionTopTitle";

const ExhibitorRegistrationForm: React.FC = () => {
  const {
    isSaving,
    showModal,
    handleSuccess,
    renderStep,
    setShowModal,
  } = useExhibitorForm();

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {isSaving ? (
        <SavingState accountType="Exhibitor" onSuccess={handleSuccess} />
      ) : showModal ? (
        <ThankYouModal
          accountType="Exhibitor"
          onClose={() => setShowModal(false)}
          title="THANK YOU!"
          successMessage="You have successfully applied for a Exhibitor account!"
          additionalMessage="Your submission has been received and is under review. You will be notified
                    via email once your account is approved."
          redirectPath="/dashboard"
          duration={8000}
        />
      ) : (
        <div className="shadow-lg rounded-lg bg-white py-20">

          <SectionTopTitle
            titleSegments={[
              { content: 'CR' },
              { content: 'E', italic: true, serif: true },
              { content: 'ATE YOUR EXHIBITOR ' },
              { content: 'A', serif: true },
              { content: 'CCOUNT' },
            ]}
          />

          {renderStep()}
        </div>
      )}
    </div>
  );
};

export default ExhibitorRegistrationForm;
