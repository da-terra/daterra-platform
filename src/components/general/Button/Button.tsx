import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FontFamily,
  ParagraphSize,
  FontWeight
} from "../../../data/style/variables";
import Easings from "../../../data/style/easings";
import RoutePath from "../../../data/RoutePath";

type ButtonProps = {
  children: JSX.Element | string;
  to?: RoutePath;
  href?: string;
  target?: "_blank" | "_self";
  title?: string;
  ref?: any;
  paragraphType?: "submit" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonElement = styled.button`
  background: none;
  border: none;
  display: inline;
  font-size: ${ParagraphSize.NORMAL}rem;
  padding: 0;
  text-align: left;
  color: ${props => props.theme.copy.primary};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ${Easings.easeOutExpo};

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ children, ...props }, ref: any) => {
    let element: any;
    const attributes = { ...props };

    if (props.to) {
      element = Link;
    } else if (props.href) {
      element = "a";
    } else {
      element = "button";

      if (props.paragraphType == null) {
        attributes.paragraphType = "button";
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
 * Extend default button with more styling for more button variants
 */
export const SolidButton = styled(Button)`
  display: inline-block;
  padding: 0 6rem;
  font-size: 1.6rem;
  min-height: 6rem;
  line-height: 5rem;
  text-align: center;
  border-radius: 100vw;
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-weight: ${FontWeight.BOLD};
  background: ${props => props.theme.button.solid.backgroundColor}
  color: ${props => props.theme.button.solid.copyColor}

  &:hover {
    background: ${props => props.theme.button.solid.hoverBackgroundColor}
    color: ${props => props.theme.button.solid.hoverCopyColor}
  }
`;

export const LinkButton = styled(Button)`
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-size: 1.4rem;
  text-decoration: underline;
  color: ${props => props.theme.button.link.copyColor}

  &:hover {
    text-decoration: none;
  }
`;
