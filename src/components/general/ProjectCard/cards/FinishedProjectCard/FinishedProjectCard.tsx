import React, { Fragment } from "react";
import { HeadingType } from "../../../Heading";
import {
  FontColor,
  FontSize,
  FontWeight
} from "../../../../../data/style/variables";
import { ProjectTitle, Time, RelativeDate, ProjectOwner } from "./styled";

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
      <RelativeDate>{finishedDate!}</RelativeDate>
    </Time>

    <ProjectOwner {...owner} />
  </Fragment>
);

export default FinishedProject;
