import React from "react";
import { featuresData } from "../../../data/data";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";

const Features = () => {
  return (
    <div className="max-w-4xl px-5 mx-auto  mb-14">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
            Features
          </span>{" "}
          you'll love
        </h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
        Our journey is all about doing things right. We believe in honesty and openness as we help you grow your money
        </p>
      </div>

      <div className="grid gap-10 mt-10 md:grid-cols-2">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-center gap-4" data-aos="zoom-out">
            <img
                src={feature.iconType}
                alt={feature.title}
                className="custom-icon-color"
              />
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
