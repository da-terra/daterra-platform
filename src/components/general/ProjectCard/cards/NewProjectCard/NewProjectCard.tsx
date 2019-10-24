import React, { Fragment } from "react";
import IProject from "../../../../../types/IProject";
import { HeadingType } from "../../../Heading";
import { ProjectOwner, ProjectTitle } from "./styled";

const NewProjectCard: React.FC<IProject> = ({ title, finishedDate, owner }) => (
  <Fragment>
    <ProjectOwner {...owner} />

    <ProjectTitle type={HeadingType.Secondary} serif>
      {title}
    </ProjectTitle>
  </Fragment>
);

export default NewProjectCard;
