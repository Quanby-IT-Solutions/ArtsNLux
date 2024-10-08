// src/hooks/useExhibitorForm.tsx

import { useState } from "react";
import { ExhibitorInfo } from "@/interfaces/exhibitor";
import EventSelection from "@/components/forms/exhibitor/step-1/EventSelection";
import BasicInformation from "@/components/forms/exhibitor/step-2/BasicInformation";
import ContactDetails from "@/components/forms/exhibitor/step-3/ContactDetails";
import BusinessRegistration from "@/components/forms/exhibitor/step-4/BusinessRegistration";
import Documents from "@/components/forms/exhibitor/step-5/Documents";
import ParticipationDetails from "@/components/forms/exhibitor/step-6/ParticipationDetails";
import SummaryPage from "@/components/forms/exhibitor/step-7/SummaryPage";

const useExhibitorForm = () => {
    const [step, setStep] = useState(1);
    const [isSaving, setIsSaving] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Define formData with proper type
    const [formData, setFormData] = useState<{ exhibitorInfo: ExhibitorInfo }>({
        exhibitorInfo: {
            username: "",
            businessRegisteredInPhilippines: false,
            pastParticipation: false,
            officeAddress: "",
            factoryAddress: "",
            website: "",
            mobileAppsLinked: false,
            philexportMember: false,
            financialStatement: null,
            mayorPermit: null,
            productPhotos: [],
            philexportDocument: null,
            participatingIn: "",
            participatingAs: "",
            participationPackage: "",
            boothSizeRequirement: "",
            spaceBoothCost: "",
            fameSubscriptionFee: "",
            packageCostEstimate: "",
            promotionalName: "",
            majorityProductsShowcased: "",
            boothOption: "",
            philexportMembership: "",
            packagingName: "",
            boothSize: "",
            boothName: "",
            productCategory: "",
            brandStoryOption: "",
            brandStoryWriteup: "",
            yearEstablished: "",
            businessPermitValidity: "",
            industryAffiliation: "",
            businessMobile: "",
            companySize: "",
            directWorkers: "",
            indirectWorkers: "",
            organizationType: "",
            natureOfBusiness: "",
            tradeExperience: "",
            exportCountries: "",
            orderTypes: [],
            marketSegment: "",
            homeDecorCategories: [],
            facebook: "",
            instagram: "",
            twitter: "",
            linkedin: "",
            directory: "",
            firstName: "",
            middleInitial: "",
            lastName: "",
            gender: "",
            designation: "",
            mobileNumber: "",
            viber: false,
            weChat: false,
            whatsApp: false,
            emailAddress: "",
            phoneNumber: "",
            sameAsOfficeAddress: false,
            noFactoryAddress: false,
            country: undefined,
            region: undefined,
            province: undefined,
            city: undefined,
            zipCode: "",
            street: "",
            companyName: "",
            email: "",
            contactPerson: "",
            password: "",
            confirmPassword: "",
            edition: "",
            agreeToTerms: false,
            event: "",
            participationType: ""
        },
    });

    const updateFormData = <K extends keyof typeof formData>(section: K, data: Partial<typeof formData[K]>) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                ...data,
            },
        }));
    };

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 7));
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
                    <EventSelection
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                );
            case 2:
                return (
                    <BasicInformation
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                );
            case 3:
                return (
                    <ContactDetails
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                );
            case 4:
                return (
                    <BusinessRegistration
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                );
            case 5:
                return (
                    <Documents
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                );
            case 6:
                return (
                    <ParticipationDetails
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                );
            case 7:
                return (
                    <SummaryPage
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
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

export default useExhibitorForm;
