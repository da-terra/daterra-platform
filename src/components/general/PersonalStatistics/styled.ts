import styled from "styled-components";
import Easings from "../../../data/style/easings";
import Card from "../../util/Card";
import Button from "../Button";
import Carousel from "../Carousel";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import ProjectCard from "../ProjectCard";

export const WrapperCard = styled(Card)`
  width: 100%;
  padding: 2.5rem 2rem 2rem;
`;

export const Greeting = styled(Heading)`
  margin: 0;
  line-height: 1;
`;

export const HorizontalLine = styled.hr`
  border-color: rgba(255, 255, 255, 0.15);
  margin: 2rem 0;
`;

export const StatisticsParagraph = styled(Paragraph)`
  margin-right: 2rem;
  margin-bottom: 5rem;
`;

export const CarouselTitle = styled(Heading)`
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

// @ts-ignore
export const FinishedProjectsCarousel = styled(Carousel)`
  margin: -5rem -2rem;
`;

export const Slide = styled.div`
  width: calc(100% + 6rem);
  flex: 1 0 auto;
  padding: 5rem 2rem;
  transition: all 0.5s ${Easings.easeOutExpo};
  opacity: 0;
  pointer-events: none;

  &[data-is-active="true"] {
    opacity: 1;
    pointer-events: all;
  }
`;

export const FinishedProject = styled(ProjectCard)`
  height: 200px;
`;

export const CarouselControls = styled.div`
  z-index: 1;
  margin-top: 2rem;
  margin-left: auto;
  display: flex;
`;

export const CarouselButton = styled(Button)`
  color: ${props => props.theme.copy.primaryInverted};
  display: flex;

  &:not(last-child) {
    margin-left: 0.5rem;
  }
`;
