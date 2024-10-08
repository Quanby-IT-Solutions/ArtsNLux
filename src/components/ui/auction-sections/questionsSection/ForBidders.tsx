"use client";

import { DynamicQuestions } from "./DynamicQuestions";

export const ForBidders = () => {
  return <DynamicQuestions questions={questions} title="For Bidders" />;
};

const questions = [
  {
    question: "How do I register as a bidder?",
    answer: "N/A",
  },
  {
    question: "Can I communicate with the seller during the auction?",
    answer: [
      "To be qualified as a Trade Buyer, you must be engaged in the business of making strategic purchase decisions on the finished goods for home, furniture, fashion lifestyle and other related industries.",
      "If you are an importer, distributor, wholesaler, retailer, specifier for the contract market, or a design professional, you may register for free as a Manila FAME Trade Buyer.",
    ],
  },
  {
    question: "How do I pay for an auction item?",
    answer:
      "Buyers can pay through various methods, including credit cards, PayPal, and bank transfers.",
  },
  {
    question: "Will I receive an invoice after winning an auction?",
    answer:
      "Yes, the system automatically generates invoices once the auction is completed.",
  },
  {
    question: "How will I know when my item is shipped?",
    answer:
      "Buyers are notified when items are shipped and receive tracking information.",
  },
  {
    question: "What is the refund policy for auction items?",
    answer:
      "Refunds are handled according to the seller's policy, which will be displayed on the auction listing.",
  },
  {
    question: "Can I receive notifications for auctions I'm interested in?",
    answer:
      "Yes, buyers can opt-in for notifications about specific auctions or categories.",
  },
  {
    question: "Will I be notified if I’m outbid?",
    answer:
      "Yes, you will receive a notification if you are outbid during an auction.",
  },
  {
    question: "Is there buyer protection in case of disputes?",
    answer:
      "Yes, buyers can file disputes, and the platform will mediate between buyers and sellers to resolve issues.",
  },
  {
    question: "How do I ensure the authenticity of an item?",
    answer:
      "Sellers are required to provide detailed descriptions, certificates of authenticity (if applicable), and other documentation to verify an item’s authenticity.",
  },
];
