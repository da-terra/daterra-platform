import React, { Fragment } from "react";
import { IProject } from "@data-science-platform/shared";
import { HeadingType } from "../../../Heading";
import {
  FontColor,
  FontSize,
  FontWeight
} from "../../../../../data/style/variables";
import { ProjectTitle, Time, RelativeDate, ProjectOwner } from "./styled";

const FinishedProject: React.FC<IProject> = ({ title, duration, team }) => {
  const teamLead = team.find(user => user.role === 2)!;

  return (
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
        <RelativeDate>{duration?.endDate!}</RelativeDate>
      </Time>

      <ProjectOwner {...teamLead} />
    </Fragment>
  );
};

export default FinishedProject;
