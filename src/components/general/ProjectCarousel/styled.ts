import styled from "styled-components";
import { LinkButton } from "../Button";
import Heading from "../Heading";
import ProjectCard from "../ProjectCard";

export const StyledProjectCard = styled(ProjectCard)`
  height: 100%;
`;

export const ProjectCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 4rem;
  }
`;

export const ProjectCarouselHeading = styled(Heading)`
  color: ${props => props.theme.copy.accent};
  margin-bottom: 2rem;
`;

export const ProjectCarouselCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -2rem;
`;

export const ProjectCarouselCardWrapper = styled.div`
  width: 50%;
  padding: 1rem 2rem;
`;

export const ProjectCarouselLinkButton = styled(LinkButton)`
  display: inline-block;
  margin-top: 2rem;
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }
`;
