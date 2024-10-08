"use client";

import { DynamicQuestions } from "./DynamicQuestions";

export const ForSellers = () => {
  return <DynamicQuestions questions={questions} title="For Sellers" />;
};

const questions = [
  {
    question: "How do I list an item for auction?",
    answer: "As a seller, you can upload multiple images, set starting and reserve prices, and provide detailed descriptions.",
  },
  {
    question: "Can I schedule when my auction will go live?",
    answer: "Yes, you can schedule auction times, and registered buyers will receive automatic reminders.",
  },
  {
    question: "Can I track the status of sold items as a seller?",
    answer: "Yes, sold items are moved to a “sold” inventory list, and sellers can print packing slips and shipping labels.",
  },
  {
    question: "Can I view auction performance metrics?",
    answer: " Sellers receive detailed analytics on total sales, highest bids, and viewer engagement after each auction.",
  },
  {
    question: "Can I cancel an item listed for auction?",
    answer: "Sellers can cancel an auction only under certain conditions, such as technical issues or listing errors, but must notify all participants.",
  },
  {
    question: "What happens if no one bids on my item?",
    answer: "If no bids are placed by the auction’s end, the item can either be relisted or removed from sale, depending on the seller’s preference.",
  },
  {
    question: "Are there promotional tools for sellers?",
    answer: "N/A",
  },
  {
    question: "Are there any protections against fake bids?",
    answer: "Yes, all bids are validated through credit card pre-authorization or user verification.",
  },
];
