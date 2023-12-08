import React, { useState, useEffect } from 'react';
import { CarouselImg } from '../../../data/data';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideChange((currentSlide + 1) % CarouselImg.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="default-carousel" className="relative w-full md:w-screen mt-20 mb-20" data-carousel="slide">
      <div className="relative h-96 md:h-96 overflow-hidden rounded-lg">
        {CarouselImg.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? 'opacity-100' : 'hidden opacity-0'
            } transition-opacity duration-700 ease-in-out`}
            data-carousel-item
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
              <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-7xl font-bold text-white">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-gray-800 to-white'> Vanmoh </span>chitfunds
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-3xl text-white sm:text-1rem">
                Bridging Your Goals and Financial Success
              </p>
            </div>

            <img
      src={item.imageUrl}
      className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt={`Slide ${index + 1}`}
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          handleSlideChange((currentSlide - 1 + CarouselImg.length) % CarouselImg.length)
        }
      >
        {/* ... Previous button content ... */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleSlideChange((currentSlide + 1) % CarouselImg.length)}
      >
        {/* ... Next button content ... */}
      </button>
    </div>
  );
};

export default Carousel;
