import React from "react";
import logo from "../../asset/imgs/logo-img.png";
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
// import { Facebook, LinkedIn, WhatsApp, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer2() {
  const footerNavs = [
    {
      label: "Page",
      items: [
        {
          href: "javascript:void()",
          name: "Home",
          link:"/"
        },
        {
          href: "javascript:void()",
          name: "Careers",
          link:"/Jobs"
        },
        {
          href: "javascript:void()",
          name: "Gallery",
          link:"/Gallery"
        },
        {
          href: "javascript:void()",
          name: "Products",
          link:"/Products/Product"
        },
        {
          href: "javascript:void()",
          name: "Contact Us",
          link:"/ContactMain"
        },
      ],
    },
    {
      label: "Abouts Us",
      items: [
        {
          href: "javascript:void()",
          name: "Why Choose Us",
          link:"/about/CompanyPro"
        },
        {
          href: "javascript:void()",
          name: "Company Profile",
          link:"/about/Benefits"
        },
        {
          href: "javascript:void()",
          name: "Directors",
          link:"/about/Direction"
        },
        {
          href: "javascript:void()",
          name: "Values",
          link:"/about/Values"
        },
      ],
    },
    {
      label: "How We Works",
      items: [
        {
          href: "javascript:void()",
          name: "All About Chits",
          link:"/how-it-works/HowWeWorks"
        },
        {
          href: "javascript:void()",
          name: "Blogs",
          link:"/how-it-works/Blogs"
        },
        {
          href: "javascript:void()",
          name: "ChitFund Act",
          link:"/how-it-works/Comparisons"
        },
        {
          href: "javascript:void()",
          name: "FAQs",
          link:"/how-it-works/faq"
        },
        
      ],
    },
  ];

  return (
    <footer className="max-w-screen-xl px-4 py-5 mx-auto text-gray-500 bg-white footer2 md:px-8">
      <div className="justify-between gap-6 md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <Link to='/'>
            <img src={logo} className="w-40" />
            </Link>
            <p className="leading-relaxed mt-2 text-[15px]">
              Feel free to reach out with any questions or concerns; we're here
              to help.
            </p>
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-800">Contact Information</p>
            <p> S.M.Arcade. Door no. 34 to 36, l-b, 9th street extn., gandhipuram,<br />  coimbatore-641012</p>
            <p>Phone: +91 93618 05480</p>
            <p>Email: reach@vanmohchitfunds.com</p>
          </div>
        </div>
        <div className="justify-between flex-1 mt-10 space-y-6 sm:flex md:space-y-0 md:mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-20 gap-y-4 md:grid-cols-3">
            {footerNavs.map((item, idx) => (
              <div className="space-y-4" key={idx}>
                <h4 className="font-medium text-gray-800">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <Link
                    key={idx}
                    to={el.link}
                    className="block hover:underline hover:text-indigo-600"
                  >
                    {el.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="items-center justify-between py-6 mt-8 border-t sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; ©2023. Vanmoh chit funds Pvt.Ltd, All Rights Reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href="https://www.facebook.com/profile.php?id=100070051033472&mibextid=LQQJ4d" target="_blank">
                <Facebook/>
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href="https://instagram.com/vanmoh_chit_funds?igshid=bnVhYjh1MmV2b3Fj" target="_blank">
                <Instagram/>
              </a>
            </li>

            {/* <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href="javascript:void()">
                <WhatsApp/>
              </a>
            </li> */}

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href="https://in.linkedin.com/in/kannan-mohan-0216ba214" target="_blank">
                <LinkedIn/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
}

export default Footer2;
