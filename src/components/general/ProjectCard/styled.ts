import styled from "styled-components";
import { Card } from "../../../util/layout";
export { default as Paragraph } from "../Paragraph";

export const CardWrapper = styled(Card)`
  min-height: 25rem;
  display: flex;
  flex-direction: column;
`;

export const FallbackCardWrapper = styled(Card)`
  min-height: 25rem;
  opacity: 0.5;
`;
