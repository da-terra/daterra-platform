import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ParagraphSize } from "../../../data/style/variables";
import RoutePath from "../../../data/RoutePath";

type ButtonProps = {
  children: JSX.Element | string;
  to?: RoutePath;
  href?: string;
  target?: "_blank" | "_self";
  title?: string;
  ref?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonElement = styled.button`
  background: none;
  border: none;
  display: inline;
  font-size: ${ParagraphSize.NORMAL}rem;
  padding: 0;
  text-align: left;
  color: ${props => props.theme.color.foreground};
  text-decoration: none;
`;

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ children, ...props }, ref: any) => {
    let element: any;

    if (props.to) {
      element = Link;
    } else if (props.href) {
      element = "a";
    } else {
      element = "button";
    }

    return (
      <ButtonElement {...props} as={element} ref={ref}>
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
  padding: 1rem;
  font-size: 1.75rem;
`;
