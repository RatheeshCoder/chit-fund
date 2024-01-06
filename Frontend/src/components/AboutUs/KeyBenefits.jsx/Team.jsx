import React from "react";
import TeamMember from "./TeamMember"; 
import { teamData } from "../../../data/data";

const Team = () => {
  return (
    <div className="max-w-screen-lg p-10 mx-auto ">
      <div className="flex flex-col gap-7">
        {teamData.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
