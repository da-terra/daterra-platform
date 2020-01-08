import React from "react";
import { IProject } from "@data-science-platform/shared";
import FinishedProjectCard from "./cards/FinishedProjectCard";
import ActiveProjectCard from "./cards/ActiveProjectCard";
import NewProjectCard from "./cards/NewProjectCard";
import { CardWrapper, FallbackCardWrapper } from "./styled";

const getContentComponent = (props: IProject) => {
  if (props.duration?.endDate) {
    return FinishedProjectCard;
  }

  if (props.duration?.startDate) {
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
