import React, { useRef } from "react";
import IProject from "../../../types/IProject";
import { HeadingType } from "../Heading";
import { FontSize } from "../../../data/style/variables";
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

type PersonalStatisticsProps = {
  finishedProjects: IProject[];
};

const PersonalStatistics: React.FC<PersonalStatisticsProps> = ({
  finishedProjects
}) => {
  const forwardButton = useRef(null);
  const backButton = useRef(null);

  return (
    <WrapperCard inverted>
      <Greeting headingType={HeadingType.Secondary}>Hey Matthias</Greeting>

      <HorizontalLine />

      <StatisticsParagraph fontSize={FontSize.Large}>
        Je score is 622 en je hebt 3 projecten afgerond. Daarmee heb je €1250.00
        euro verdiend.
      </StatisticsParagraph>

      <CarouselTitle headingType={HeadingType.Quaternary}>
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
          {finishedProjects.map((project, index) => (
            <Slide key={index}>
              <FinishedProject {...project} />
            </Slide>
          ))}
        </FinishedProjectsCarousel>
      </CarouselContainer>
    </WrapperCard>
  );
};

export default PersonalStatistics;
