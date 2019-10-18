import React from "react";
import IProject from "../../../types/IProject";
import RoutePath from "../../../data/RoutePath";
import { HeadingType } from "../Heading";
import {
  ProjectCarouselWrapper,
  ProjectCarouselHeading,
  ProjectCarouselCards,
  ProjectCarouselCardWrapper,
  ProjectCard,
  ProjectCarouselLinkButton
} from "./styled";

type ProjectCarouselProps = {
  className?: string;
  link: {
    to: RoutePath;
    children: string;
  };
  projects: IProject[];
  title: string;
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  className,
  link,
  projects,
  title
}) => (
  <ProjectCarouselWrapper className={className}>
    <ProjectCarouselHeading type={HeadingType.Tertiary}>
      {title}
    </ProjectCarouselHeading>

    <ProjectCarouselCards>
      {projects.map(project => (
        <ProjectCarouselCardWrapper key={project.uuid}>
          <ProjectCard {...project} />
        </ProjectCarouselCardWrapper>
      ))}
    </ProjectCarouselCards>

    <ProjectCarouselLinkButton to={link.to}>
      {link.children}
    </ProjectCarouselLinkButton>
  </ProjectCarouselWrapper>
);

export default ProjectCarousel;
