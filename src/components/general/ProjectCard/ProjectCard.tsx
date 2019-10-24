import React from "react";
import IProject from "../../../types/IProject";
import FinishedProjectCard from "./cards/FinishedProjectCard";
import ActiveProjectCard from "./cards/ActiveProjectCard";
import NewProjectCard from "./cards/NewProjectCard";
import { CardWrapper, FallbackCardWrapper } from "./styled";

const getContentComponent = (props: IProject) => {
  if (props.finishedDate) {
    return FinishedProjectCard;
  }

  if (props.publishedDate) {
    return ActiveProjectCard;
  }

  return NewProjectCard;
};

const ProjectCard: React.FC<IProject> = props => {
  let ContentComponent = getContentComponent(props);

  return (
    <CardWrapper>
      <ContentComponent {...props} />
    </CardWrapper>
  );
};

export const ProjectCardFallback = <FallbackCardWrapper />;

export default ProjectCard;
