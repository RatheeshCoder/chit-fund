// ContactDetails.jsx
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactDetails = () => {
  return (
    <div className="w-full md:w-7/12 lg:pl-12">
      <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
      <p className="text-gray-700 mb-4">
        Feel free to get in touch with us. We are available to assist you with any inquiries or
        concerns you may have.
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          <EmailIcon className="inline-block mr-2" />
          Email
        </h3>
        <p className="text-gray-700">info@example.com</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          <PhoneIcon className="inline-block mr-2" />
          Phone
        </h3>
        <p className="text-gray-700">+1 (555) 123-4567</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          <LocationOnIcon className="inline-block mr-2" />
          Address
        </h3>
        <p className="text-gray-700">123 Main Street, Cityville, State, 12345, Country</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          <FacebookIcon className="inline-block mr-2" />
          <TwitterIcon className="inline-block mr-2" />
          <InstagramIcon className="inline-block mr-2" />
          Social Media
        </h3>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
