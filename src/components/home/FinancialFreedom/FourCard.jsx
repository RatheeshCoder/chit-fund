import React from "react";
import { Link } from "react-router-dom";
import { FourCards } from "../../../data/data";

const FourCard = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 px-10 gap-10 overflow-hidden bg-gray-50 py-6 md:grid-cols-2 lg:grid-cols-4 sm:py-12 cta-four-card">
        {FourCards.map((section, index) => (
          <div
            key={index}
            className="group relative cursor-pointer justify-around overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 cta-card-height"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#0c52a6] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#0c52a6] transition-all duration-300 group-hover: bg-[#0c52a6]">
                <img
                  src={section.imageSrc}
                  alt={`Card ${index + 1}`}
                  className="h-10 w-10 text-white transition-all"
                />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h1 className="font-bold">{section.title}</h1>
                <p>{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-screen mt-10">
        <Link
          to="/Product"
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#0c52a6] border border-[#0c52a6] rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring "
        >
          Know More
        </Link>
      </div>
    </>
  );
};

export default FourCard;
