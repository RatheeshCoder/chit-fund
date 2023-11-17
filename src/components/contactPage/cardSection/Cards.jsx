import React from 'react';
import { BranchData } from '../../../data/data';
import Logo from '../../../asset/imgs/location-vector-icon.png';
import RoomIcon from '@mui/icons-material/Room';

const Cards = () => {
  return (
    <div className='card-container'>
      {BranchData.map(branch => (
        <div className='branch-cards' key={branch.id}>
          <div className='cta-branch'>
            <img src={Logo} alt='logo' />
            <h1>{branch.location}</h1>
            <p>{branch.address}</p>
            <a href={branch.link} target="_blank" rel="noopener noreferrer">
              <button>
                <RoomIcon /> Get Direction
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
