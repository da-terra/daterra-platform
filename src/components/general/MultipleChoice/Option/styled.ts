import styled, { css } from "styled-components";
import Icon from "../../../../components/general/Icon";
import Button from "../../Button";

export const Wrapper = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.card.background}
  box-shadow: ${props => props.theme.card.shadow}
`;

export const InfoWrapper = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? "block" : "none")};
`;

const iconButtonCss = css`
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const InfoToggleButton = styled(Button)`
  ${iconButtonCss}
`;

export const OptionSelectButton = styled(Button)`
  ${iconButtonCss}
`;

export const InfoToggleIcon = styled(Icon.ArrowForward)``;
export const SelectButtonIcon = styled(Icon.ArrowForward)``;
