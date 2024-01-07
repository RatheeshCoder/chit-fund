import React from "react";
import { keyFeaturesData } from "../../../data/data";
import { Link } from "react-router-dom";

const CompanyPro = () => {
  return (
    <div className="py-12 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-center text-gray-900 lg:text-7xl md:text-5xl">
            Why Thrive with&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
              Vanmoh
            </span>
          </h1>
        </div>
        <div data-aos="zoom-in-down" className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {keyFeaturesData.map((feature, index) => (
              <div className="relative pl-16" key={index}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c52a6]">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="flex items-center justify-center w-screen mt-10">
        <Link
          to="/Products/Product"
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#0c52a6] border border-[#0c52a6] rounded  "
        >
          Get Schemes
        </Link>
      </div>
    </div>
  );
};

export default CompanyPro;
