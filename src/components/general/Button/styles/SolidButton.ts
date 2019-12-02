import styled, { css } from "styled-components";
import {
  FontFamily,
  FontWeight,
  Breakpoints
} from "../../../../data/style/variables";
import Button, { ButtonProps } from "../Button";

type SolidButtonProps = ButtonProps & {
  inverted?: boolean;
  muted?: boolean;
};

const normalCss = css`
  background: ${props => props.theme.button.solid.background}
  color: ${props => props.theme.button.solid.color}
  border-radius: ${props => props.theme.button.solid.radius}
  box-shadow: ${props => props.theme.button.solid.shadow}

  &:hover {
    background: ${props => props.theme.button.solid.hoverBackground}
    color: ${props => props.theme.button.solid.hoverColor}
  }
`;

const invertedCss = css`
  background: ${props => props.theme.button.invertedSolid.background}
  color: ${props => props.theme.button.invertedSolid.color}
  border-radius: ${props => props.theme.button.invertedSolid.radius}
  box-shadow: ${props => props.theme.button.invertedSolid.shadow}

  &:hover {
    background: ${props => props.theme.button.invertedSolid.hoverBackground}
    color: ${props => props.theme.button.invertedSolid.hoverColor}
  }
`;

const mutedCss = css`
  opacity: 0.65;
`;

/**
 * Extend default button with more styling for button variants
 */
export const SolidButton = styled(Button)<SolidButtonProps>`
  display: inline-block;
  padding: 2rem 2.5rem;
  font-size: 1.8rem;
  text-align: center;
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  outline: none;

  ${props => (props.inverted ? invertedCss : normalCss)}
  ${props => (props.muted ? mutedCss : "")}

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${Breakpoints.H500}) {
    font-size: 1.6rem;
  }
`;

export default SolidButton;
