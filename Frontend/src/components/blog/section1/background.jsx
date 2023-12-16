import React from "react"
import img from '../../../asset/imgs/companyProfileHerosection.jpg'

const Background = () => {
  return (
    <div className="relative  cta-h-half text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          
          Savings &   Chit funds
        </h1>
        <p className="text-lg text-gray-300 mb-8"> A fantastic synergy!! Below is the solution!</p>
      </div>
    </div>
  );
};

export default Background;
