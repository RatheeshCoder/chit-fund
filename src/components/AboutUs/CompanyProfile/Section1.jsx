import React from "react";
import { keyFeaturesData } from "../../../data/data";
import { Link } from "react-router-dom";


const CompanyPro = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
            Why Thrive with&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
              Vanmoh
            </span>
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {keyFeaturesData.map((feature, index) => (
              <div className="relative pl-16" key={index}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c52a6]">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-8 w-8 text-white"
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
      <div className="flex justify-center items-center w-screen mt-10">
        <Link
          to="/Products/Product"
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#0c52a6] border border-[#0c52a6] rounded active:text-violet-500 hover:bg-transparent hover:text-[#0c52a6] focus:outline-none focus:ring "
        >
          Get Schemes
        </Link>
      </div>
    </div>
  );
};

export default CompanyPro;
