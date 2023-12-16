import React from "react";
import { featuresData } from "../../../data/data";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";

const Features = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 mt-16 mb-20">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
            Features
          </span>{" "}
          you'll love
        </h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          A responsive documentation template built for everyone who wants to
          create a plugin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            {feature.iconType === "AccountBalanceIcon" && (
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                <AccountBalanceIcon className="custom-icon-color" />
              </span>
            )}
            {feature.iconType === "SavingsIcon" && (
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                <SavingsIcon className="custom-icon-color" />
              </span>
            )}
            <div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
