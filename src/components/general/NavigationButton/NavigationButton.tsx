import React from "react";
import styled from "styled-components";
import { LinkButton } from "../Button";
import { ParagraphWeight } from "../Paragraph";
import RoutePath from "../../../data/RoutePath";

type NavigationButtonProps = {
  className?: string;
  children: React.ReactNode;
  to: RoutePath;
};

const StyledComponent = styled(LinkButton)`
  color: ${props => props.theme.copy.primaryAccent};
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const paragraphPreset = {
  serif: true,
  paragraphWeight: ParagraphWeight.Bold
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  className,
  children,
  to
}) => (
  <StyledComponent to={to} className={className} {...paragraphPreset}>
    {children}
  </StyledComponent>
);

export default NavigationButton;
