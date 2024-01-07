import React from "react";
import { CompanyProfiles } from "../../../data/data";

const CompanyProfile = () => {
  return (
    <div className="p-8 text-center">
      {CompanyProfiles.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-wrap items-center mt-20 text-left text-center ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full px-4 md:w-3/5 lg:w-1/2">
            <img data-aos="zoom-in-left"
              src={item.imageUrl}
              alt={item.title}
              className="inline-block border rounded shadow-lg border-merino-400"
            />
          </div>
          <div  data-aos="zoom-in-right"  className="w-full px-4 text-center md:w-2/5 lg:w-1/2 md:text-left lg:pl-12">
            <h3 className="mt-8 text-xl font-bold md:mt-0 sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-6 sm:text-lg">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyProfile;
