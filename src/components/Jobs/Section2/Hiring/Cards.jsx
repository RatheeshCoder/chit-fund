import React, { useState, useEffect } from 'react';
import { jobData } from '../../../../data/data';
import RegistrationForm from './Form';
import openimg from "../../../../asset/imgs/jobOpenimg.png"
import closeimg from "../../../../asset/imgs/jobCloseimg.png"

const Cards = () => {
  const [filter, setFilter] = useState('all');
  const [isActive, setActive] = useState(false);
  const [isSidebarHidden, setSidebarHidden] = useState(window.innerWidth < 720);
  const jobTitles = ['all', 'Coimbatore', 'Karamadai', 'Coonoor'];

  const toggleActive = () => {
    setActive(!isActive);
  };

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  const filteredJobs = jobData.filter((job) => filter === 'all' || job.office === filter);

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 720);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="Main">
      <button onClick={toggleSidebar} className="sidebar-button cta-job-button" style={{ backgroundColor: 'white', color: 'white' }}>
  {isSidebarHidden ? (
    <img src={openimg} alt="Show Jobs Titles" style={{ width: '50px', marginLeft: '20px' }} />
  ) : (
    <img src={closeimg} alt="Hide Jobs Titles" style={{ width: '50px', marginLeft: '20px' }} />
  )}
</button>
      {!isSidebarHidden && (
        <div className={`sidenavbar ${isActive ? 'active' : ''}`}>
          <div className='wrapper'>
            <li onClick={toggleActive} className={`brand-dropdown ${isActive ? 'active' : ''}`}>
              JOB'S TITLES ↓
            </li>
            {jobTitles.map((office) => (
              <li
                className='jobFilter'
                key={office}
                onClick={() => {
                  setFilter(office);
                  setActive(false);
                }}
              >
                {office === 'all' ? 'All Jobs' : office}
              </li>
            ))}
          </div>
        </div>
      )}

      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div key={job.id} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 cta-job-card'>
            <div>
              <h4 className='text-indigo-600 text-2xl font-medium text-center text-black'>
                {job.title}
              </h4>
              <p className='mt-4 text-gray-800 text-xl font-semibold'>
                {job.office}
              </p>
              <p className="text-sm text-gray-600">{job.experience}</p>
            </div>
            <div className='py-8 space-y-3'>
              <div className='flex items-center gap-5'>
                <div className='flex flex-col'>
                  <p>{job.description}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-end">
              <RegistrationForm />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
