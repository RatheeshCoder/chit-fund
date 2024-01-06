
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { gallaryImg } from "../../../data/data";

const Background = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % gallaryImg.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-20 half-img"> 
      {gallaryImg.map((image, index) => (
        <CSSTransition
          key={index}
          in={index === currentImage}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          <img
             className="absolute top-0 left-0 object-cover w-full h-full" 
             style={{ top: index === currentImage ? '0' : '-100%' }} // Adjust top property
             src={image.url}
             alt={`Slider ${index + 1}`}
          />
        </CSSTransition>
      ))}
    </div>
  );
};

export default Background;
