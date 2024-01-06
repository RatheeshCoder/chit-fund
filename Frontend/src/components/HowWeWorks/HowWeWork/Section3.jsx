import React from "react";
import { Link } from "react-router-dom";
import { ChitProces } from "../../../data/data";

const ChitProcess = () => {
  return (
    <div className="p-4 mt-20 bg-gray-100">
      <div className="container pt-12 pb-20 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Chit Fund{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
            Process
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ChitProces.map((item, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-xl font-bold text-gray-800">
                {`Step ${index + 1}: ${item.title}`}
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