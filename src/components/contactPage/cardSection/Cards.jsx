import React from "react";
import { BranchData } from "../../../data/data";
import RoomIcon from "@mui/icons-material/Room";

const Cards = () => {
  return (
    <>
      <div className="relative  min-h-screen grid grid-cols-1 px-10  gap-10 overflow-hidden bg-gray-50 py-6 md:grid-cols-2 lg:grid-cols-3 sm:py-12">
      {BranchData.map((branch) => (<>
        <div className="group relative cursor-pointer justify-around overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#0c52a6] transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-[#0c52a6] transition-all duration-300 group-hover: bg-[#0c52a6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 50 50"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 text-white transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M 25 2 C 17.832031 2 12 7.832031 12 15 C 12 24.523438 23.707031 39.957031 24.203125 40.609375 L 25 41.644531 L 25.796875 40.609375 C 26.292969 39.957031 38 24.523438 38 15 C 38 7.832031 32.167969 2 25 2 Z M 25 11 C 27.210938 11 29 12.789063 29 15 C 29 17.210938 27.210938 19 25 19 C 22.789063 19 21 17.210938 21 15 C 21 12.789063 22.789063 11 25 11 Z M 7.296875 32 L 1.578125 48 L 48.421875 48 L 42.703125 32 L 35.050781 32 C 34.660156 32.6875 34.269531 33.355469 33.878906 34 L 41.296875 34 L 45.578125 46 L 4.421875 46 L 8.703125 34 L 16.121094 34 C 15.730469 33.355469 15.339844 32.6875 14.949219 32 Z"
                />
              </svg>
            </span>
              <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"
                key={branch.id}
              >
                <h1>{branch.location}</h1>
                <p>{branch.address}</p>
              </div>
              <div className="pt-5 text-sky-50 text-base font-semibold leading-7">
              <a href={branch.link} target="_blank" rel="noopener noreferrer">
                <button className=' group-hover:text-white/90' >
                  <RoomIcon /> Get Direction
                </button>
              </a>
            </div>
          
          </div>
          
        </div>
        </>
            ))}
      </div>
    </>
  );
};

export default Cards;