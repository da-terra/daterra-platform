import React from "react";
import styled from "styled-components";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  parseISO
} from "date-fns";
import ICaseStudy from "../../../../../data/type/ICaseStudy";
import Heading, { HeadingType } from "../../../../general/Heading";
import Paragraph from "../../../../general/Paragraph";

const Card = styled.div`
  height: 25rem;
  border-radius: ${props => props.theme.card.borderRadius}px;
  background: ${props => props.theme.color.invertForeground};
  box-shadow: rgba(3, 54, 62, 0.1) 3px 3px 10px 0;
  display: flex;
  flex-direction: column;
`;

const CollaboratorElem = styled.div`
  margin-top: 2rem;
  margin-bottom: auto;
`;

const AuthorElem = styled.div`
  margin-bottom: 2rem;
  margin-top: auto;
`;

const Collaborator: React.FC<any> = (props: any) => (
  <CollaboratorElem {...props} />
);

const Author: React.FC<any> = (props: any) => <AuthorElem {...props} />;

// @ts-ignore
const relativeTimeFormat = new Intl.RelativeTimeFormat("en", {
  numeric: "auto"
});

enum TimeFormatUnit {
  Days = "days",
  Months = "months",
  Years = "years"
}

const CaseStudyCard: React.FC<ICaseStudy> = ({
  collaborators,
  title,
  author,
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

      <Heading type={HeadingType.Secondary}>{title}</Heading>
      <Paragraph>{relativeTimeFormat.format(value, unit)}</Paragraph>

      <Author {...author} />
    </Card>
  );
};

export default CaseStudyCard;
