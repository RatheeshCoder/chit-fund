import React from 'react';
import img from '../../../asset/imgs/companyProfileHerosection.jpg'

const HeroSection = () => {
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
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-gray-800 to-white'>Who</span> We Are

        </h1>
        <p className="text-lg text-gray-300 mb-8">
        A Commitment to Growth
        </p>
        
      </div>
    </div>
  );
};

export default HeroSection;
