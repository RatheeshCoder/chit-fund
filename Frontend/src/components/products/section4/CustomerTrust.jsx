import React from "react";
import rightImg from "../../../asset/imgs/customer-bond.jpg";

const CustomerTrust = () => {
  return (
    <section className="px-3 py-5 lg:py-10">
      <div className="grid items-center gap-5 lg:grid-cols-2 justify-items-center">
        <div className="flex flex-col items-center justify-center order-2 lg:order-1">
          <p className="text-4xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
            {" "}
            Our Customers{" "}
          </p>
          <p className="text-4xl font-bold md:text-7xl">Love What We Do</p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-100 w-100 object-cover lg:w-[500px] lg:h-[500px]"
            src={rightImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerTrust;
