import React, { Fragment } from "react";
import { formatDistanceToNow } from "date-fns";
import IProject from "../../../types/IProject";
import { HeadingType } from "../Heading";
import { ParagraphType } from "../Paragraph";
import {
  CardWrapper,
  ProjectTitle,

  // Finished project
  FinishedProjectPartner,
  FinishedProjectTime,

  // Active project
  ActiveProjectPartner,

  // New Project
  NewProjectPartner
} from "./styled";

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

    <FinishedProjectTime as="time" paragraphType={ParagraphType.Muted} italic>
      {formatDistanceToNow(
        new Date(finishedDate!),
        formateDistanceToNowOptions
      )}
    </FinishedProjectTime>

    <FinishedProjectPartner {...owner} />
  </Fragment>
);

const ActiveProject: React.FC<IProject> = ({ title, finishedDate, owner }) => (
  <Fragment>
    <ActiveProjectPartner {...owner} />

    <ProjectTitle type={HeadingType.Secondary} serif>
      {title}
    </ProjectTitle>
  </Fragment>
);

const NewProject: React.FC<IProject> = ({ title, finishedDate, owner }) => (
  <Fragment>
    <NewProjectPartner {...owner} />

    <ProjectTitle type={HeadingType.Secondary} serif>
      {title}
    </ProjectTitle>
  </Fragment>
);

const getContentComponent = (props: IProject) => {
  if (props.finishedDate) {
    return FinishedProject;
  }

  if (props.publishedDate) {
    return ActiveProject;
  }

  return NewProject;
};

const ProjectCard: React.FC<IProject> = props => {
  let ContentComponent = getContentComponent(props);

  return (
    <CardWrapper>
      <ContentComponent {...props} />
    </CardWrapper>
  );
};

export default ProjectCard;
