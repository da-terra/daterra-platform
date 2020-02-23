import { IProject } from "@data-science-platform/shared";
import { differenceInSeconds, isAfter } from "date-fns";
import React, { Fragment } from "react";
import { FormattedRelativeTime } from "react-intl";
import { FontColor, FontWeight } from "../../../../../data/style/variables";
import {
  ProjectOwner,
  ProjectTeamSummary,
  ProjectTitle,
  TimeGroup,
  Times,
  TimeString
} from "./styled";
import { HeadingType } from "../../../Heading";

const ActiveProjectCard: React.FC<IProject> = ({
  title,
  team,
  activities: [lastActivity],
  duration
}) => {
  const updatedDate = new Date(lastActivity.createdDate);
  const endDate = new Date(duration!.endDate);

  const teamLead = team.find(user => user.role === 2)!;
  const isPastDeadline = isAfter(new Date(), endDate);

  return (
    <Fragment>
      <ProjectOwner {...teamLead} />

      <ProjectTitle headingType={HeadingType.Secondary} serif>
        {title}
      </ProjectTitle>

      <Times>
        <TimeGroup>
          <TimeString
            fontColor={isPastDeadline ? FontColor.Error : FontColor.Primary}
            preserveWhitespace
          >
            <strong>Deadline</strong>
          </TimeString>

          <TimeString
            as="time"
            dateTime={endDate.toISOString()}
            fontColor={isPastDeadline ? FontColor.Error : FontColor.Primary}
            italic
          >
            <FormattedRelativeTime
              value={differenceInSeconds(endDate, new Date())}
              updateIntervalInSeconds={30}
            />
          </TimeString>
        </TimeGroup>

        <TimeGroup>
          <TimeString
            fontColor={FontColor.Secondary}
            fontWeight={FontWeight.Bold}
          >
            Laatste update
          </TimeString>

          <TimeString
            as="time"
            dateTime={updatedDate.toISOString()}
            fontColor={FontColor.Secondary}
            italic
          >
            <FormattedRelativeTime
              value={differenceInSeconds(updatedDate, new Date())}
              updateIntervalInSeconds={30}
            />
          </TimeString>
        </TimeGroup>
      </Times>

      <ProjectTeamSummary team={team} />
    </Fragment>
  );
};

export default ActiveProjectCard;
