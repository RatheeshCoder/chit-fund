import React, { useState } from 'react';
import { jobData } from '../../../../data/data';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RegistrationForm from './Form';
import RegistrationFormWithDialog from './Form';

const Cards = () => {
  const [filter, setFilter] = useState('all');
  const [isActive, setActive] = useState(false);
  const jobTitles = ['all', 'Coimbatore', 'Karamadai', 'Coonoor'];

  const toggleActive = () => {
    setActive(!isActive);
  };

  const filteredJobs = jobData.filter((job) => filter === 'all' || job.office === filter);

  return (
    <div className="Main">
      <div className={`sidenavbar ${isActive ? 'active' : ''}`}>
        <div className='wrapper'>
        <li onClick={toggleActive} className={`brand-dropdown ${isActive ? 'active' : ''}`}>
            JOB'S TITLES ↓ 
          </li>
          {jobTitles.map((office) => (
            <li className='jobFilter' key={office} onClick={() => { setFilter(office); setActive(false); }}>{office === 'all' ? 'All Jobs' : office}</li>
          ))}
          
        </div>
      </div>
      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
          <div>
            <h4 className='text-indigo-600 font-medium text-center text-black'>
              Chit Schema
            </h4>
            <p className='mt-4 text-gray-800 text-3xl font-semibold'>
              ₹{product.amount}
            </p>
            <p className="text-sm text-gray-600">{product.timeline}</p>
          </div>
          <div className='py-8 space-y-3'>
                          {product.additionalInfo && (
              <div className='flex items-center gap-5'>
                {/** SVG */}
                
                {/** Details */}
                <div className='flex flex-col'>
                  <span>Monthly Pay: ₹{product.monthlypay}</span>
                  <span>Daily Pay: ₹{product.dailypay}</span>
                  <span>Weekly Pay: ₹{product.weeklypay}</span>
                </div>
              </div>
            )}

          </div>
          <div className="flex-1 flex items-end">
          <Button
            className=' cta-view-more-product px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150  '
            onClick={() => openContentPopup(product)}
          >
           View More
          </Button>



          </div>
        </div>
        ))}
      </div>
    
    </div>
  );
};

export default Cards;
