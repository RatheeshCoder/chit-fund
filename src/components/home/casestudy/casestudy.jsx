import React, { useState, useEffect } from 'react';
import { CarouselImg } from '../../../data/data';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add auto slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideChange((currentSlide + 1) % CarouselImg.length);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="default-carousel" className="relative w-100 mt-20 mb-20" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {CarouselImg.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? 'duration-700 ease-in-out opacity-100' : 'hidden opacity-0'
            } transition-opacity`}
            data-carousel-item
          >
            {/* Centered title and content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-center">
              <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl  font-bold text-black">
                {item.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl text-black sm:text-1rem">
                {item.content}
              </p>

            </div>


            <img
              src={item.imageUrl}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-50"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {CarouselImg.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-8 h-2 rounded ${
              index === currentSlide ? 'bg-black' : 'bg-gray-300'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div> */}

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          handleSlideChange((currentSlide - 1 + CarouselImg.length) % CarouselImg.length)
        }
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleSlideChange((currentSlide + 1) % CarouselImg.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
