import React from "react";
import { HeadingType } from "../Heading";
import { FontSize } from "../../../data/style/variables";
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
  link: ILink;
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

    <ProjectCarouselLinkButton href={link.href} fontSize={FontSize.Small} serif>
      {link.children}
    </ProjectCarouselLinkButton>
  </ProjectCarouselWrapper>
);

export default ProjectCarousel;
