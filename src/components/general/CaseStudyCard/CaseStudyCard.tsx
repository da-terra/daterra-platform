import React from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  parseISO
} from "date-fns";
import ICaseStudy from "../../../data/type/ICaseStudy";
import { HeadingType } from "../Heading";
import { ParagraphType } from "../Paragraph";
import {
  Title,
  TitleWrapper,
  CaseStudyCard as Card,
  PublishedAt,
  Partner,
  Collaborator
} from "./styled";

// @ts-ignore
const relativeTimeFormat = new Intl.RelativeTimeFormat("nl");

enum TimeFormatUnit {
  Days = "days",
  Months = "months",
  Years = "years"
}

const CaseStudyCard: React.FC<ICaseStudy> = ({
  collaborators,
  title,
  partner,
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
      <Collaborator {...collaborators[0]} />

      <TitleWrapper>
        <Title type={HeadingType.Secondary} serif>
          {title}
        </Title>

        <PublishedAt as="time" type={ParagraphType.Muted} time={publishedDate}>
          {relativeTimeFormat.format(value, unit)}
        </PublishedAt>
      </TitleWrapper>

      <Partner {...partner} />
    </Card>
  );
};

export default CaseStudyCard;
