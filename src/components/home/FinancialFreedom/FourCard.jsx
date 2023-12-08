import React from 'react';
import { FourCards } from '../../../data/data'; 
import cardimg from "../../../asset/imgs/bank-svgrepo-com.svg"

const FourCard = () => {
  return (
    <div className="relative  grid grid-cols-1 px-10 gap-10 overflow-hidden bg-gray-50 py-6 md:grid-cols-2 lg:grid-cols-4 sm:py-12 cta-four-card">
      {FourCards.map((section, index) => (
        <div
          key={index}
          className="group relative cursor-pointer justify-around overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 cta-card-height"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#0c52a6] transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-[#0c52a6] transition-all duration-300 group-hover: bg-[#0c52a6]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                version="1.1"
                id="Layer_1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                className="h-10 w-10 text-white transition-all"
              >
                <g>
                  <g>
                    <polygon points="256,7.396 85.012,75.943 426.987,75.943" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="17.342" y="393.046" width="477.316" height="40.566" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect y="464.038" width="512" height="40.566" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="271.218" y="195.143" width="78.648" height="167.489" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="380.281" y="195.143" width="78.648" height="167.489" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="162.144" y="195.143" width="78.648" height="167.489" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="53.071" y="195.143" width="78.648" height="167.489" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="17.342" y="106.373" width="477.316" height="58.365" />
                  </g>
                </g>
              </svg>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h1>{section.title}</h1>
              <p >{section.content}</p>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourCard;
