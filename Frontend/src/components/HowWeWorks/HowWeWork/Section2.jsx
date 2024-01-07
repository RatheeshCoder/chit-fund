import React from "react";
import { Link } from "react-router-dom";
import img from '../../../asset/imgs/NewImg (11).jpg'

const ChitAct = () => {
  return (
    <div className="flex flex-wrap mt-20">
      <div className="w-full mb-10 sm:w-8/12" data-aos="fade-right">
        <div className="container h-full mx-auto sm:p-10">
          <div className="container items-center h-full px-4 mt-10 lg:flex lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl font-bold lg:text-6xl">
                Chit Fund{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
                  Act
                </span>{" "}
              </h1>
              <div className="w-20 h-2 bg-[#0c52a6] my-4"></div>
              <p className="mb-10 text-xl">
                Navigate the legal landscape of chitfunds with insights into the
                Chit Fund Act. Our commitment to compliance ensures a secure and
                transparent chitfund experience for all participants.
              </p>
              <Link
                to="/Products/Services"
                className="bg-[#0c52a6] text-white text-2xl font-medium px-4 py-2 rounded shadow"
              >
                Learn About Regulations
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img data-aos="fade-left"
        src={img}
        alt="Leafs"
        className="object-cover w-full sm:h-screen sm:w-4/12"
        style={{ height: "25rem" }}
      />
    </div>
  );
};

export default ChitAct;
