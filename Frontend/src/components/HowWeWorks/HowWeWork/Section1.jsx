import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="max-w-2xl mx-auto text-center mt-40">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight">
        Chit Fund{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          {" "}
          Overview
        </span>
      </h1>
      <p className="mt-6 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl">
        Explore the collaborative financial model of chitfunds, where
        individuals with shared goals contribute monthly. Each scheme admits a
        specific number of members, fostering a community-driven approach to
        financial growth.
      </p>
      <div className="mt-8">
        <Link to="/Products/Product">
          <button
            className="flex content-center transition items-center justify-center text-center px-8 py-4 text-xl font-medium rounded-md shadow-sm text-white bg-[#0c52a6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 mx-auto px-8"
            style={{ flexShrink: 0 }}
          >
            <div className="flex items-center justify-start space-x-1.5">
              <span> Discover Chit Schemes</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default HeroSection;
