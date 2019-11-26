import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  FontFamily,
  FontWeight,
  Breakpoints
} from "../../../data/style/variables";
import { paragraphCss } from "../Paragraph";
import { ButtonElement } from "./styled";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self";
  title?: string;
  ref?: any;
  name?: string;
  value?: any;
  type?: "submit" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  // Button can be styled like a paragraph
  fontSize?: any;
  fontWeight?: any;
  fontColor?: any;
  serif?: boolean;
  inverted?: boolean;
};

const externalLinkPattern = /^https?:\/\//i;

const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    { children, onClick, fontSize, fontWeight, fontColor, serif, inverted, ...props },
    ref: any
  ) => {
    let element: any;
    const attributes: any = { onClick, ...props };

    const isExternalLink = props.href && externalLinkPattern.test(props.href);
    const isInternalLink = !isExternalLink && props.href;

    if (isExternalLink) {
      element = "a";

      delete attributes.to;
    } else if (isInternalLink) {
      element = Link;

      delete attributes.href;
      attributes.to = props.href;
    } else {
      element = "button";

      if (props.type == null) {
        attributes.type = "button";
      }
    }

    useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      // Remove focus after click
      event.currentTarget.blur();

      // Propagate click event to onClick prop
      onClick && onClick(event)
    }, [onClick])

    return (
      <ButtonElement {...attributes} as={element} ref={ref}>
        {children}
      </ButtonElement>
    );
  }
);

export default Button;

type SolidButtonProps = ButtonProps & {
  inverted?: boolean;
  focussed?: boolean;
  muted?: boolean;
};

const normalCss = css`
  border-color: ${props => props.theme.button.solid.backgroundColor};
  background: ${props => props.theme.button.solid.backgroundColor}
  color: ${props => props.theme.button.solid.copyColor}
  border-radius: ${props => props.theme.button.solid.radius}
  box-shadow: ${props => props.theme.button.solid.shadow}
`;

const invertedCss = css`
  border-color: ${props => props.theme.button.solidInverted.backgroundColor};
  background: ${props => props.theme.button.solidInverted.backgroundColor}
  color: ${props => props.theme.button.solidInverted.copyColor}
  border-radius: ${props => props.theme.button.solidInverted.radius}
  box-shadow: ${props => props.theme.button.solidInverted.shadow}
`;

const mutedCss = css`
  opacity: 0.65;
`;

const focussedCss = css<SolidButtonProps>`
  box-sizing: border-box;
  border: 0.2rem solid;
  border-color: ${props =>
    props.inverted
      ? props.theme.button.solidInverted.copyColor
      : props.theme.button.solid.copyColor};
`;

/**
 * Extend default button with more styling for button variants
 */
export const SolidButton = styled(Button)<SolidButtonProps>`
  display: inline-block;
  padding: 1.8rem 2.3rem;
  border: 0.2rem solid;
  font-size: 1.8rem;
  text-align: center;
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  outline: none;

  ${props => (props.inverted ? invertedCss : normalCss)}
  ${props => (props.muted ? mutedCss : "")}
  ${props => (props.focussed ? focussedCss : "")}

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${Breakpoints.H500}) {
    font-size: 1.6rem
  }
`;

export const LinkButton = styled(Button)`
  ${paragraphCss}
`;
