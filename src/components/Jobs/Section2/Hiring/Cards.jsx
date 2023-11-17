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
            JOB TITLES ↓
          </li>
          {jobTitles.map((office) => (
            <li className='jobFilter' key={office} onClick={() => { setFilter(office); setActive(false); }}>{office === 'all' ? 'All Jobs' : office}</li>
          ))}
          
        </div>
      </div>
      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className='job-icon'><BusinessCenterIcon/></div>
            <h1>{job.title}</h1>
            <p>{job.office}</p>
            <p>{job.experience}</p>
            <p className='description'>{job.description}</p>
            <RegistrationFormWithDialog/>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Cards;
