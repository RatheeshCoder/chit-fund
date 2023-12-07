import React from 'react';
import TeamMember from './TeamMember'; // Import the TeamMember component
import { teamData } from '../../../data/data';

const Team = () => {
  return (
    <div className="p-10 max-w-screen-lg  mx-auto">
      <div className="text-center mb-4">
        
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-indigo-600"> Quotes</span>
        </h3>
      </div>
      <div className="sm:grid grid-cols-2 gap-6 my-10">
        {/* Use the map method to render TeamMember for each member in the dataset */}
        {teamData.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
