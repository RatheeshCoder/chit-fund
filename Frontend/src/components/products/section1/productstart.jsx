import React from "react";
import img from '../../../asset/imgs/Home page 2nd Image.webp'
import EmailForms from "../../contactPage/contactSection/EmailForm";
import ContactDetails from "../../contactPage/contactSection/ContactDetails";
const Background = () => {
  return (
    <>
    <div className="relative overflow-hidden text-white cta-h-half">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="mb-4 text-5xl font-bold leading-tight">
          
        Feel financial freedom
        </h1>
        <p className="mb-8 text-lg text-gray-300"> With our Chit Fund Schemes</p>
      </div>
    </div>

    <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <EmailForms />
            <ContactDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
