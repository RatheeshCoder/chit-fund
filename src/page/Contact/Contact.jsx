import React from "react";
// import ContactUs from '../../components/contactPage/contactSection/contactForm'
import ContactPage from "../../components/contactPage/contactSection/ContactMain";
import ContactCard from "../../components/contactPage/cardSection/contactCard";
import Cards from "../../components/contactPage/cardSection/Cards";
const ContactMain = () => {
  return (
    <section className="cta-contact-main">
      {/* <ContactUs /> */}
      <ContactPage />
      <Cards />
      <ContactCard />
      
    </section>
  );
};

export default ContactMain;
