import React from "react";
import Roles from "../../../data/Roles";
import { TeamSummaryWrapper, TeamGroup, SummaryAvatar } from "./styled";

type TeamSummaryProps = {
  className?: string;
  team: IUser[];
};

const TeamSummary: React.FC<TeamSummaryProps> = ({ className, team }) => {
  const developmentTeam = team.filter(
    user => user.image && user.role === Roles.Developer
  );

  const managementTeam = team.filter(
    user => user.image && user.role === Roles.Lead
  );

  return (
    <TeamSummaryWrapper className={className}>
      <TeamGroup>
        {developmentTeam.map(user => (
          <SummaryAvatar
            src={user.image!.src}
            alt={user.image!.alt}
            title={user.image!.alt}
          />
        ))}
      </TeamGroup>

      <TeamGroup>
        {managementTeam.map(user => (
          <SummaryAvatar
            src={user.image!.src}
            alt={user.image!.alt}
            title={user.image!.alt}
          />
        ))}
      </TeamGroup>
    </TeamSummaryWrapper>
  );
};

export default TeamSummary;
