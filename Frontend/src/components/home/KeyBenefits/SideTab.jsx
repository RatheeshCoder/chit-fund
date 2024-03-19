import React, { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const SideTab = ({ options, contentData }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="flex flex-col mb-2 md:flex-row ">
      <div className="relative w-full p-4 text-black md:w-1/4">
        {options.map((option) => (
          <div
            key={option}
            className={`p-2 cursor-pointer relative  ${
              selectedOption === option
                ? "bg-gray-200 text-black border-l-4 border-[#0c52a6]"
                : "hover:bg-[#0c52a6] hover:text-white"
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <div className="relative flex-1 p-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('${contentData[selectedOption].image}')`,
          }}
        />
        <div className="relative z-10 h-full cta-half-effect">
          <h2
            className={`mb-4 text-2xl font-bold ${
              contentData[selectedOption].data[0].color || "text-black"
            }`}
          >
            {selectedOption}
          </h2>
          {contentData[selectedOption].data.map((item) => (
            <div key={item.id} className={`mb-2 ${item.color || "text-black"}`}>
              {item.title}
            </div>
          ))}
          <div className="mt-10">
            <Link
              to="/Products/Product"
              className="inline-block px-12 py-3 text-sm font-medium text-black bg-white rounded"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SideTab.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  contentData: PropTypes.object.isRequired,
};

export default SideTab;
