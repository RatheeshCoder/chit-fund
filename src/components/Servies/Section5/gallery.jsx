// ImageServies.js
import React from 'react';
import { imageServies } from '../../../data/data';

const ImageServies = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 text-center mt-10 mb-10">
         Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900' >Service</span>
        </h1>
    <div className="flex justify-center items-center mb-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 p-4 max-w-[500px] md:max-w-[700px]">
        {imageServies.map(image => (
          <img
            key={image.id}
            className="hover:opacity-75 rounded-full"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default ImageServies;
