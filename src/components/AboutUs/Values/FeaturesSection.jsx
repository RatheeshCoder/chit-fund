// FeaturesSection.js
import React from 'react';
import { featuresDatas } from '../../../data/data';

const FeaturesSection = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Awards and achievements</h2>
          <p className="text-gray-600 mb-12">We take pride in our journey, marked by milestones that reflect our commitment.</p>
        </div>
        <div className="flex flex-wrap -mx-4 mt-12">
          {featuresDatas.map((feature) => (
            <div key={feature.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">{feature.id}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
