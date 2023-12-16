// import { useState, useEffect } from "react";
// import homeslider1 from '../../../asset/imgs/homeImg1.jpg';
// import homeslider2 from '../../../asset/imgs/homeImg2.jpg';
// import homeslider3 from '../../../asset/imgs/homeImg3.jpg';
// import homeslider4 from '../../../asset/imgs/homeImg4.jpg';

// const TestimonialSlider = () => {
//   const testimonials = [
//     { avatar: homeslider1 },
//     { avatar: homeslider2 },
//     { avatar: homeslider3 },
//     { avatar: homeslider4 },
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextTestimonial();
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, [currentTestimonial]);

//   return (
//     <section className="py-14 bg-gray-100">
//       <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative">
//         <div className="max-w-3xl mx-auto text-center">
//           <div className="testimonial-container">
//             {testimonials.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`testimonial-item ${currentTestimonial === idx ? 'visible' : 'hidden'}`}
//               >
//                 <figure>
//                   <div className="mt-6">
//                     <img
//                       src={item.avatar}
//                       className="w-16 h-16 mx-auto cta-home-slider-img rounded-md"
//                       alt={`Avatar ${idx}`}
//                       loading="lazy"
//                     />
//                   </div>
//                 </figure>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSlider;
