import React from "react";
import TeamMember from "./TeamMember"; 
import { teamData } from "../../../data/data";

const Team = () => {
  return (
    <div className="p-10 max-w-screen-lg  mx-auto">
      <div className="sm:grid grid-cols-2 gap-6 my-10">
        {teamData.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
