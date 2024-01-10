import React from "react";
// import ContactUs from '../../components/contactPage/contactSection/contactForm'
import ContactPage from "../../components/contactPage/contactSection/ContactMain";
import ContactCard from "../../components/contactPage/cardSection/contactCard";
import Cards from "../../components/contactPage/cardSection/Cards";
import { Helmet } from 'react-helmet';
const ContactMain = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Contact Us</title>
      </Helmet>
    <section className="cta-contact-main">
      {/* <ContactUs /> */}
      <ContactPage />
      <Cards />
      <ContactCard />
      
    </section>
    </>
  );
};

export default ContactMain;
