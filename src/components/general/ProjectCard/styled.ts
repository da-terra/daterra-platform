import styled from "styled-components";
import { Card } from "../../../util/layout";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Partner from "../Partner";

export const CardWrapper = styled(Card)`
  min-height: 25rem;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled(Heading)`
  margin: 0;
`;

export const Time = styled(Paragraph)`
  display: inline-block;
  margin-top: 1 rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

/**
 * Finished project
 */
export const FinishedProjectPartner = styled(Partner)`
  margin-top: auto;
`;

export const FinishedProjectTime = styled(Paragraph)`
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 2rem

  &::first-letter {
    text-transform: uppercase;
  }
`;

/**
 * Active project
 */
export const ActiveProjectPartner = styled(Partner)`
  margin-bottom: 1.5rem;
`;

/**
 * New project
 */
export const NewProjectPartner = styled(Partner)`
  margin-bottom: 1.5rem;
`;
