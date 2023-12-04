import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';

const VisionSection = () => {
  const blackAndWhiteIconStyle = {
    filter: 'grayscale(100%)',
  };

  return (
    <section className="bg-gray-100 py-16" style={{ marginTop: '-100px' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border p-4 flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white" style={blackAndWhiteIconStyle}>
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">
                +91-8754000842 <br />
                +91-8754000843
              </p>
            </div>
          </div>
          <div className="border p-4 flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white" style={blackAndWhiteIconStyle}>
              <MailOutlineIcon className="w-6 h-6" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">reach@vanmohchitfunds.com</p>
            </div>
          </div>
          <div className="border p-4 flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white" style={blackAndWhiteIconStyle}>
              <RoomIcon className="w-6 h-6" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-lg font-medium text-gray-900">Location</h3>
              <p className="mt-2 text-base text-gray-500">
                <span>Head Office</span>: 1437, Ground floor Red rose chambers, Trichy road (Opp to welcome ITC hotel, Race course) Coimbatore-641018
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
