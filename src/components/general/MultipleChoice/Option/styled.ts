import styled from "styled-components";
import Paragraph from "../../Paragraph";
import { IconButton } from "../../Button";

export { default as Icon } from "../../Icon";
export { default as Line } from "../../Line";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 1.6rem 2.4rem;
  background: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.card.shadow};
  border-radius: ${props => props.theme.card.borderRadius}px;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Label = styled(Paragraph)`
  margin-bottom: 2rem;
`;

export const InfoWrapper = styled(Paragraph)<{ isVisible: boolean }>`
  display: ${props => (props.isVisible ? "block" : "none")};
  margin: 0 0 1.6rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const OptionButton = styled(IconButton)`
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
