import React from 'react';
import logo from '../../asset/imgs/logo-img.png'
import { 
  Facebook, 
  LinkedIn, 
  WhatsApp,
  Instagram
} from '@mui/icons-material';


function Footer2() {
  return (

    <footer className="footer2">
    <div className="footer-left">
      <div className='logo'><img src={logo} alt="" /></div>
      <p className="footer-links">
        <a href="#">Home</a>
        
        <a href="#">Blog</a>
        
        <a href="#">Product</a>
        
        <a href="#">Gallery</a>
        
        <a href="#">Jobs</a>
        
        <a href="#">Contact</a>
      </p>
      <p className="footer-company-name">VANMOH &copy; 2020</p>
    </div>

    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker"></i>
        <p><span> Red Rose Chamberds,  Ground Floor , <br /> Trichy RD</span> Coimbatore , TamilNadu - 641018</p>
      </div>
      <div className='cta-footer-2-condact-ph'>
        
        <p>+91 8754000842</p> 
        <p>+91 8754000843</p>
      </div>
      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:reach@vanmohchitfunds.com">reach@vanmohchitfunds.com</a></p>
      </div>
    </div>

    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        Experience enhanced security and convenience with VanMoh on your finanial journey. We're committed to adapting to evolving business requirements, ensuring our services are streamlined, efficient, and productive to exceed customer expectations.
      </p>

      <div className="footer-icons">
          <a href="#"><Facebook /></a>
          <a href="#"><WhatsApp /></a>
          <a href="#"><LinkedIn /></a>
          <a href="#"><Instagram /></a>
          
      </div>
    </div>
  </footer>

  );
}

export default Footer2;
