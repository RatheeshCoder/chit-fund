// FAQsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faqsList } from '../../data/data';
import openImage from '../../asset/imgs/FAQsOpenImg.png';
import closeImage from '../../asset/imgs/FAQsCloseImg.png'; 


const FAQsPage = () => {
  const [isFAQsVisible, setIsFAQsVisible] = useState(false); // Set initial state to false
  const navigate = useNavigate();

  const toggleFAQsVisibility = () => {
    setIsFAQsVisible((prev) => !prev);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="leading-relaxed mt-12 mx-4 md:mx-8">
      {isFAQsVisible ? (
        <div className="text-center space-y-3">
          <h1 className="block text-gray-800 text-3xl font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Answered all frequently asked questions. Can’t find the answer you’re looking for? feel free to contact us.
          </p>
        </div>
      ) : null}

      {/* Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="focus:outline-none" // Remove button background color
          onClick={toggleFAQsVisibility}
        >
          <img
            src={isFAQsVisible ? closeImage : openImage}
            alt={isFAQsVisible ? 'Close FAQs' : 'Show FAQs'}
            className="w-12 h-12" // Set the image size to 120px
          />
        </button>
      </div>

      {/* FAQs Section */}
      {isFAQsVisible && (
        <div className="fixed inset-0 bg-white rounded-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto overflow-y-auto shadow-md z-40 mt-12">
          <div className="grid gap-4 py-8 md:grid-cols-2">
            {faqsList.map((item, idx) => (
              <div className="space-y-3 mt-6 px-8" key={idx}>
                <h4 className="text-gray-800 text-xl font-semibold">
                  {item.q}
                </h4>
                <p className="text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQsPage;