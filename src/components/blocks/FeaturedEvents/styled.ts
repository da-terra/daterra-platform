import styled from "styled-components";
import BaseEventCard from "../../general/EventCard";
import { LinkButton } from "../../general/Button";
export { default as TagWrapper } from "../../general/TagWrapper";
export { default as Heading } from "../../general/Heading";

const marginSize = 4;

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventsList = styled.div`
  display: flex;
  margin: 0 -${marginSize}rem;
`;

export const EventCard = styled(BaseEventCard)`
  margin: 0 ${marginSize}rem;
  max-width: 45rem;
`;

export const CtaLink = styled(LinkButton)`
  margin-left: auto;
  margin-top: 6.4rem;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
