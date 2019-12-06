import React, { Fragment } from "react";
import { isAfter } from "date-fns";
import { HeadingType } from "../../../Heading";
import { FontColor, FontWeight } from "../../../../../data/style/variables";
import {
  ProjectOwner,
  ProjectTitle,
  RelativeDate,
  Times,
  TimeGroup,
  TimeString,
  ProjectTeamSummary
} from "./styled";

const ActiveProjectCard: React.FC<IProject> = ({
  title,
  owner,
  team,
  updatedDate,
  duration
}) => {
  const isPastDeadline = isAfter(new Date(), new Date(duration!.endDate!));

  return (
    <Fragment>
      <ProjectOwner {...owner} />

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

          {/*
            // @ts-ignore */}
          <TimeString
            as="time"
            fontColor={isPastDeadline ? FontColor.Error : FontColor.Primary}
            dateTime={updatedDate}
            italic
          >
            <RelativeDate>{duration!.endDate}</RelativeDate>
          </TimeString>
        </TimeGroup>

        <TimeGroup>
          <TimeString
            fontColor={FontColor.Secondary}
            fontWeight={FontWeight.Bold}
          >
            Laatste update
          </TimeString>

          {/*
            // @ts-ignore */}
          <TimeString
            as="time"
            dateTime={updatedDate}
            fontColor={FontColor.Secondary}
            italic
          >
            <RelativeDate>{updatedDate}</RelativeDate>
          </TimeString>
        </TimeGroup>
      </Times>

      <ProjectTeamSummary team={team} />
    </Fragment>
  );
};

export default ActiveProjectCard;
