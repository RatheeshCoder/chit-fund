import React from "react";
import { Link } from "react-router-dom";
import img from '../../../asset/imgs/NewImg (1).jpg'

const DoorstepHero = () => {
  return (
    <section className="text-gray-600 body-font cta-list-top">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Delivered To Your Doorstep
            <br className="hidden lg:inline-block" />
            In Coimbatore & Nilgiris.
          </h1>
          <p className="mb-8 leading-relaxed">
            Experience hassle-free financial empowerment with Vanmoh chitfunds.
            We redefine convenience with online services, delivering solutions
            directly to your doorstep in the regions of Coimbatore and Nilgiris.
            Curious to explore?
          </p>
          <div className="flex justify-center">
            <Link
              to="/ContactMain"
              className="inline-flex text-white bg-[#0c52a6] border-0 py-2 px-6 "
            >
              Coimbatore
            </Link>

            <Link
              to="/ContactMain"
              className="ml-4 inline-flex text-white bg-[#0c52a6] border-0 py-2 px-6 "
            >
              Nilgiris
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </section>
  );
};

export default DoorstepHero;
