import React from "react";
import NumberCounter from "./account";
import Prize from "./prize";
import Gift from "./gift";
import Location from "./location";
import Camera from "./camera";
import Heart from "./heart";
import user from "../../../asset/imgs/subscribeImg.png";
import trophy from "../../../asset/imgs/giftImg.png";
import gift from "../../../asset/imgs/schemeImg.png";
import location from "../../../asset/imgs/locationImg.png";
import heart from "../../../asset/imgs/kindImg.png";
import camera from "../../../asset/imgs/BusinessImg.png";

const StatsSection = () => {
  return (
    <section className="p-4 ">
      <div className="container pt-12 pb-20 mx-auto ">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
        Step into Financial Ease with Vanmoh Chitfunds
        </h1>

        <p className="mb-12 text-lg text-center text-gray-700">
        Your pathway to straightforward savings and brighter financial horizons. <br /> Join Vanmoh for a simplified approach to financial well-being!


        </p>
        <div data-aos="zoom-in-up" className="grid grid-cols-1 gap-8 text-center bg-white md:grid-cols-6">
          {renderStatBlock(user, "Subscribers", <NumberCounter />)}
          {renderStatBlock(trophy, "Prized Customers", <Prize />)}
          {renderStatBlock(gift, "Schemes", <Gift />)}
          {renderStatBlock(heart, "Dedicated Minds", <Heart />)}
          {renderStatBlock(location, "Locations", <Location />)}
          {renderStatBlock(camera, "Repeated Customers", <Camera />)}
        </div>
      </div>
    </section>
  );
};

const renderStatBlock = (imageSrc, title, content) => (
  <div className="p-4 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
    <img
      src={imageSrc}
      alt=""
      className="inline-block w-12 h-12 mb-3 text-indigo-500"
    />
    <h2 className="mb-4 text-xl font-bold text-gray-800">{content}</h2>
    <p className="text-gray-700">{title}</p>
  </div>
);

export default StatsSection;
