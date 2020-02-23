import styled from "styled-components";
import Owner from "../../../User";
import Paragraph from "../../../Paragraph";
import Heading from "../../../Heading";

export const ProjectTitle = styled(Heading)`
  margin: 0;
`;

export const ProjectOwner = styled(Owner)`
  margin-top: auto;
`;

export const Time = styled(Paragraph)`
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
