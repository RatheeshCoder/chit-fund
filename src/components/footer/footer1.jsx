import React from "react";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <section className="py-28 relative bg-[#0c52a6] text-center ">
      <div className="relative max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto text-center">
          <p className=" cta-footer-text text-white text-3xl font-semibold sm:text-4xl">
            Build the future with us
          </p>
          <p className=" cta-footer-text  text-blue-100 mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="mt-4">
          <Link
            to="/ContactMain"
            className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
