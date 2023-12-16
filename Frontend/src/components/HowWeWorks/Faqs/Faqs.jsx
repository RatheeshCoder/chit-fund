import React, { useState } from "react";
import { faqsList } from "../../../data/data";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5 ">
      <details className={`group ${isOpen ? "open" : ""}`}>
        <summary
          className="flex cursor-pointer list-none items-center justify-between font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className={`group-open:animate-fadeIn mt-3 text-neutral-600`}>
          {answer}
        </p>
      </details>
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 mt-40 mb-20">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-20 text-center text-3xl font-bold tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-neutral-500 md:text-xl">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqsList.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
