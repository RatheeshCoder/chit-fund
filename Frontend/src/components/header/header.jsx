import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../asset/company-logo-img.PNG";
import openarrow from '../../asset/imgs/openarrrowimg.png'
import closearrow from '../../asset/imgs/closearrowimg.png'

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showHowItWorksDropdown, setShowHowItWorksDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  const toggleHowItWorksDropdown = () => {
    setShowHowItWorksDropdown(!showHowItWorksDropdown);
  };

  const closeNavbar = () => {
    setNavActive(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`nav font-sans text-lg ${navActive ? "nav-active" : ""}`}>
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className={`nav-links  ${navActive ? "nav-active" : ""}`}>
        <li
          className={`group relative font-bold ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <Link
            to="/"
            onClick={() => {
              toggleNav();
              closeNavbar();
            }}
            className="font-bold "
          >
            Home
          </Link>
        </li>

        <li
          className={`group relative ${
            location.pathname.startsWith("/about") ? "active" : ""
          }`}
        >
          <span
            className={`cursor-pointer menu-link `}
            onClick={() => {
              toggleAboutDropdown();
            }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            About Us &nbsp; {showAboutDropdown ? <img src={closearrow} alt="Open" className="w-5 opacity-50" /> : <img src={openarrow} alt="Closed" className="w-5 opacity-50"/>}
          </span>
          {showAboutDropdown && (
            <ul
            className={`dropdown absolute hidden bg-white border rounded-md mt-4 p-2 cta-dropdown-option ${showAboutDropdown ? 'dropdown' : ''}`}
>
              <li>
                <Link
                  to="/about/CompanyPro"
                  onClick={() => {
                    toggleNav();
                    toggleAboutDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  Why choose us
                </Link>
              </li>
              <li>
                <Link
                  to="/about/Benefits"
                  onClick={() => {
                    toggleNav();
                    toggleAboutDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/about/Direction"
                  onClick={() => {
                    toggleNav();
                    toggleAboutDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  Directors
                </Link>
              </li>
              <li>
                <Link
                  to="/about/Values"
                  onClick={() => {
                    toggleNav();
                    toggleAboutDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  Values
                </Link>
              </li>
            </ul>
          )}
        </li>


        <li
          className={`group relative ${
            location.pathname.startsWith("/how-it-works") ? "active" : ""
          }`}
        >
          <span
            className={`cursor-pointer menu-link`}
            onClick={() => {
              toggleHowItWorksDropdown();
            }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            How We Work &nbsp; {showHowItWorksDropdown ? <img src={closearrow} alt="Open" className="w-5 opacity-50" /> : <img src={openarrow} alt="Closed" className="w-5 opacity-50"/>}
          </span>
          {showHowItWorksDropdown && (
            <ul
              className={`dropdown absolute hidden bg-white border rounded-md mt-4 p-2 cta-dropdown-option`}
            >
               <li>
                <Link
                  to="/how-it-works/HowWeWorks"
                  onClick={() => {
                    toggleNav();
                    toggleHowItWorksDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  All About Chits
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works/Blogs"
                  onClick={() => {
                    toggleNav();
                    toggleHowItWorksDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works/Comparisons"
                  onClick={() => {
                    toggleNav();
                    toggleHowItWorksDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  ChitFund Act
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works/faq"
                  onClick={() => {
                    toggleNav();
                    toggleHowItWorksDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  FAQ
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className={`group relative ${
            location.pathname === "/Gallery" ? "active" : ""
          }`}
        >
          <Link to="/Gallery" onClick={toggleNav} className="">
            Gallery
          </Link>
        </li>
        
        <li
          className={`group relative ${
            location.pathname.startsWith("/about") ? "active" : ""
          }`}
        >
          <span
            className={`cursor-pointer menu-link special-class `}
            onClick={() => {
              toggleProductDropdown();
            }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            Products &nbsp; {showProductDropdown ? <img src={closearrow} alt="Open" className="w-5 opacity-50 " /> : <img src={openarrow} alt="Closed" className="w-5 opacity-50"/>}
          </span>
          {showProductDropdown && (
            <ul
              className={`dropdown absolute hidden bg-white border rounded-md mt-4 p-2 cta-dropdown-option`}
            >
              <li>
                <Link
                  to="/Products/Services"
                  onClick={() => {
                    toggleNav();
                    toggleProductDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Products/Product"
                  onClick={() => {
                    toggleNav();
                    toggleProductDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800 "
                >
                  Schemes
                </Link>
              </li>
              
             
            </ul>
          )}
        </li>


        <li
          className={`group relative ${
            location.pathname === "/Jobs" ? "active" : ""
          }`}
        >
          <Link to="/Jobs" onClick={toggleNav} className="">
            Careers
          </Link>
        </li>
        <li
          className={`group relative ${
            location.pathname === "/ContactMain" ? "active" : ""
          }`}
        >
          <Link to="/ContactMain" onClick={toggleNav} className="">
            ContactUs
          </Link>
        </li>
      </ul>
      <div
        className={`burger ${navActive ? "toggle" : ""}`}
        onClick={toggleNav}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;
