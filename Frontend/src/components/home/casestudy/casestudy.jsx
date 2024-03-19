// Carousel.js
import React, { useState, useEffect } from 'react';
import { CarouselImg } from "../../../data/data";
import { CSSTransition } from 'react-transition-group';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % CarouselImg.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-20 sm:mb-20  half-img h-[47vh] sm:h-[50vh] ">
      {CarouselImg.map((image, index) => (
        <CSSTransition
          key={index}
          in={index === currentImage}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          <>
        
            <img
              className="absolute top-0 left-0 object-fill w-full h-full" 
              src={image.imageUrl}
              alt={`Slider ${index + 1}`}
            />
              
          </>
        </CSSTransition>
      ))}
      <div className="absolute z-10 w-full text-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 ">
        <h2 className="text-4xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="">Vanmoh</span> chitfunds
        </h2>
        <p className="mt-2 text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Bridging Your Goals and Financial Success
        </p>
      </div>
      <div className="absolute inset-0 z-0 w-full h-full  bg-black opacity-50"></div>
    </div>
  );
};

export default Carousel;
