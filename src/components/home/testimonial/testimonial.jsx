// import React, { useState, useEffect } from 'react';
// import { Button, Typography } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import round1 from '../../../asset/imgs/round image.webp';
// import round2 from '../../../asset/imgs/round2.webp';
// import round3 from '../../../asset/imgs/round3.webp';

// const images = [
//   {
//     id: 1,
//     src:round1,
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus.',
//   },
//   {
//     id: 2,
//     src: round2,
//     title: 'Title 2',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus.',
//   },
//   {
//     id: 3,
//     src: round3,
//     title: 'Title 3',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus.',
//   },
// ];

// const Testimonial = () => {
//   const [slideIndex, setSlideIndex] = useState(1);

//   const showSlides = (n) => {
//     let newIndex = n;
//     if (n > images.length) {
//       newIndex = 1;
//     }
//     if (n < 1) {
//       newIndex = images.length;
//     }
//     for (let i = 0; i < images.length; i++) {
//       document.getElementById(`slide-${i + 1}`).style.display = 'none';
//     }

//     document.getElementById(`slide-${newIndex}`).style.display = 'block';

//     setSlideIndex(newIndex);
//   };

//   const plusSlides = (n) => {
//     showSlides(slideIndex + n);
//   };

//   const currentSlide = (n) => {
//     showSlides(n);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       plusSlides(1);
//     }, 3000);
   
//     return () => clearInterval(intervalId);
//   }, [slideIndex]);

//   useEffect(() => {
//     showSlides(slideIndex);
//   }, []);

//   return (
//     <div className="slider-container">
//       {images.map((image) => (
//         <div key={image.id} id={`slide-${image.id}`} className="slide fade">
//           <img className="slide-image" src={image.src} alt={image.title} />
//           <div className="slide-content">
//             <Typography variant="h5" className="slide-title">{image.title}</Typography>
//             <Typography variant="body1" className="slide-desc">{image.desc}</Typography>
            
//           </div>
//           <div className="slide-number-container">
//             <Typography variant="body1" className="slider-number">{image.id}</Typography>
//             <hr />
//             <Typography variant="body1" className="slider-number">{images.length}</Typography>
//           </div>
//         </div>
//       ))}

//       <div className="slider-nav">
//         <Button className="slider-nav-btn" onClick={() => plusSlides(-1)}>
//           <ChevronLeftIcon />
//         </Button>
//         <Button className="slider-nav-btn" onClick={() => plusSlides(1)}>
//           <ChevronRightIcon />
//         </Button>
//       </div>

//       <div className="dot-container">
//         {images.map((_, index) => (
//           <span key={index} className={`dot ${index + 1 === slideIndex ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
// // export const testimonial = () => {
// //   return (
// //     <>
// //      <div className="testimonial">
// //         <h1>Testimonial</h1>
// //            <div className="wrapper1">
// //                 <div className="container1">
// //                     <img src={round1} alt="" />
// //                 </div>
// //                 <div className="container2">
// //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem consectetur nam earum est temporibus. Aperiam dolorum expedita ducimus numquam vitae?
// //                     </p>

// //                 </div>
// //            </div>
// //      </div>
// //     </>
// //   )
// // }
