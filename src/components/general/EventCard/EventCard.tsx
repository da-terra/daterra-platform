import React from "react";
import { parseISO, format } from "date-fns";
import { nl } from "date-fns/locale";
import { HeadingType } from "../Heading";
import { FontSize, FontWeight } from "../../../data/style/variables";
import { Card, Month, Day, Title, Description, CtaButton } from "./styled";

type EventCardProps = {
  className?: string;
  color: string;
  startDate: string;
  title: string;
  description: string;
  link?: ILink;
};

const EventCard: React.FC<EventCardProps> = ({
  className,
  color,
  startDate,
  title,
  description,
  link
}) => {
  const date = parseISO(startDate);

  const month = format(date, "MMMM", { locale: nl });
  const day = format(date, "dd", { locale: nl });

  return (
    <Card className={className} color={color}>
      <Month>{month}</Month>

      <Day fontWeight={FontWeight.Black}>{day}</Day>

      <Title headingType={HeadingType.Secondary}>{title}</Title>

      <Description fontSize={FontSize.Small} italic>
        {description}
      </Description>

      {link && (
        <CtaButton {...link} fontWeight={FontWeight.Bold} serif>
          {link.children}
        </CtaButton>
      )}
    </Card>
  );
};

export default EventCard;
