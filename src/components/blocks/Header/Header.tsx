import React from "react";
import { FontWeight } from "../../../data/style/variables";
import {
  HeaderWrapper,
  Logo,
  NavigationLinks,
  NavigationLink,
  ChildrenWrapper
} from "./styled";

type HeaderProps = {
  inverted?: boolean;
  navigationLinks?: (ILink & { uuid: string })[];
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  inverted,
  navigationLinks,
  children
}) => (
  <HeaderWrapper inverted={inverted}>
    <Logo showName={!navigationLinks} />

    {navigationLinks && (
      <NavigationLinks>
        {navigationLinks.map(({ children, ...link }) => (
          <NavigationLink {...link} fontWeight={FontWeight.Bold} serif>
            {children}
          </NavigationLink>
        ))}
      </NavigationLinks>
    )}

    {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
  </HeaderWrapper>
);

export default Header;
