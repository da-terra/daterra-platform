import React, { useRef } from "react";
import styled from "styled-components";
import IBlock from "../../../data/type/IBlock";
import ICaseStudy from "../../../data/type/ICaseStudy";
import Button from "../../general/Button";
import Icon from "../../general/Icon";
import Heading from "../../general/Heading";
import Paragraph from "../../general/Paragraph";
import Carousel from "../../general/Carousel";
import { Wrapper } from "../../../util/layout";
import CaseStudyCard from "./components/CaseStudyCard";

const Container = styled.div`
  position: relative;
  margin-bottom: 7.5rem;
`;

const Background = styled.div`
  background: ${props => props.theme.color.darkAccent};
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

const CaseStudiesHeading = styled(Heading)`
  color: ${props => props.theme.color.invertForeground};
  margin: 0;
  padding: 7rem 0;
`;

const ContentRow = styled.div`
  display: flex;
`;

const CaseStudiesParagraph = styled(Paragraph)`
  max-width: 25rem;
  flex: 1 0 auto;
  margin: auto 10rem 0 0;
  color: ${props => props.theme.color.invertForeground};
`;

const CarouselButton = styled(Button)`
  display: flex !important;
  align-items: center;
  color: ${props => props.theme.color.invertForeground} !important;
  cursor: pointer;
  z-index: 1;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

// @ts-ignore
const CaseStudyCarousel = styled(Carousel)`
  overflow: hidden;
  flex: 1 0 0;
  margin: -5rem;
`;

const Slide = styled.div`
  flex: 1 0 auto;
  padding: 5rem;
  width: 100%;

  @media (min-width: 600px) {
    width: calc(100% / 2);
  }

  @media (min-width: 1200px) {
    width: calc(100% / 3);
  }
`;

type CaseStudiesProps = IBlock & {
  caseStudies: ICaseStudy[];
};

const CaseStudies: React.FC<CaseStudiesProps> = ({
  className,
  caseStudies
}) => {
  const forwardButton = useRef(null);
  const backButton = useRef(null);

  return (
    <Container className={className}>
      <Background>
        <CarouselButton ref={backButton}>
          <Icon.ArrowBack />
        </CarouselButton>

        <CarouselButton ref={forwardButton}>
          <Icon.ArrowForward />
        </CarouselButton>
      </Background>

      <Wrapper>
        <CaseStudiesHeading italic>Case Studies</CaseStudiesHeading>

        <ContentRow>
          <CaseStudiesParagraph>
            However, we can also agree that an basic component of one of the
            grand strategy has proved to be reliable in the scope of The Data of
            New Impact
          </CaseStudiesParagraph>

          <CaseStudyCarousel
            forwardButton={forwardButton}
            backButton={backButton}
          >
            {caseStudies.map(card => (
              <Slide key={card.uuid}>
                <CaseStudyCard {...card} />
              </Slide>
            ))}
          </CaseStudyCarousel>
        </ContentRow>
      </Wrapper>
    </Container>
  );
};

export default CaseStudies;
