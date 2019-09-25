import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ParagraphSizes } from "../../../data/style/textVariables";

export type ButtonProps = {
  children: JSX.Element | string;
  to?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  let element: any;

  if (props.to) {
    element = Link;
  } else if (props.href) {
    element = "a";
  } else {
    element = "button";
  }

  const Component = styled.button`
    background: none;
    border: none;
    display: inline;
    font-size: ${ParagraphSizes.NORMAL}rem;
    padding: 0;
    text-align: left;
    color: ${props => props.theme.foregroundColor};
  `;

  return (
    <Component {...props} as={element}>
      {children}
    </Component>
  );
};

export default Button;

/**
 * Extend default button with more styling for more button variants
 */
export const SolidButton: React.FC<ButtonProps> = styled(Button)`
  display: inline-block;
  padding: 1rem;
  font-size: 1.75rem;
`;

export const LinkButton: React.FC<ButtonProps> = styled(Button)`
  text-decoration: none;
`;
