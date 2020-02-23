import React from "react";
import { ILink, IProject } from "@data-science-platform/shared";
import { HeadingType } from "../Heading";
import { FontSize } from "../../../data/style/variables";
import {
  ProjectCarouselWrapper,
  ProjectCarouselHeading,
  ProjectCarouselCards,
  ProjectCarouselCardWrapper,
  StyledProjectCard,
  ProjectCarouselLinkButton
} from "./styled";

type ProjectCarouselProps = {
  className?: string;
  link: ILink;
  projects: Partial<IProject>[];
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
      {projects.map((project, index) => (
        <ProjectCarouselCardWrapper key={project.shortName || index}>
          <StyledProjectCard {...project} />
        </ProjectCarouselCardWrapper>
      ))}
    </ProjectCarouselCards>

    <ProjectCarouselLinkButton href={link.href} fontSize={FontSize.Small} serif>
      {link.children}
    </ProjectCarouselLinkButton>
  </ProjectCarouselWrapper>
);

export default ProjectCarousel;
