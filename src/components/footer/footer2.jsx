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
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" aria-label="Go home" title="Company" className="flex items-center">
             <img src={logo} className="cta-footer-logo" alt="" />
              
            </a>
            <div className="mt-6 lg:max-w-sm text-gray-800">
              <p className="text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-blue-500 hover:text-blue-800">850-123-5021</a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-blue-500 hover:text-blue-800">info@lorem.mail</a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-blue-500 hover:text-blue-800">
                312 Lovely Street, NY
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-blue-800">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <Facebook/>
                </svg>
              </a>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-blue-800">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                 <LinkedIn/>
                </svg>
              </a>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-blue-800">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                 <WhatsApp/>
                </svg>
              </a>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-blue-800">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                 <Instagram/>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2022 Float UI All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-800">F.A.Q</a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-800">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-800">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
