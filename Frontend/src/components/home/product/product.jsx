import React from "react";
import { featuresData } from "../../../data/data";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";

const Features = () => {
  return (
    <div className="max-w-4xl px-5 mx-auto mt-16 mb-20">
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
          <div key={index} className="flex items-start gap-4" data-aos="zoom-out">
            {feature.iconType === "AccountBalanceIcon" && (
              <span className="p-3 rounded-full text-violet-600 bg-violet-500/10">
                <AccountBalanceIcon className="custom-icon-color" />
              </span>
            )}
            {feature.iconType === "SavingsIcon" && (
              <span className="p-3 rounded-full text-violet-600 bg-violet-500/10">
                <SavingsIcon className="custom-icon-color" />
              </span>
            )}
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
