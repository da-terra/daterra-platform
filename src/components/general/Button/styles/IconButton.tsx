import React from "react";
import styled, { css } from "styled-components";
import Button, { ButtonProps } from "../Button";
import Paragraph from "../../Paragraph";
import { FontSize, FontWeight } from "../../../../data/style/variables";

type IconButtonProps = {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
  inverted?: boolean;
};

const solidInactiveCss = css<IconButtonProps>`
  background: ${props => props.theme.button.icon.solid.background};
  color: ${props => props.theme.button.icon.solid.color};

  &:hover {
    background: ${props => props.theme.button.icon.solid.hoverBackground};
    color: ${props => props.theme.button.icon.solid.hoverColor};
  }
`;

const solidActiveCss = css<IconButtonProps>`
  background: ${props => props.theme.button.icon.solid.activeBackground};
  color: ${props => props.theme.button.icon.solid.activeColor};

  &:hover {
    background: ${props => props.theme.button.icon.solid.activeHoverBackground};
    color: ${props => props.theme.button.icon.solid.activeHoverColor};
  }
`;

const invertedSolidInactiveCss = css<IconButtonProps>`
  background: ${props => props.theme.button.icon.invertedSolid.background};
  color: ${props => props.theme.button.icon.invertedSolid.color};

  &:hover {
    background: ${props =>
      props.theme.button.icon.invertedSolid.hoverBackground};
    color: ${props => props.theme.button.icon.invertedSolid.hoverColor};
  }
`;

const invertedSolidActiveCss = css<IconButtonProps>`
  background: ${props =>
    props.theme.button.icon.invertedSolid.activeBackground};
  color: ${props => props.theme.button.icon.invertedSolid.activeColor};

  &:hover {
    background: ${props =>
      props.theme.button.icon.invertedSolid.activeHoverBackground};
    color: ${props => props.theme.button.icon.invertedSolid.activeHoverColor};
  }
`;

const IconButtonElement = styled(Button)<IconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: ${props => props.theme.button.icon.radius};

  ${props =>
    props.inverted
      ? props.active
        ? invertedSolidActiveCss
        : invertedSolidInactiveCss
      : props.active
      ? solidActiveCss
      : solidInactiveCss}

  // Add padding when there's a text prefix/suffix
  padding-left: ${props => (props.prefix != null ? "1.5rem" : "1rem")}
  padding-right: ${props => (props.suffix != null ? "1.5rem" : "1rem")}
`;

const Prefix = styled(Paragraph)`
  margin-right: 1rem;
`;

const Suffix = styled(Paragraph)`
  margin-left: 1rem;
`;

const IconButton: React.FC<ButtonProps & IconButtonProps> = ({
  children,
  ...props
}) => (
  <IconButtonElement {...props}>
    {props.prefix && (
      <Prefix fontSize={FontSize.Small} fontWeight={FontWeight.Bold} serif>
        {props.prefix}
      </Prefix>
    )}

    {children}

    {props.suffix && (
      <Suffix fontSize={FontSize.Small} fontWeight={FontWeight.Bold} serif>
        {props.suffix}
      </Suffix>
    )}
  </IconButtonElement>
);

export default IconButton;
