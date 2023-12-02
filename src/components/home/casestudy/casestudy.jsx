import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import img1 from '../../../asset/imgs/Case Study Education_.jpg';
import img2 from '../../../asset/imgs/Case Study Insurance_.jpg';
import img3 from '../../../asset/imgs/Case Study Own Vehicle_.webp';

const images = [
  {
    id: 1,
    src:img1,

  },
  {
    id: 2,
    src: img2,

   
  },
  {
    id: 3,
    src: img3,
    
  
  },
];

const Casestudy = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // Function to show a specific slide
  const showSlides = (n) => {
    let newIndex = n;
    if (n > images.length) {
      newIndex = 1;
    }
    if (n < 1) {
      newIndex = images.length;
    }

    // Hide all slides
    for (let i = 0; i < images.length; i++) {
      document.getElementById(`slide-${i + 1}`).style.display = 'none';
    }

    // Display the current slide
    document.getElementById(`slide-${newIndex}`).style.display = 'block';

    // Set the new slide index
    setSlideIndex(newIndex);
  };

  // Function to advance to the next slide
  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  // Function to navigate to a specific slide
  const currentSlide = (n) => {
    showSlides(n);
  };

  // Automatically advance to the next slide every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  // Initialize the slider
  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image) => (
        <div key={image.id} id={`slide-${image.id}`} className="slide fade">
          <img className="slide-image" src={image.src} alt={image.title} />
          <div className="slide-content">
            <Typography variant="h5" className="slide-title">{image.title}</Typography>
            <Typography variant="body1" className="slide-desc">{image.desc}</Typography>
            
          </div>
          <div className="slide-number-container">
            <Typography variant="body1" className="slider-number">{image.id}</Typography>
            <hr />
            <Typography variant="body1" className="slider-number">{images.length}</Typography>
          </div>
        </div>
      ))}
    
      <div className="slider-nav">
        <Button className="slider-nav-btn" onClick={() => plusSlides(-1)}>
          <ChevronLeftIcon style={{ color: 'white' }} />
        </Button>
        <Button className="slider-nav-btn" onClick={() => plusSlides(1)}>
          <ChevronRightIcon style={{ color: 'white' }}/>
        </Button>
      </div>

      
      <div className="dot-container">
        {images.map((_, index) => (
          <span key={index} className={`dot ${index + 1 === slideIndex ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>
    </div>
  );
};

export default Casestudy;
