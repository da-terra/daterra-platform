import { IProject, IUser } from "@data-science-platform/shared";
import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { FontSize } from "../../../data/style/variables";
import { HeadingType } from "../Heading";
import Icon from "../Icon";
import {
  CarouselButton,
  CarouselContainer,
  CarouselControls,
  CarouselTitle,
  FinishedProject,
  FinishedProjectsCarousel,
  Greeting,
  HorizontalLine,
  Slide,
  StatisticsParagraph,
  WrapperCard
} from "./styled";

type PersonalStatisticsProps = IUser & {
  finishedProjects: IProject[];
};

const MIN_PROJECTS = 1;

const PersonalStatistics: React.FC<PersonalStatisticsProps> = ({
  name: { givenName },
  finishedProjects
}) => {
  const forwardButton = useRef(null);
  const backButton = useRef(null);

  const projects = new Array<Partial<IProject>>(
    Math.max(MIN_PROJECTS - finishedProjects.length, 0)
  )
    .fill({})
    .concat(finishedProjects);

  return (
    <WrapperCard inverted>
      <Greeting headingType={HeadingType.Secondary}>
        <FormattedMessage
          id="PersonalStatistics_title"
          values={{
            givenName
          }}
        />
      </Greeting>

      <HorizontalLine />

      <StatisticsParagraph fontSize={FontSize.Large}>
        <FormattedMessage
          id="PersonalStatistics_message"
          values={{
            count: finishedProjects.length
          }}
        />
      </StatisticsParagraph>

      <CarouselTitle headingType={HeadingType.Quaternary}>
        <FormattedMessage id="PersonalStatistics_carouselTitle" />
      </CarouselTitle>

      <CarouselContainer>
        {finishedProjects.length > 1 && (
          <CarouselControls>
            <CarouselButton ref={backButton}>
              <Icon.ArrowBack />
            </CarouselButton>

            <CarouselButton ref={forwardButton}>
              <Icon.ArrowForward />
            </CarouselButton>
          </CarouselControls>
        )}

        <FinishedProjectsCarousel
          forwardButton={forwardButton}
          backButton={backButton}
        >
          {projects.map((project, index) => (
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
