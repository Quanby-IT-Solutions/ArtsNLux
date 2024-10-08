"use client";

import { useState, useCallback } from "react";
import EmailNewsletterSubscriptio from "@/components/ui/stories-touchpoint-section/stories-email-newsletter-subscriptio";
import PortalPopup from "@/components/ui/stories-touchpoint-section/stories-portal-popup";
import SubscriptionForm from "./SubscriptionForm";
import SubscriptionVisuals from "./SubscriptionVisuals";

const SubscriptionServiceComponent = () => {
  const [isEmailNewsletterSubscriptioOpen, setEmailNewsletterSubscriptioOpen] = useState(false);

  const openEmailNewsletterSubscriptio = useCallback(() => {
    setEmailNewsletterSubscriptioOpen(true);
  }, []);

  const closeEmailNewsletterSubscriptio = useCallback(() => {
    setEmailNewsletterSubscriptioOpen(false);
  }, []);

  return (
    <>
      <div className="w-full h-fit bg-primary-2 text-timeless-white overflow-hidden">
        <div className="w-full h-full flex flex-row gap-12 py-20 max-w-[80%] mx-auto">
          <div className="w-full h-full flex flex-col">
            <div className="flex flex-row gap-2 justify-start items-center">
              <p>Subscribe</p>
              <hr className="w-16 border border-timeless-white" />
            </div>
            <SubscriptionForm openEmailNewsletterSubscriptio={openEmailNewsletterSubscriptio} />
          </div>
          <SubscriptionVisuals />
        </div>
      </div>

      {isEmailNewsletterSubscriptioOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEmailNewsletterSubscriptio}
        >
          <EmailNewsletterSubscriptio onClose={closeEmailNewsletterSubscriptio} />
        </PortalPopup>
      )}
    </>
  );
};

export default SubscriptionServiceComponent;
