import styled from "styled-components";
import { LinkButton } from "../Button";
import Paragraph from "../Paragraph";
import Heading from "../Heading";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  padding: 2.6rem;
  background: ${props => `#${props.color}`};
  color: ${props => props.theme.copy.primaryInverted};
`;

export const Month = styled(Paragraph)`
  font-size: 3rem;
`;

export const Day = styled(Paragraph)`
  font-size: 12.2rem;
  line-height: 1;
  margin-top: 0.5rem;
`;

export const Title = styled(Heading)`
  padding: 2.5rem 0 1.5rem;
  margin-top: auto;
`;

export const Description = styled(Paragraph)`
  margin-bottom: 4rem;
`;

export const SubscribeButton = styled(LinkButton)`
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }
`;
