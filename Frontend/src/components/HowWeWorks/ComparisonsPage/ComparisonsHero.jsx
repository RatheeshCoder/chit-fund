import React from "react";
import { Link } from "react-router-dom";
import img from '../../../asset/imgs/NewImg (9).jpg'

const ComparisonsHero = () => {
  return (

    <section className="px-4 max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 px-4 my-10 mt-40 max-w-7xl sm:mt-20 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:flex-justify lg:flex lg:flex-row">

        <div data-aos="fade-right" className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight lg:text-7xl md:text-5xl">
            <span className="block xl:inline">Knowledge fuels financial </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 xl:inline">
              success journey
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Chitfunds combine the power of community, flexibility, and
            transparency, offering a unique and advantageous approach to
            savings.
          </p>
          <div className="mt-5 sm:mt-8 ">
            <div className="mt-10 ">
        <Link
          to="/ContactMain"
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#0c52a6] border border-[#0c52a6] rounded active:text-violet-500  "
        >
          Get Connect
        </Link>
      </div>
          </div>
        </div>
        <div data-aos="fade-right" className="my-4 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonsHero;
