import styled from "styled-components";
import BaseEventCard from "../../general/EventCard";
import { LinkButton } from "../../general/Button";
import { Breakpoints } from "../../../data/style/variables";

const h1500MarginSize = 4;
const h1000MarginSize = 2;

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventsList = styled.div`
  display: flex;
  margin: -${h1500MarginSize}rem;

  @media (max-width: ${Breakpoints.H1000}) {
    margin: -${h1000MarginSize}rem;
  }

  @media (max-width: ${Breakpoints.H750}) {
    display: block;
  }
`;

export const EventCard = styled(BaseEventCard)`
  margin: ${h1500MarginSize}rem;
  max-width: 45rem;

  @media (max-width: ${Breakpoints.H1000}) {
    margin: ${h1000MarginSize}rem;
  }

  @media (max-width: ${Breakpoints.H750}) {
    max-width: none;
  }
`;

export const CtaLink = styled(LinkButton)`
  margin-left: auto;
  margin-top: 6.4rem;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: ${Breakpoints.H500}) {
    margin-top: 2.4rem;
  }
`;
