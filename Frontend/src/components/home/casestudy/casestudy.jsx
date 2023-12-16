import React, { useState, useEffect } from "react";
import { CarouselImg } from "../../../data/data";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideChange((currentSlide + 1) % CarouselImg.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full md:w-screen mt-20 mb-20 overflow-hidden"
      data-carousel="slide"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${CarouselImg.length * 100}%`,
        }}
      >
        {CarouselImg.map((item, index) => (
          <div
            key={index}
            className="w-full h-96 md:h-96 relative"
            style={{ flex: "0 0 100%" }}
            data-carousel-item
          >
            <img
              src={item.imageUrl}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>
      {/* Text outside the sliding container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
        <h2 className="text-5xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white">
          <span className="">
            {" "}
            Vanmoh{" "}
          </span>
          chitfunds
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-3xl text-white sm:text-1rem">
          Bridging Your Goals and Financial Success
        </p>
      </div>
    </div>
  );
};

export default Carousel;
