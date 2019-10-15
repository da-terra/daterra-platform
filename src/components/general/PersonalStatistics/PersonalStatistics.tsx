import React, { useRef } from "react";
import { HeadingType } from "../Heading";
import {
  CarouselButton,
  CarouselControls,
  CarouselContainer,
  Slide,
  Icon,
  WrapperCard,
  Greeting,
  HorizontalLine,
  StatisticsParagraph,
  CarouselTitle,
  FinishedProjectsCarousel,
  FinishedProject
} from "./styled";

//
import { projectMock } from "../../../pages/Dashboard/mockData";
const projects = [
  projectMock,
  projectMock,
  projectMock,
  projectMock,
  projectMock
];

type PersonalStatisticsProps = {};

const PersonalStatistics: React.FC<PersonalStatisticsProps> = () => {
  const forwardButton = useRef(null);
  const backButton = useRef(null);

  return (
    <WrapperCard inverted>
      <Greeting type={HeadingType.Secondary}>Hey Matthias</Greeting>

      <HorizontalLine />

      <StatisticsParagraph>
        Je score is 622 en je hebt 3 projecten afgerond. Daarmee heb je €1250.00
        euro verdient.
      </StatisticsParagraph>

      <CarouselTitle type={HeadingType.Quaternary}>
        Afgeronde projecten
      </CarouselTitle>

      <CarouselContainer>
        <CarouselControls>
          <CarouselButton ref={backButton}>
            <Icon.ArrowBack />
          </CarouselButton>

          <CarouselButton ref={forwardButton}>
            <Icon.ArrowForward />
          </CarouselButton>
        </CarouselControls>

        <FinishedProjectsCarousel
          forwardButton={forwardButton}
          backButton={backButton}
        >
          {projects.map((project, index) => (
            <Slide key={index}>
              <FinishedProject {...project}>Slide {index}</FinishedProject>
            </Slide>
          ))}
        </FinishedProjectsCarousel>
      </CarouselContainer>
    </WrapperCard>
  );
};

export default PersonalStatistics;
