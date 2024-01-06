
import React from 'react';
import SideTab from './SideTab';
import { Benefitcontent, Benefitoptions } from '../../../data/data';

function Benefit() {
  return (
    <div className='lg:mx-10' >
      <h1 className="mt-10 mb-10 text-4xl font-bold text-center text-gray-800">
      Key <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900' >Benefits</span>
        </h1>
      <SideTab options={Benefitoptions} contentData={Benefitcontent} />
    </div>
  );
}

export default Benefit;
