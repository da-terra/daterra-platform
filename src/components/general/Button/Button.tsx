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

  //
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

/**
 * Extend default button with more styling for button variants
 */
export const SolidButton = styled(Button)`
  display: inline-block;
  padding: 0 6rem;
  font-size: 1.6rem;
  min-height: 6rem;
  line-height: 5rem;
  text-align: center;
  border-radius: 100vw;
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  background: ${props => props.theme.button.solid.backgroundColor}
  color: ${props => props.theme.button.solid.copyColor}

  &:hover {
    background: ${props => props.theme.button.solid.hoverBackgroundColor}
    color: ${props => props.theme.button.solid.hoverCopyColor}
  }
`;

export const LinkButton = styled(Button)`
  ${paragraphCss}

  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
