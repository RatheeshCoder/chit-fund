import React from 'react'
import ContactUs from '../../components/contactPage/contactSection/contactForm'
import ContactCard from '../../components/contactPage/cardSection/contactCard'
const ContactMain = () => {
  return (
    <section className='cta-contact-main'>
      <ContactUs />
      <ContactCard />
    </section>
  )
}

export default ContactMain
