import React, { useEffect, useState } from 'react';
import { gallaryImg } from '../../../data/data';

const Background = () => {
  const [current, setCurrent] = useState(0);

  const reset = () => {
    const sliderImages = document.querySelectorAll(".slide");
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  };

  const startSlide = () => {
    reset();
    const sliderImages = document.querySelectorAll(".slide");
    sliderImages[0].style.display = "block";
  };

  const slideNext = () => {
    reset();
    const sliderImages = document.querySelectorAll(".slide");
    const nextIndex = (current + 1) % sliderImages.length;
    sliderImages[nextIndex].style.display = "block";
    setCurrent(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(slideNext, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current]);

  useEffect(() => {
    startSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrap">
      <div id="slider">
        {gallaryImg.map((img, index) => (
          <div key={img.id} className={`slide slide${index + 1}`}>
            <div className="slide-content">
              <img src={img.url} alt={`Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;