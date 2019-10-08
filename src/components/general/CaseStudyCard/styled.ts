import styled from "styled-components";
import Paragraph from "../Paragraph";
import Heading from "../Heading";

export { default as Partner } from "../Partner";
export { default as Collaborator } from "../Collaborator";

/**
 * Card element
 */
export const Card = styled.div`
  height: 35rem;
  border-radius: ${props => props.theme.card.borderRadius}px;
  background: ${props => props.theme.color.invertForeground};
  box-shadow: rgba(3, 54, 62, 0.1) 3px 3px 10px 0;
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
