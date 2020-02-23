import { createPath, IEvent } from "@data-science-platform/shared";
import React from "react";
import RoutePath from "../../../data/RoutePath";
import { FontSize, FontWeight } from "../../../data/style/variables";
import BigDate from "../BigDate";
import { HeadingType } from "../Heading";
import { Card, CtaButton, Description, Title } from "./styled";

type EventCardProps = IEvent & {
  className?: string;
};

const EventCard: React.FC<EventCardProps> = ({
  className,
  color,
  title,
  richText,
  slug,
  startDate
}) => {
  return (
    <Card className={className} color={color}>
      <BigDate date={startDate} />

      <Title headingType={HeadingType.Secondary}>{title}</Title>

      <Description fontSize={FontSize.Small} italic>
        {richText}
      </Description>

      <CtaButton
        href={createPath(RoutePath.EventDetail, { slug })}
        fontWeight={FontWeight.Bold}
        serif
      >
        Bekijken
      </CtaButton>
    </Card>
  );
};

export default EventCard;
