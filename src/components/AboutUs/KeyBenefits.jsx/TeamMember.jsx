import React from 'react';

const TeamMember = ({ member }) => {
  return (
    <div className="max-w-lg w-full lg:max-w-full lg:flex mx-auto my-10">
      <div
        className="h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${member.image}')` }}
        title={member.name}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
        <div>
          <a
            href={member.linkedin}
            className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {member.name}
          </a>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="text-gray-500 text-base mt-4">{member.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
