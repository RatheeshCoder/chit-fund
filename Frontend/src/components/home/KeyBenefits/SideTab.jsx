
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const SideTab = ({ options, contentData }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="flex flex-col md:flex-row  mb-20 ">
      <div className="w-full md:w-1/4 p-4 text-black relative">
        {options.map((option) => (
          <div
          key={option}
          className={`p-2 cursor-pointer relative  ${
            selectedOption === option
              ? 'bg-gray-200 text-black'
              : 'hover:bg-[#0c52a6] hover:text-white'
          }`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
          {selectedOption === option && (
          <div
          className="absolute top-0 left-0 border-l-4 border-[#0c52a6]"
          style={{ width: '4px' }}
        />
        
          )}
        </div>
        ))}
      </div>

      <div className="flex-1 relative   p-0">
        <div
          className="absolute left-0 top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${contentData[selectedOption].image}')`,
          }}
        />
        <div className="relative z-10 text-white h-full cta-half-effect">
          <h2 className="text-2xl font-bold mb-4">{selectedOption}</h2>
          {contentData[selectedOption].data.map((item) => (
            <div key={item.id} className="mb-2 ">
              {item.title}
            </div>

            
          ))}
          <div className=" mt-10">
        <Link
          to="/Product"
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#0c52a6] border border-[#0c52a6] rounded active:text-violet-500 hover:bg-white hover:text-black focus:outline-none focus:ring "
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
