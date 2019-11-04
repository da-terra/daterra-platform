import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RoutePath from "../../../data/RoutePath";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import { paragraphCss } from "../Paragraph";
import { ButtonElement } from "./styled";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  to?: RoutePath;
  href?: string;
  target?: "_blank" | "_self";
  title?: string;
  ref?: any;
  type?: "submit" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  // Button can be styled like a paragraph
  paragraphSize?: any;
  paragraphType?: any;
  paragraphWeight?: any;
  paragraphColor?: any;
  serif?: any;
};

const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      children,
      paragraphSize,
      paragraphType,
      paragraphWeight,
      paragraphColor,
      serif,
      ...props
    },
    ref: any
  ) => {
    let element: any;
    const attributes = { ...props };

    if (props.to) {
      element = Link;
    } else if (props.href) {
      element = "a";
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
  padding: 1.8rem 3rem
  font-size: 1.6rem;
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
    `
      : `
    background: ${props.theme.button.solid.backgroundColor}
    color: ${props.theme.button.solid.copyColor}
    border-radius: ${props.theme.button.solid.radius}
    `}

  ${props =>
    props.muted &&
    `
    opacity: .65;
  `}

  &:hover {
    opacity: 1;
  }
`;

export const LinkButton = styled(Button)`
  ${paragraphCss}
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
