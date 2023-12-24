import React from "react";
import { Link } from "react-router-dom";
import { ChitProces } from "../../../data/data";

const ChitProcess = () => {
  return (
    <div className="bg-gray-100  mt-20 p-4">
      <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Chit Fund{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
            Process
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ChitProces.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/Products/Product"
            className="bg-[#0c52a6] mt-10 text-white text-2xl font-medium px-4 py-2 rounded shadow"
          >
            Explore Monthly Process
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChitProcess;
