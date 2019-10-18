import styled from "styled-components";
import Heading from "../Heading";
import { LinkButton } from "../Button";

export { default as ProjectCard } from "../ProjectCard";

export const ProjectCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 4rem;
  }
`;

export const ProjectCarouselHeading = styled(Heading)`
  color: ${props => props.theme.copy.secondaryAccent};
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
`;
