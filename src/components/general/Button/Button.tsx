import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
    { children, fontSize, fontWeight, fontColor, serif, inverted, ...props },
    ref: any
  ) => {
    let element: any;
    const attributes: any = { ...props };

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
  muted?: boolean;
};

/**
 * Extend default button with more styling for button variants
 */
export const SolidButton = styled(Button)<SolidButtonProps>`
  display: inline-block;
  padding: 2rem 2.5rem
  font-size: 1.8rem;
  text-align: center;
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  outline: none;

  ${props =>
    props.inverted
      ? `
    background: ${props.theme.button.solidInverted.backgroundColor}
    color: ${props.theme.button.solidInverted.copyColor}
    border-radius: ${props.theme.button.solidInverted.radius}
    box-shadow: ${props.theme.button.solidInverted.shadow}
    `
      : `
    background: ${props.theme.button.solid.backgroundColor}
    color: ${props.theme.button.solid.copyColor}
    border-radius: ${props.theme.button.solid.radius}
    box-shadow: ${props.theme.button.solid.shadow}
    `}

  ${props =>
    props.muted &&
    `
    opacity: .65;
  `}

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
