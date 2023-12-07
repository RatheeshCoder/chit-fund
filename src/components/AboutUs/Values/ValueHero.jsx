import React from 'react';
import { Link } from 'react-router-dom';

const ValueHero = () => {
    return (
        <div className="max-w-2xl mx-auto text-center mt-40">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight">
            Awards and achievements

            </h1>
            <p className="mt-6 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl">
            At Vanmoh Chitfunds, our ethos is the heartbeat of our organisation, shaping our identity 
            and guiding every interaction. Rooted in our unwavering commitment to integrity, 
            transparency, and customer-centricity, our values define the essence of who we are and 
            how we operate.

            </p>
            {/* <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-full shadow">
          <Link to="/ContactMain " className="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-teal-400 border border-transparent rounded-full text-md hover:bg-teal-300 md:py-4 md:text-2xl md:px-10 no-underline cta-know-more" >
            Know More
          </Link>
          </div>
        </div> */}
            <p className="mt-8 text-sm font-normal text-gray-600">
            Honest Chits, Open Rewards !!!
            </p>
        </div>
    );
};

export default ValueHero;
