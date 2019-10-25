import styled from "styled-components";
import Heading from "../../../Heading";
export { default as ProjectOwner } from "../../../User";
export { default as Paragraph } from "../../../Paragraph";

export const ProjectTitle = styled(Heading)`
  margin: 2rem 0 0 0;
`;

export const Times = styled.div`
  margin: 1.5rem 0 2.5rem;

  time {
    display: inline-block;
    margin-top: .2rem;
  }
`

export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
`