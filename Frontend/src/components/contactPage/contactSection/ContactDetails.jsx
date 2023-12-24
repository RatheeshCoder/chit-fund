import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactDetails = () => {
  return (
    <div className="w-full md:w-7/12 lg:pl-12">
      <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
      <p className="text-gray-700 mb-4">
        Feel free to get in touch with us. We are available to assist you with
        any inquiries or concerns you may have.
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          <EmailIcon className="inline-block mr-2" />
          Email
        </h3>
        <p className="text-gray-700">reach@vanmohchitfunds.com</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          <PhoneIcon className="inline-block mr-2" />
          Phone
        </h3>
        <p className="text-gray-700">+91 93618 05480</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          <LocationOnIcon className="inline-block mr-2" />
          Address
        </h3>
        <p className="text-gray-700">
          1437, Ground floor red rose chambers, trichy road (Opp to welcome ITC
          hotel, Race course) Coimbatore-641018
        </p>
      </div>
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/people/Vanmoh-Chit-Funds/pfbid0KWuqR1gT6tYgQHUwtJMYgHNCZMRCDy7zEVCQMRWjn42PZraVDp8uVCEYM4ER5PgMl/?mibextid=LQQJ4d"
            className="text-lg font-semibold mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="inline-block mr-2" />
          </a>
          <a
            href="#"
            className="text-lg font-semibold mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="inline-block mr-2" />
          </a>
          <a
            href="https://instagram.com/vanmoh_chit_funds?igshid=bnVhYjh1MmV2b3Fj"
            className="text-lg font-semibold mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="inline-block mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
