import React from "react";
import { featuresDatas } from "../../../data/data";

const FeaturesSection = () => {
  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Awards and achievements</h2>
          <p className="mb-12 text-gray-600">
            We take pride in our journey, marked by milestones that reflect our
            commitment.
          </p>
        </div>
        <div className="flex flex-wrap mt-12 -mx-4">
          {featuresDatas.map((feature) => (
            <div key={feature.id}  data-aos="flip-left" className="w-full px-4 mb-8 md:w-1/3">
              <div className="p-8 bg-white rounded-md shadow-md">
                <div className="mb-4 text-4xl font-bold text-transparent text-purple-600 bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
                  {feature.id}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p className="mb-4 text-gray-600">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
