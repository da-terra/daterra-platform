import React from "react";
import styled, { css } from "styled-components";
import Button, { ButtonProps } from "../Button";

type IconButtonElementProps = {
  hasPrefix: React.ReactNode;
  hasSuffix: React.ReactNode;
  active?: boolean;
};

const inactiveCss = css<IconButtonElementProps>`
  background: ${props => props.theme.button.icon.background};
  color: ${props => props.theme.button.icon.color};

  &:hover {
    background: ${props => props.theme.button.icon.hoverBackground};
    color: ${props => props.theme.button.icon.hoverColor};
  }
`;

const activeCss = css<IconButtonElementProps>`
  background: ${props => props.theme.button.icon.activeBackground};
  color: ${props => props.theme.button.icon.activeColor};

  &:hover {
    background: ${props => props.theme.button.icon.activeHoverBackground};
    color: ${props => props.theme.button.icon.activeHoverColor};
  }
`;

const IconButtonElement = styled(Button)<IconButtonElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  padding: 0;
  border-radius: ${props => props.theme.button.icon.radius};

  ${props => (props.active ? activeCss : inactiveCss)}

  // Add padding when there's a text prefix/suffix
  padding-left: ${props => (props.hasPrefix ? "2.3rem" : 0)}
  padding-right: ${props => (props.hasSuffix ? "2.3rem" : 0)}
`;

type IconButtonProps = {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
};

const IconButton: React.FC<ButtonProps & IconButtonProps> = ({
  prefix,
  suffix,
  children,
  active,
  ...props
}) => (
  <IconButtonElement
    hasPrefix={prefix != null}
    hasSuffix={suffix != null}
    active={active}
    {...props}
  >
    {prefix}
    {children}
    {suffix}
  </IconButtonElement>
);

export default IconButton;
