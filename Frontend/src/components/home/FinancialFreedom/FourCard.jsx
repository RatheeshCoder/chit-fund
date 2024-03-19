import React from "react";
import { Link } from "react-router-dom";
import { FourCards } from "../../../data/data";

const FourCard = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 gap-10 sm:px-10 px-4 py-6 overflow-hidden md:grid-cols-2 lg:grid-cols-4 sm:py-12 cta-four-card mt-3">
        {FourCards.map((section, index) => (
          <div data-aos="flip-right"
            key={index}
            className="relative justify-around px-6 pt-10 pb-8 overflow-hidden transition-all duration-500 bg-white shadow-xl cursor-pointer group ring-1 ring-gray-900/5 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 "
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#0c52a6] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 max-w-md mx-auto">
              <div className="flex ">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#0c52a6] transition-all duration-300 group-hover: bg-[#0c52a6]">
                <img
                  src={section.imageSrc}
                  alt={`Card ${index + 1}`}
                  className="w-10 h-10 text-white transition-all"
                />
              </span>
              <h1 className="text-2xl font-bold mt-6 ml-6 sm:ml-3 group-hover:text-white/90">{section.title}</h1>
              </div>
              <div className="pt-5 space-y-6 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90">
                
                <p>{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-screen mt-10">
        <Link
          to="/Products/Product"
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#0c52a6] border border-[#0c52a6]  "
        >
          Explore Now
        </Link>
      </div>
    </>
  );
};

export default FourCard;
