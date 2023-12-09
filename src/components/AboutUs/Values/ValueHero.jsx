import React from "react";
import { Link } from "react-router-dom";

const ValueHero = () => {
  return (
    <div className="max-w-2xl mx-auto text-center mt-40">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          Awards
        </span>{" "}
        and achievements
      </h1>
      <p className="mt-6 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl">
        At Vanmoh Chitfunds, our ethos is the heartbeat of our organisation,
        shaping our identity and guiding every interaction. Rooted in our
        unwavering commitment to integrity, transparency, and
        customer-centricity, our values define the essence of who we are and how
        we operate.
      </p>

      <p className="mt-8 text-sm font-normal text-gray-600">
        Honest Chits, Open Rewards !!!
      </p>
    </div>
  );
};

export default ValueHero;
