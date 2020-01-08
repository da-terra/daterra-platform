import React from "react";
import { IUser } from "@data-science-platform/shared";
import Role from "../../../data/Role";
import { TeamSummaryWrapper, TeamGroup, SummaryAvatar } from "./styled";

type TeamSummaryProps = {
  className?: string;
  team: IUser[];
};

const TeamSummary: React.FC<TeamSummaryProps> = ({ className, team }) => {
  const students = team.filter(user => user.role === Role.Student);

  const experts = team.filter(user => user.role === Role.Expert);

  return (
    <TeamSummaryWrapper className={className}>
      <TeamGroup>
        {students.map(user => {
          const [firstPhoto] = user?.photos ?? [];

          return (
            <SummaryAvatar
              src={firstPhoto?.value}
              alt={user.displayName}
              title={user.displayName}
            />
          );
        })}
      </TeamGroup>

      <TeamGroup>
        {experts.map(user => {
          const [firstPhoto] = user?.photos ?? [];

          return (
            <SummaryAvatar
              src={firstPhoto?.value}
              alt={user.displayName}
              title={user.displayName}
            />
          );
        })}
      </TeamGroup>
    </TeamSummaryWrapper>
  );
};

export default TeamSummary;
