import React, { useRef } from "react";
import IBlock from "../../../types/IBlock";
import ICaseStudy from "../../../types/ICaseStudy";
import Icon from "../../general/Icon";
import Wrapper from "../../general/Wrapper";
import CaseStudyCard from "../../general/CaseStudyCard";
import {
  Container,
  Background,
  CaseStudiesHeading,
  ContentRow,
  CaseStudiesParagraph,
  CarouselButton,
  CaseStudyCarousel,
  Slide
} from "./styled";

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
