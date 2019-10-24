import styled from "styled-components";
import { Card } from "../../../util/layout";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import BaseCollaborator from "../Collaborator";

export { default as Owner } from "../User";

/**
 * Card element
 */
export const CaseStudyCard = styled(Card)`
  height: 35rem;
  display: flex;
  flex-direction: column;
`;

export const Collaborator = styled(BaseCollaborator)`
  margin-bottom: 1.5rem;
`

/**
 * Title element
 */
export const Title = styled(Heading)`
  margin: 0;
`;

export const Description = styled(Paragraph)`
  margin-top: 1rem;
`

export const TitleWrapper = styled.div`
  margin-bottom: auto;
`;

/**
 * PublishedAt element
 */
type PublishedAtProps = {
  time: string;
};

export const PublishedAt = styled(Paragraph)<PublishedAtProps>`
  margin: 0 0 1rem 0;
  display: block;
`;
