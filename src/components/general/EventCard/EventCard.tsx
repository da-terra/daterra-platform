import React from "react";
import { parseISO, format } from "date-fns";
import { HeadingType } from "../Heading";
import { FontSize, FontWeight } from "../../../data/style/variables";
import {
  Card,
  Month,
  Day,
  Title,
  Description,
  SubscribeButton
} from "./styled";

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

  const month = format(date, "MMMM");
  const day = format(date, "dd");

  return (
    <Card className={className} color={color}>
      <Month>{month}</Month>

      <Day fontWeight={FontWeight.Black}>{day}</Day>

      <Title headingType={HeadingType.Secondary}>{title}</Title>

      <Description fontSize={FontSize.Small} italic>
        {description}
      </Description>

      {link && (
        <SubscribeButton fontWeight={FontWeight.Bold} serif>
          {link.children}
        </SubscribeButton>
      )}
    </Card>
  );
};

export default EventCard;
