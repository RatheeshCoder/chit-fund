import React from "react";
import MapComponent from "./MapComponent";
import EmailForms from "./EmailForm";
import ContactDetails from "./ContactDetails";

const ContactPage = () => {
  return (
    <section className="mb-32">
      <MapComponent />
      <div data-aos="zoom-out" className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <EmailForms />
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
