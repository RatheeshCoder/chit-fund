// FAQsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faqsList } from '../../data/data';
import openImage from '../../asset/imgs/FAQsOpenImg.png';
import closeImage from '../../asset/imgs/faqCloseImg.png'; 


const FAQsPage = () => {
  const [isFAQsVisible, setIsFAQsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleFAQsVisibility = () => {
    setIsFAQsVisible((prev) => !prev);
  };

  const goBack = () => {
    navigate('/');
  };

  
  return (
    <div className="leading-relaxed mt-12 mx-4 md:mx-8">
      <div className="fixed bottom-4 right-4 z-50"> 
        <button className="focus:outline-none" onClick={toggleFAQsVisibility}>
          <img
            src={isFAQsVisible ? closeImage : openImage}
            alt={isFAQsVisible ? 'Close FAQs' : 'Show FAQs'}
            className="w-14 h-14 z-999999"
          />
        </button>
      </div>

      {isFAQsVisible && (
        <div className="fixed inset-0 bg-white rounded-md overflow-y-auto shadow-md z-40 mt-12">
          <div className="flex items-center justify-center h-full">
            <div className="max-w-5xl w-full">
              <div className="grid gap-4 py-8 md:grid-cols-2">
                {faqsList.map((item, idx) => (
                  <div className="space-y-3 mt-6 px-8" key={idx}>
                    <h4 className="text-gray-800 text-xl font-semibold">{item.q}</h4>
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