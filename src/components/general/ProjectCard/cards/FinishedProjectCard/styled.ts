import styled from "styled-components";
import Partner from "../../../Partner";
import Paragraph from "../../../Paragraph";
import Heading from "../../../Heading";

export const ProjectTitle = styled(Heading)`
  margin: 0;
`;

export const ProjectPartner = styled(Partner)`
  margin-top: auto;
`;

export const Time = styled(Paragraph)`
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 2rem

  &::first-letter {
    text-transform: uppercase;
  }
`;
