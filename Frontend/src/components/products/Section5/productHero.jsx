import React from "react";
import { Link } from "react-router-dom";
import img from '../../../asset/imgs/NewImg (20).jpg'

const ProductHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div data-aos="flip-left" className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
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
        <div data-aos="fade-right" className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
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

export default ProductHero;
