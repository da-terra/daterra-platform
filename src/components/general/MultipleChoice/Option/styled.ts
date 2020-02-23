import styled from "styled-components";
import Paragraph from "../../Paragraph";
import { IconButton } from "../../Button";

export const OptionWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const InfoCard = styled.div`
  width: 100%;
  position: relative;
  padding: 1.5rem 2.5rem;
  background: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.card.shadow};
  border-radius: 1rem;
`;

export const InfoWrapper = styled(Paragraph)<{ visible: boolean }>`
  display: ${props => (props.visible ? "block" : "none")};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 1.5rem;
`;

export const OptionButton = styled(IconButton)`
  margin-left: auto;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;
