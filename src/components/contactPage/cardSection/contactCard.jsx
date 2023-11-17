import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Cards from './Cards';

const ContactCard = () => {
  return (
    <section className='wrapper'>
        <div className='container'>
        <div className='cta-card'>
          <div className='cta-icon'> <PhoneEnabledIcon/> </div>
          <p> +91-8754000842 <br/> +91-8754000843
</p></div>
    <div  className='cta-card'><div className='cta-icon'><MailOutlineIcon/></div>
      <p> reach@vanmohchitfunds.com</p></div>
    <div className='cta-card'>
      <div className='cta-icon'><RoomIcon/></div>
      <p><span>Head Office</span>:1437, Ground floor Red rose chambers, Trichy road (Opp to welcome ITC hotel, Race course) Coimbatore-641018</p></div>
    </div>
    <div className='cta-hover'>
      <h1>Our <i> Location</i></h1>
      <p>Get it in touch and we’ll work it out right away</p>
    </div>
    <div className='cta-map'>
      <iframe
        title="map"
       src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7545.648221854052!2d76.97305096154211!3d10.9948436012557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f0fef453c38a6a3%3A0xe1b7c879c8f85b23!2sVanmoh%20Chit%20Funds%20Private%20Limited!5e0!3m2!1sen!2sin!4v1699381686114!5m2!1sen!2sin"  width="100%"
        height="500vh"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
    <Cards/>
 
    </section>
  )
}

export default ContactCard