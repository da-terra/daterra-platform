import styled from "styled-components";
import Heading from "../../../Heading";
import Paragraph from "../../../Paragraph";
import Owner from "../../../User";
export { default as Paragraph } from "../../../Paragraph";

export const ProjectOwner = styled(Owner)`
  margin-bottom: 1rem;
`;

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

export const Team = styled.div<any>``;
