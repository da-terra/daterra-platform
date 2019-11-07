import React, { Fragment } from "react";
import { formatDistanceToNow, isAfter } from "date-fns";
import IProject from "../../../../../types/IProject";
import { HeadingType } from "../../../Heading";
import { FontColor } from "../../../../../data/style/variables";
import {
  ProjectOwner,
  ProjectTitle,
  Times,
  Paragraph,
  ProjectTeamSummary
} from "./styled";

const formateDistanceToNowOptions = {
  addSuffix: true,
  includeSeconds: true
};

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
        <Paragraph
          fontColor={isPastDeadline ? FontColor.Error : FontColor.Primary}
          preserveWhitespace
        >
          <strong>Deadline</strong>
          {"\n"}
          <time dateTime={duration!.endDate}>
            {formatDistanceToNow(
              new Date(duration!.endDate!),
              formateDistanceToNowOptions
            )}
          </time>
        </Paragraph>

        <Paragraph fontColor={FontColor.Muted} preserveWhitespace>
          <strong>Laatste update</strong>
          {"\n"}
          <time dateTime={updatedDate}>
            {formatDistanceToNow(
              new Date(updatedDate!),
              formateDistanceToNowOptions
            )}
          </time>
        </Paragraph>
      </Times>

      <ProjectTeamSummary team={team} />
    </Fragment>
  );
};

export default ActiveProjectCard;
