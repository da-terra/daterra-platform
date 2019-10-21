import React, { Fragment } from "react";
import { formatDistanceToNow } from "date-fns";
import IProject from "../../../../../types/IProject";
import { HeadingType } from "../../../Heading";
import { ParagraphSize, ParagraphColor } from "../../../Paragraph";
import { ProjectTitle, Time, ProjectPartner } from "./styled";

const formateDistanceToNowOptions = {
  addSuffix: true,
  includeSeconds: true
};

const FinishedProject: React.FC<IProject> = ({
  title,
  finishedDate,
  owner
}) => (
  <Fragment>
    <ProjectTitle type={HeadingType.Secondary} serif>
      {title}
    </ProjectTitle>

    <Time
      as="time"
      paragraphSize={ParagraphSize.Small}
      paragraphColor={ParagraphColor.Muted}
      italic
    >
      {formatDistanceToNow(
        new Date(finishedDate!),
        formateDistanceToNowOptions
      )}
    </Time>

    <ProjectPartner {...owner} />
  </Fragment>
);

export default FinishedProject;
