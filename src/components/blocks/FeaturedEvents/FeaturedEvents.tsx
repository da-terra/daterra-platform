import React from "react";
import { HeadingType } from "../../general/Heading";
import { FontWeight } from "../../../data/style/variables";
import {
  TagWrapper,
  Heading,
  EventsWrapper,
  EventsList,
  EventCard,
  CtaLink
} from "./styled";

type Event = {
  uuid: string;
  color: string;
  startDate: string;
  title: string;
  description: string;
};

type FeaturedArticlesProps = {
  title: string;
  tag: React.ReactNode;
  events: Event[];

  link: ILink;
};

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  title,
  tag,
  events,
  link
}) => {
  const heading = (
    <Heading headingType={HeadingType.Secondary} fontWeight={FontWeight.Black}>
      {title}
    </Heading>
  );

  return (
    <TagWrapper heading={heading} tag={tag}>
      <EventsWrapper>
        <EventsList>
          {events.map(event => (
            <EventCard {...event} key={event.uuid} />
          ))}
        </EventsList>

        {link && (
          <CtaLink {...link} serif>
            {link.children}
          </CtaLink>
        )}
      </EventsWrapper>
    </TagWrapper>
  );
};

export default FeaturedArticles;
