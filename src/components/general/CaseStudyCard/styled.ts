import styled from "styled-components";
import { Card } from "../../../util/layout";
import Paragraph from "../Paragraph";
import Heading from "../Heading";

export { default as Partner } from "../Partner";
export { default as Collaborator } from "../Collaborator";

/**
 * Card element
 */
export const CaseStudyCard = styled(Card)`
  height: 35rem;
  display: flex;
  flex-direction: column;
`;

/**
 * Title element
 */
export const Title = styled(Heading)`
  margin: 0 0 1rem 0;
`;

export const TitleWrapper = styled.div`
  margin: 0 0 auto 0;
`;

/**
 * PublishedAt element
 */
type PublishedAtProps = {
  time: string;
};

export const PublishedAt = styled(Paragraph)<PublishedAtProps>`
  margin: 0;
`;
