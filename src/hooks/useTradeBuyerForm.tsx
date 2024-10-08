// src/hooks/useTradeBuyerForm.tsx

import { useState } from "react";
import { FormData } from "@/interfaces/trade-buyer";

import BuyerRegistrationForm from "@/components/forms/trade-buyer/step-1/BuyerRegistrationForm";
import BusinessInformation from "@/components/forms/trade-buyer/step-2/BusinessInformation";
import ProductCategory from "@/components/forms/trade-buyer/step-3/ProductCategory";
import ParticipationDetailsForm from "@/components/forms/trade-buyer/step-4/ParticipationDetails";
import BuyerInformation from "@/components/forms/trade-buyer/step-5/BuyerInformation";

const useTradeBuyerForm = () => {
    const [step, setStep] = useState(1);
    const [isSaving, setIsSaving] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        buyerInfo: {
            salutation: '',
            firstName: '',
            lastName: '',
            country: '',
            emailAddress: '',
            confirmEmailAddress: '',
            password: '',
            confirmPassword: '',
            companyName: '',
            designation: '',
            website: '',
            allowDataSharing: false,
            attendingFame: "",
            agreeToTerms: false,
            receiveNewsletters: false,
        },
        businessInfo: {
            officeAddress: '',
            contactNumber: '',
            purchasingRole: '',
            businessNature: '',
            marketSegment: [],
            annualSalesVolume: '',
            supplierName: '',
            salesVolume: '',
            suppliers: [],
            natureOfBusiness: ""
        },
        productCategories: [],
        participationDetails: {
            reasonsForRegistering: [],
            howDidYouLearn: [],
            socialMedia: [],
            attendedPreviousEditions: '',
        },
    });

    const updateFormData = <K extends keyof FormData>(section: K, data: Partial<FormData[K]>) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                ...data,
            },
        }));
    };

    const updateProductCategories = (categories: string[]) => {
        setFormData((prevData) => ({
            ...prevData,
            productCategories: categories,
        }));
    };

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
        setIsSaving(true);
    };

    const handleSuccess = () => {
        setIsSaving(false);
        setShowModal(true);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <BuyerRegistrationForm
                        data={formData.buyerInfo}
                        updateData={(data) => updateFormData('buyerInfo', data)}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                );
            case 2:
                return (
                    <BusinessInformation
                        data={formData.businessInfo}
                        updateData={(data) => updateFormData('businessInfo', data)}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                );
            case 3:
                return (
                    <ProductCategory
                        selectedCategories={formData.productCategories}
                        updateSelectedCategories={updateProductCategories}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                );
            case 4:
                return (
                    <ParticipationDetailsForm
                        data={formData.participationDetails}
                        updateData={(data) => updateFormData('participationDetails', data)}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                );
            case 5:
                return (
                    <BuyerInformation
                        buyerInfo={formData.buyerInfo}
                        companyDetails={formData.businessInfo}
                        handlePrev={handlePrev}
                        handleSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    };

    return {
        step,
        isSaving,
        showModal,
        formData,
        handleNext,
        handlePrev,
        handleSubmit,
        handleSuccess,
        renderStep,
        setShowModal,
    };
};

export default useTradeBuyerForm;
