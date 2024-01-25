// FAQsPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faqsList } from "../../data/data";
import openImage from "../../asset/imgs/openImage.png";
import closeImage from "../../asset/imgs/closeImage.png";

const FAQsPage = () => {
  const [isFAQsVisible, setIsFAQsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleFAQsVisibility = () => {
    setIsFAQsVisible((prev) => !prev);
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="mx-4 mt-12 font-sans text-lg leading-relaxed md:mx-8 ">
      <div className="fixed z-50 bottom-4 right-6">
        <button className="focus:outline-none " onClick={toggleFAQsVisibility}>
          <img
            src={isFAQsVisible ? closeImage : openImage}
            alt={isFAQsVisible ? "Close FAQs" : "Show FAQs"}
            className="w-12 h-12 "
          />
        </button>
      </div>

      {isFAQsVisible && (
        <div className="fixed inset-0 z-40 mt-12 overflow-y-auto bg-white rounded-md shadow-md">
          <div className="flex items-center justify-center ">
            <div className="w-full max-w-5xl">
              <div className="grid gap-4 py-8 md:grid-cols-2">
                {faqsList.map((item, idx) => (
                  <div className="px-8 mt-6 space-y-3" key={idx}>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {item.q}
                    </h4>
                    <p className="text-gray-500">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQsPage;
