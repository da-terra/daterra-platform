import styled from "styled-components";
import Paragraph from "../../../Paragraph";
import Heading from "../../../Heading";
export { default as Paragraph } from "../../../Paragraph";
export { default as ProjectPartner } from "../../../Partner";

export const ProjectTitle = styled(Heading)`
  margin: 0;
`;

export const Times = styled.div`
  display: inline-block;
  margin-top: 1rem;

  &::first-letter {
    text-transform: uppercase;
  }

  ${Paragraph}:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
