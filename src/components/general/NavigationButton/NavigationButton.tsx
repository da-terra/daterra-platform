import React from "react";
import styled from "styled-components";
import { LinkButton } from "../Button";
import { FontWeight } from "../../../data/style/variables";
import RoutePath from "../../../data/RoutePath";

type NavigationButtonProps = {
  className?: string;
  children: React.ReactNode;
  href: RoutePath;
};

const StyledComponent = styled(LinkButton)`
  color: ${props => props.theme.copy.primaryAccent};
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavigationButton: React.FC<NavigationButtonProps> = ({
  className,
  children,
  href
}) => (
  <StyledComponent
    href={href}
    className={className}
    fontWeight={FontWeight.Bold}
    serif
  >
    {children}
  </StyledComponent>
);

export default NavigationButton;
