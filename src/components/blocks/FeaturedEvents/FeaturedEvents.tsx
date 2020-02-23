import { IEvent, ILink } from "@data-science-platform/shared";
import React from "react";
import { FontWeight } from "../../../data/style/variables";
import Heading, { HeadingType } from "../../general/Heading";
import TagWrapper from "../../general/TagWrapper";
import { CtaLink, EventCard, EventsList, EventsWrapper } from "./styled";

type FeaturedArticlesProps = {
  title: string;
  body: string;
  tag: React.ReactNode;
  events: IEvent[];
  link?: ILink;
};

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  title,
  body,
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
    <TagWrapper heading={heading} description={body} tag={tag}>
      <EventsWrapper>
        <EventsList>
          {events?.map(event => (
            <EventCard {...event} key={event.slug} />
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
