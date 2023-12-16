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
        <img src={logo} alt="Logo" />
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
            className="menu-link font-bold"
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
            className={`cursor-pointer menu-link`}
            onClick={() => {
              toggleAboutDropdown();
            }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            About Us {showAboutDropdown ? <img src={closearrow} alt="Open" className="w-5 " /> : <img src={openarrow} alt="Closed" className="w-5"/>}
          </span>
          {showAboutDropdown && (
            <ul
              className={`dropdown absolute hidden bg-white border rounded-md mt-4 p-2`}
            >
              <li>
                <Link
                  to="/about/CompanyPro"
                  onClick={() => {
                    toggleNav();
                    toggleAboutDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800  menu-link"
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
                  className="block px-4 py-2 text-gray-800  menu-link"
                >
                  CompanyProfile
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
                  className="block px-4 py-2 text-gray-800  menu-link"
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
                  className="block px-4 py-2 text-gray-800  menu-link"
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
            How We Works {showHowItWorksDropdown ? <img src={closearrow} alt="Open" className="w-5 " /> : <img src={openarrow} alt="Closed" className="w-5"/>}
          </span>
          {showHowItWorksDropdown && (
            <ul
              className={`dropdown absolute hidden bg-white border rounded-md mt-4 p-2`}
            >
              <li>
                <Link
                  to="/how-it-works/Blogs"
                  onClick={() => {
                    toggleNav();
                    toggleHowItWorksDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800  menu-link"
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
                  className="block px-4 py-2 text-gray-800  menu-link"
                >
                  Comparisons
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
                  className="block px-4 py-2 text-gray-800  menu-link"
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
          <Link to="/Gallery" onClick={toggleNav} className="menu-link">
            Gallery
          </Link>
        </li>
        
        <li
          className={`group relative ${
            location.pathname.startsWith("/about") ? "active" : ""
          }`}
        >
          <span
            className={`cursor-pointer menu-link`}
            onClick={() => {
              toggleProductDropdown();
            }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            Products {showProductDropdown ? <img src={closearrow} alt="Open" className="w-5 " /> : <img src={openarrow} alt="Closed" className="w-5"/>}
          </span>
          {showProductDropdown && (
            <ul
              className={`dropdown absolute hidden bg-white border rounded-md mt-4 p-2`}
            >
              <li>
                <Link
                  to="/Products/Services"
                  onClick={() => {
                    toggleNav();
                    toggleProductDropdown();
                    closeNavbar();
                  }}
                  className="block px-4 py-2 text-gray-800  menu-link"
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
                  className="block px-4 py-2 text-gray-800  menu-link"
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
          <Link to="/Jobs" onClick={toggleNav} className="menu-link">
            Careers
          </Link>
        </li>
        <li
          className={`group relative ${
            location.pathname === "/ContactMain" ? "active" : ""
          }`}
        >
          <Link to="/ContactMain" onClick={toggleNav} className="menu-link">
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
