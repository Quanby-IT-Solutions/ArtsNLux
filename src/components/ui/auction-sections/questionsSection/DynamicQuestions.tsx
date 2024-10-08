"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  title?: string;
  question: string;
  answer: string[] | string;
}

interface DynamicQuestionsProps {
  title?: string;
  questions: Question[];
}

export const DynamicQuestions: React.FC<DynamicQuestionsProps> = ({
  title,
  questions,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <h1 className="text-primary-2 text-4xl md:text-5xl font-bold font-['Urbanist'] mr-4">
          {/* Add dynamic title here */}
          {title}
        </h1>
        <hr className="w-44 border-t-2 border-primary-2" />
      </div>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div className="w-full" key={index}>
            <motion.div
              className={`w-full px-6 py-4 cursor-pointer ${
                activeIndex === index
                  ? "bg-[#6a704c] text-white"
                  : "bg-white border border-[#6a704c] text-[#6a704c]"
              } flex justify-between items-center`}
              onClick={() => toggleAccordion(index)}
              initial={false}
              animate={{
                backgroundColor: activeIndex === index ? "#6a704c" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-lg font-bold font-['Urbanist']">
                {item.question}
              </div>
              <motion.div
                initial={false}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold"
              >
                {activeIndex === index ? "−" : "+"}
              </motion.div>
            </motion.div>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-gray-50"
                >
                   <div className="p-6 text-primary-2 text-base font-medium font-['Urbanist']">
                    {Array.isArray(item.answer)
                      ? item.answer.map((answer, i) => (
                          <p key={i} className="mb-4">
                            {answer}
                          </p>
                        ))
                      : item.answer} {/* Render the answer directly if it's a string */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
