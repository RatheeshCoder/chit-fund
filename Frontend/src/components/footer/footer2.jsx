import React from "react";
import logo from "../../asset/imgs/logo-img.png";
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
// import { Facebook, LinkedIn, WhatsApp, Instagram } from "@mui/icons-material";

function Footer2() {
  const footerNavs = [
    {
      label: "Page",
      items: [
        {
          href: "javascript:void()",
          name: "Home",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
        {
          href: "javascript:void()",
          name: "Gallery",
        },
        {
          href: "javascript:void()",
          name: "Products",
        },
        {
          href: "javascript:void()",
          name: "Contact Us",
        },
      ],
    },
    {
      label: "Abouts Us",
      items: [
        {
          href: "javascript:void()",
          name: "Why Choose Us",
        },
        {
          href: "javascript:void()",
          name: "Company Profile",
        },
        {
          href: "javascript:void()",
          name: "Directors",
        },
        {
          href: "javascript:void()",
          name: "Values",
        },
      ],
    },
    {
      label: "How We Works",
      items: [
        {
          href: "javascript:void()",
          name: "All About Chits",
        },
        {
          href: "javascript:void()",
          name: "Blogs",
        },
        {
          href: "javascript:void()",
          name: "ChitFund Act",
        },
        {
          href: "javascript:void()",
          name: "FAQs",
        },
        
      ],
    },
  ];

  return (
    <footer className="max-w-screen-xl px-4 py-5 mx-auto text-gray-500 bg-white footer2 md:px-8">
      <div className="justify-between gap-6 md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src={logo} className="w-40" />
            <p className="leading-relaxed mt-2 text-[15px]">
              Feel free to reach out with any questions or concerns; we're here
              to help.
            </p>
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-800">Contact Information</p>
            <p>1437, Ground floor red rose chambers  trichy road <br /> Coimbatore-641018</p>
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
                  <a
                    key={idx}
                    href={el.href}
                    className="block hover:underline hover:text-indigo-600"
                  >
                    {el.name}
                  </a>
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
              <a href="javascript:void()">
                <Facebook/>
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href="javascript:void()">
                <Instagram/>
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href="javascript:void()">
                <WhatsApp/>
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href="javascript:void()">
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
