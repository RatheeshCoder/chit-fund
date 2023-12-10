import React from "react";
import { Link } from "react-router-dom";

const ComparisonsHero = () => {
  return (

    <section className="md:mt-60 lg:mt-40 max-w-7xl  px-4 sm:px-6 lg:px-8">
      <div className="my-10 mt-40  max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">

        <div className="sm:text-center lg:text-left">
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block xl:inline">Knowledge fuels financial </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900  xl:inline">
              success journey
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Chitfunds combine the power of community, flexibility, and
            transparency, offering a unique and advantageous approach to
            savings.
          </p>
          <div className="mt-5 sm:mt-8 ">
            <div className=" mt-10">
        <Link
          to="/Product"
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#0c52a6] border border-[#0c52a6] rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring "
        >
          Get Connect
        </Link>
      </div>
          </div>
        </div>
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonsHero;
