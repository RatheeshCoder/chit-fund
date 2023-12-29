import React from 'react';
import { Link } from 'react-router-dom';


const Diverse = () => {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold">
          Diverse 

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900  font-bold tracking-tight"> Schemes</span>
          </h2>
          <p className="mt-4 text-gray-600">
          Discover chitfund schemes designed to suit your financial goals. Choose the one that suits 
you and explore the possibilities to elevate your financial future
          </p>
          <div className="mt-8">
        <Link to="/ContactMain" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">
        Chit Fund Schemes

        </Link>
    </div>
        </div>

        <div className="lg:w-1/2">
          <div
            className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg Diverse-img"
           
          />
        </div>
      </div>
    </div>
  );
};

export default Diverse;
