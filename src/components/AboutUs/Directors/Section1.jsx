import React from "react";
import { CompanyProfiles } from "../../../data/data";

const CompanyProfile = () => {
  return (
    <div className="text-center p-8">
      {CompanyProfiles.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-wrap items-center mt-20 text-left text-center ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              {item.title}
            </h3>
            <p className="sm:text-lg mt-6">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyProfile;
