// src/components/forms/trade-buyer/step-1/TermsAndAgreementsSection.tsx

import CheckboxField from '@/components/ui/CheckboxField';
import { BuyerInfo } from '@/interfaces/trade-buyer';

interface TermsAndAgreementsSectionProps {
    data: BuyerInfo;
    updateData: (data: Partial<BuyerInfo>) => void;
}

const TermsAndAgreementsSection: React.FC<TermsAndAgreementsSectionProps> = ({ data, updateData }) => {
    return (
        <section className="flex flex-col mt-8 max-w-full w-[533px]">
            <CheckboxField
                label={
                    <>
                        I agree to the{" "}
                        <span className="font-semibold underline text-stone-600">Terms and Conditions.</span>
                    </>
                }
                checked={data.agreeToTerms}
                onChange={() => updateData({ agreeToTerms: !data.agreeToTerms })}
            />
            <CheckboxField
                label="I agree to receive newsletters and other promotional materials from and about FAME+ and Manila FAME through the email address indicated."
                checked={data.receiveNewsletters}
                onChange={() => updateData({ receiveNewsletters: !data.receiveNewsletters })}
            />
            <CheckboxField
                label="I allow my data to be shared with Event Partners and Sponsors, subject to R.A. No. 10173 or the Philippine Data Privacy Act."
                checked={data.allowDataSharing}
                onChange={() => updateData({ allowDataSharing: !data.allowDataSharing })}
            />
        </section>
    );
};

export default TermsAndAgreementsSection;
