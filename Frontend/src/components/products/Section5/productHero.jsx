import React from "react";
import { Link } from "react-router-dom";
const ProductHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Seamless Chit Fund
            <br className="hidden lg:inline-block" />
            Services for You
          </h1>
          <p className="mb-8 leading-relaxed">
            Enjoy stress-free subscriptions with our doorstep collection
            service, available on daily, weekly, or monthly schedules. We bring
            the chitfund experience to your door, ensuring convenience at every
            step.
          </p>
          <div className="flex justify-center">
            <Link
              to="/ContactMain"
              className="inline-flex text-white bg-[#0c52a6] border-0 py-2 px-6 focus:outline-none  rounded text-lg"
            >
              Subscribe
            </Link>

            <Link
              to="/ContactMain"
              className="ml-4 inline-flex text-white bg-[#0c52a6] border-0 py-2 px-6 focus:outline-none  rounded text-lg"
            >
              Join the Auction
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;