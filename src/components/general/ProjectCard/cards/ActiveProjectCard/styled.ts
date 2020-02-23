import styled from "styled-components";
import Heading from "../../../Heading";
import Paragraph from "../../../Paragraph";
import Owner from "../../../User";
import TeamSummary from "../../../TeamSummary";

export const ProjectOwner = styled(Owner)`
  margin-bottom: 1rem;
`;

export const ProjectTitle = styled(Heading)`
  margin: 0;
`;

export const Times = styled.div`
  display: inline-block;
  margin-top: 1rem;
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

export const ProjectTeamSummary = styled(TeamSummary)`
  margin-top: 1.5rem;
  line-height: 1rem;
`;
