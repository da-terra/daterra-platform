import styled from "styled-components";
import Button from "../../general/Button";
import Heading from "../../general/Heading";
import Paragraph from "../../general/Paragraph";
import Carousel from "../../general/Carousel";

export const Container = styled.div`
  position: relative;
  margin-bottom: 7.5rem;
`;

export const Background = styled.div`
  background: ${props => props.theme.background.accent};
  width: calc(50vw - 10rem);
  height: calc(100% + 15rem);
  right: calc(50% + 10rem);
  position: absolute;
  top: -7.5rem;
  border-top-right-radius: ${props => props.theme.card.borderRadius}px;
  border-bottom-right-radius: ${props => props.theme.card.borderRadius}px;
  box-shadow: rgba(0, 0, 0, 0.3) 3px -3px 25px 2px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 4rem 2.5rem;
`;

export const CaseStudiesHeading = styled(Heading)`
  color: ${props => props.theme.copy.primaryInverted};
  margin: 0;
  padding: 7rem 0;
`;

export const ContentRow = styled.div`
  display: flex;
`;

export const CaseStudiesParagraph = styled(Paragraph)`
  max-width: 25rem;
  flex: 1 0 auto;
  margin: auto 10rem 0 0;
  color: ${props => props.theme.copy.primaryInverted};
`;

export const CarouselButton = styled(Button)`
  display: flex !important;
  align-items: center;
  color: ${props => props.theme.copy.primaryInverted} !important;
  cursor: pointer;
  z-index: 1;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

// @ts-ignore
export const CaseStudyCarousel = styled(Carousel)`
  overflow: hidden;
  flex: 1 0 0;
  margin: -5rem -2.5rem;
`;

export const Slide = styled.div`
  flex: 1 0 auto;
  padding: 5rem 2.5rem;
  width: 100%;

  @media (min-width: 1200px) {
    width: calc(100% / 2);
  }
`;
