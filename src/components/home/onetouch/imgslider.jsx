import { useState } from "react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/96.jpg",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative">
        <button
          className="text-4xl text-gray-500 focus:outline-none absolute top-1/2 left-4 transform -translate-y-1/2"
          onClick={prevTestimonial}
        >
          {"<"}
        </button>
        <button
          className="text-4xl text-gray-500 focus:outline-none absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={nextTestimonial}
        >
          {">"}
        </button>
        <div className="max-w-3xl mx-auto text-center">
          <ul className="flex justify-center items-center">
            {testimonials.map((item, idx) =>
              currentTestimonial === idx ? (
                <li key={idx}>
                  <figure>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                        alt={`Avatar ${idx}`}
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">
                    
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                    currentTestimonial === idx ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;