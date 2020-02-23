import { IProject } from "@data-science-platform/shared";
import React from "react";
import ActiveProjectCard from "./cards/ActiveProjectCard";
import FallbackCard from "./cards/FallbackProjectCard";
import FinishedProjectCard from "./cards/FinishedProjectCard";
import NewProjectCard from "./cards/NewProjectCard";
import { CardWrapper } from "./styled";

const getContentComponent = (
  props: Partial<IProject>
): React.FC<IProject> | undefined => {
  if (props?.duration?.endDate) {
    // @ts-ignore
    return FinishedProjectCard;
  }

  if (props?.duration?.startDate) {
    // @ts-ignore
    return ActiveProjectCard;
  }

  if (props.shortName) {
    // @ts-ignore
    return NewProjectCard;
  }
};

type ProjectCardProps = { className?: string } & Partial<IProject>;

const ProjectCard: React.FC<ProjectCardProps> = ({ className, ...props }) => {
  let ContentComponent = getContentComponent(props);

  if (ContentComponent == null) {
    return <FallbackCard />;
  }

  return (
    <CardWrapper>
      <ContentComponent {...(props as IProject)} />
    </CardWrapper>
  );
};

export default ProjectCard;
