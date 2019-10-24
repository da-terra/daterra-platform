import React, { Fragment } from "react";
import { formatDistanceToNow, isAfter } from "date-fns";
import IProject from "../../../../../types/IProject";
import { HeadingType } from "../../../Heading";
import { ParagraphColor } from "../../../Paragraph";
import { ProjectOwner, ProjectTitle, Times, Paragraph, Team } from "./styled";

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

      <ProjectTitle type={HeadingType.Secondary} serif>
        {title}
      </ProjectTitle>

      <Times>
        <Paragraph
          paragraphColor={
            isPastDeadline ? ParagraphColor.Error : ParagraphColor.Primary
          }
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

        <Paragraph paragraphColor={ParagraphColor.Muted} preserveWhitespace>
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

      <Team team={team} />
    </Fragment>
  );
};

export default ActiveProjectCard;
