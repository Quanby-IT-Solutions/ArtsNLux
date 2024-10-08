"use client";

import { DynamicQuestions } from "./DynamicQuestions";

export const GeneralInformation = () => {
  return <DynamicQuestions questions={questions} title="General Information" />;
};

const questions = [
  {
    question: "How do I register as a buyer or seller?",
    answer: "Sellers and buyers can sign up using an email.",
  },
  {
    question: "Can I update my profile information after registration?",
    answer:
      "Yes, you can update your profile, including contact details, pictures, and business logos at any time.",
  },
  {
    question: "How are bids handled during live auctions?",
    answer: "The system tracks and displays bids in real-time, ensuring the highest bid is always visible.",
  },
];
