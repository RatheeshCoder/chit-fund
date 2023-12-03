import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../asset/company-logo-img.PNG';

function Header() {
  const [navActive, setNavActive] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showHowItWorksDropdown, setShowHowItWorksDropdown] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const toggleHowItWorksDropdown = () => {
    setShowHowItWorksDropdown(!showHowItWorksDropdown);
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
        <li className={`group relative ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/" onClick={toggleNav} className="menu-link">
            Home
          </Link>
        </li>
         
        <li className={`group relative ${location.pathname.startsWith('/about') ? 'active' : ''}`}>
              <span className={`cursor-pointer menu-link`} onClick={toggleAboutDropdown}>
                About Us {showAboutDropdown ? '▼' : '►'}
              </span>
              {showAboutDropdown && (
                <ul className={`dropdown absolute hidden bg-white border rounded-md mt-2 p-2`}>
                  <li>
                    <Link to="/about/CompanyPro" onClick={toggleNav} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 menu-link">
                      CompanyPro
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/Benefits" onClick={toggleNav} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 menu-link">
                      Key Benefits 
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/Direction" onClick={toggleNav} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 menu-link">
                      Direction
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/Values" onClick={toggleNav} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 menu-link">
                      Values
                    </Link>
                  </li>
                </ul>
                  )}
                </li>


        <li className={`group relative ${location.pathname === '/Product' ? 'active' : ''}`}>
          <Link to="/Product" onClick={toggleNav} className="menu-link">
            Product
          </Link>
        </li>
          
        <li className={`group relative ${location.pathname.startsWith('/how-it-works') ? 'active' : ''}`}>
        <span className={`cursor-pointer menu-link`} onClick={toggleHowItWorksDropdown}>
          How We Works {showHowItWorksDropdown ? '▼' : '►'}
        </span>
        {showHowItWorksDropdown && (
          <ul className={`dropdown absolute hidden bg-white border rounded-md mt-2 p-2`}>
            <li>
              <Link to="/how-it-works/Blogs" onClick={toggleNav} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 menu-link">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/how-it-works/Comparisons" onClick={toggleNav} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 menu-link">
                Comparisons
              </Link>
            </li>
            <li>
              <Link to="/how-it-works/faq" onClick={toggleNav} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 menu-link">
                FAQ
              </Link>
            </li>
          </ul>
        )}
      </li>


        <li className={`group relative ${location.pathname === '/Gallery' ? 'active' : ''}`}>
          <Link to="/Gallery" onClick={toggleNav} className="menu-link">
            Gallery
          </Link>
        </li>
        {/* <li className={`group relative ${location.pathname === '/caseStudy' ? 'active' : ''}`}>
          <Link to="/caseStudy" onClick={toggleNav} className="menu-link">
            Blogs
          </Link>
        </li> */}
        <li className={`group relative ${location.pathname === '/Jobs' ? 'active' : ''}`}>
          <Link to="/Jobs" onClick={toggleNav} className="menu-link">
            Careers
          </Link>
        </li>
        <li className={`group relative ${location.pathname === '/ContactMain' ? 'active' : ''}`}>
          <Link to="/ContactMain" onClick={toggleNav} className="menu-link">
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
