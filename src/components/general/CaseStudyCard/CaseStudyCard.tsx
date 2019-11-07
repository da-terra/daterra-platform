import React from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  parseISO
} from "date-fns";
import ICaseStudy from "../../../types/ICaseStudy";
import { HeadingType } from "../Heading";
import { FontColor, FontSize } from "../../../data/style/variables";
import {
  Title,
  Description,
  TitleWrapper,
  CaseStudyCard as Card,
  PublishedAt,
  Owner
} from "./styled";

// @ts-ignore
const relativeTimeFormat = new Intl.RelativeTimeFormat("nl");

enum TimeFormatUnit {
  Days = "days",
  Months = "months",
  Years = "years"
}

const CaseStudyCard: React.FC<ICaseStudy> = ({
  title,
  summary,
  owner,
  publishedDate
}) => {
  const date = parseISO(publishedDate);

  const years = differenceInYears(date, new Date());
  const months = differenceInMonths(date, new Date());
  const days = differenceInDays(date, new Date());

  const value = years || months || days;

  const unit = years
    ? TimeFormatUnit.Years
    : months
    ? TimeFormatUnit.Months
    : TimeFormatUnit.Days;

  return (
    <Card>
      <TitleWrapper>
        <Title headingType={HeadingType.Secondary} serif>
          {title}
        </Title>

        <PublishedAt
          as="time"
          fontColor={FontColor.Muted}
          fontSize={FontSize.Small}
          time={publishedDate}
        >
          {relativeTimeFormat.format(value, unit)}
        </PublishedAt>

        <Description
          fontColor={FontColor.Muted}
          fontSize={FontSize.Small}
          italic
        >
          {summary}
        </Description>
      </TitleWrapper>

      <Owner prefix="Geschreven door:" {...owner} />
    </Card>
  );
};

export default CaseStudyCard;
