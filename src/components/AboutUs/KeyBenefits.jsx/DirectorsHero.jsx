import React from 'react';
import { Link } from 'react-router-dom';

const DirectorsHero = () => {
  return (
    <div className="max-w-6xl px-4 mx-auto md:max-w-4xl sm:max-w-2xl sm:px-6 mt-60">
      <div className="text-center">
        <h1 className="max-w-md mx-auto text-3xl font-extrabold tracking-normal text-gray-900 sm:text-3xl md:text-5xl lg:text-6xl md:leading-none sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          <span className="block"> Vanmoh's Leaders</span>
        </h1>
        <h2 className="max-w-md px-12 mx-auto mt-3 font-normal text-gray-500 text-md sm:mt-5 sm:text-md md:mt-5 md:text-xl sm:max-w-xl md:max-w-xl">
        Meet the visionaries steering Vanmoh toward success:
        </h2>
        <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-full shadow">
          <Link to="/ContactMain " className="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-teal-400 border border-transparent rounded-full text-md hover:bg-teal-300 md:py-4 md:text-2xl md:px-10 no-underline cta-know-more" >
            Know More
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsHero;
