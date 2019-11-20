import React, { Fragment } from "react";
import { formatDistanceToNow } from "date-fns";
import { HeadingType } from "../../../Heading";
import {
  FontColor,
  FontSize,
  FontWeight
} from "../../../../../data/style/variables";
import { ProjectTitle, Time, ProjectOwner } from "./styled";

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
    <ProjectTitle headingType={HeadingType.Secondary} serif>
      {title}
    </ProjectTitle>

    <Time
      as="time"
      fontSize={FontSize.Small}
      fontWeight={FontWeight.Bold}
      fontColor={FontColor.Secondary}
      italic
    >
      {formatDistanceToNow(
        new Date(finishedDate!),
        formateDistanceToNowOptions
      )}
    </Time>

    <ProjectOwner {...owner} />
  </Fragment>
);

export default FinishedProject;
