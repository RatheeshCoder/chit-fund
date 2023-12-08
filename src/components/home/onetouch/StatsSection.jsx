import React from 'react';
import NumberCounter from './account';
import Prize from './prize';
import Gift from './gift';
import Location from './location';
import Camera from './camera';
import Heart from './heart';
import user from '../../../asset/imgs/user.png';
import trophy from '../../../asset/imgs/trophy.png';
import gift from '../../../asset/imgs/gift.png';
import location from '../../../asset/imgs/location.png';
import heart from '../../../asset/imgs/heart.png';
import camera from '../../../asset/imgs/camera.png';

const StatsSection = () => {
  return (
    <section className=" p-4">
      <div className="container mx-auto pt-12 pb-20 ">

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome to my website
        </h1>

        <p className="text-gray-700 text-lg text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna id ex hendrerit semper.
        </p>
        {/* Statistics grid */}
        <div className="grid bg-white grid-cols-1 md:grid-cols-6 gap-8 text-center">
          {renderStatBlock(user, 'Subscribers', <NumberCounter />)}
          {renderStatBlock(trophy, 'Prized Customers', <Prize />)}
          {renderStatBlock(gift, 'Schemes', <Gift />)}
          {renderStatBlock(heart, 'Dedicated Kinds', <Heart />)}
          {renderStatBlock(location, 'Locations', <Location />)}
          {renderStatBlock(camera, 'Repeat Business', <Camera />)}
        </div>
      </div>
    </section>
  );
};

const renderStatBlock = (imageSrc, title, content) => (
  <div className="p-4 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
    <img src={imageSrc} alt="" className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
    <h2 className="text-xl font-bold text-gray-800 mb-4">{content}</h2>
    <p className="text-gray-700">{title}</p>
  </div>
);

export default StatsSection;
