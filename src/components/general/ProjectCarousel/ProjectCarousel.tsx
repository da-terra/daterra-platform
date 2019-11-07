import React from "react";
import IProject from "../../../types/IProject";
import RoutePath from "../../../data/RoutePath";
import { HeadingType } from "../Heading";
import { FontColor, FontSize } from "../../../data/style/variables";
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
    href: RoutePath;
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
    <ProjectCarouselHeading headingType={HeadingType.Tertiary}>
      {title}
    </ProjectCarouselHeading>

    <ProjectCarouselCards>
      {projects.map(project => (
        <ProjectCarouselCardWrapper key={project.uuid}>
          <ProjectCard {...project} />
        </ProjectCarouselCardWrapper>
      ))}
    </ProjectCarouselCards>

    <ProjectCarouselLinkButton
      href={link.href}
      fontSize={FontSize.Small}
      fontColor={FontColor.PrimaryAccent}
      serif
    >
      {link.children}
    </ProjectCarouselLinkButton>
  </ProjectCarouselWrapper>
);

export default ProjectCarousel;
