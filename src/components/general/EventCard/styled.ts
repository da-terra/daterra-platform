import styled from "styled-components";
import { LinkButton } from "../Button";
import Paragraph from "../Paragraph";
import Heading from "../Heading";

export { default as BigDate } from "../BigDate";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  padding: 2.6rem;
  background: ${props => props.color};
  color: ${props => props.theme.copy.primaryInverted};
`;

export const Title = styled(Heading)`
  padding: 2.5rem 0 1.5rem;
  margin-top: auto;
`;

export const Description = styled(Paragraph)`
  margin-bottom: 4rem;
`;

export const CtaButton = styled(LinkButton)`
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }
`;
