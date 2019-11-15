import styled from "styled-components";
import Heading from "../../../Heading";
import Paragraph from "../../../Paragraph";
export { default as ProjectOwner } from "../../../User";
export { default as Paragraph } from "../../../Paragraph";

export const ProjectTitle = styled(Heading)`
  margin: 2rem 0 0 0;
`;

export const Times = styled.div`
  display: inline-block;
  margin: 1.5rem 0 2.5rem;
`;

export const TimeGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const TimeString = styled(Paragraph)`
  line-height: 1.4;
  margin: 0;
`;

export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
