import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../asset/company-logo-img.PNG';

function Header() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`nav ${navActive ? 'nav-active' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Product" onClick={toggleNav}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/Gallery" onClick={toggleNav}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/caseStudy" onClick={toggleNav}>
            CaseStudy
          </Link>
        </li>
        <li>
          <Link to="/Jobs" onClick={toggleNav}>
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/ContactMain" onClick={toggleNav}>
            ContactUs
          </Link>
        </li>
      </ul>
      <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
