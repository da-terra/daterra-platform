import styled, { css } from "styled-components";
import { FontWeight, FontSize } from "../../../../data/style/variables";
import Button, { ButtonProps } from "../Button";
import { paragraphCss } from "../../Paragraph";

type SolidButtonProps = ButtonProps & {
  inverted?: boolean;
  muted?: boolean;
};

const normalCss = css`
  background: ${props => props.theme.button.solid.background}
  color: ${props => props.theme.button.solid.color}
  box-shadow: ${props => props.theme.button.solid.shadow}

  &:hover {
    background: ${props => props.theme.button.solid.hoverBackground}
    color: ${props => props.theme.button.solid.hoverColor}
  }
`;

const invertedCss = css`
  background: ${props => props.theme.button.invertedSolid.background}
  color: ${props => props.theme.button.invertedSolid.color}
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
  ${paragraphCss};

  display: inline-block;
  padding: 2rem 2.5rem;
  border-radius: 1rem;
  text-align: center;
  outline: none;

  ${props => (props.inverted ? invertedCss : normalCss)}
  ${props => (props.muted ? mutedCss : "")}

  &:hover {
    opacity: 1;
  }
`;

SolidButton.defaultProps = {
  fontSize: FontSize.Normal,
  fontWeight: FontWeight.Bold,
  serif: true
};

export default SolidButton;
