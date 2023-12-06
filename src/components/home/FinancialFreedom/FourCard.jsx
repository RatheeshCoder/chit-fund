import React from 'react'
import { FourCards } from '../../../data/data';

const FourCard = () => {
    return (
        <div className="bg-gray-100  p-4">
          <div className="container mx-auto pt-12 pb-20">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Ease Your Path to Financial Freedom.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {FourCards.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{section.title}</h2>
                  <p className="text-gray-700 text-center">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    

export default FourCard
