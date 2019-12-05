import React, { useRef, useContext } from "react";
import { FontWeight } from "../../../data/style/variables";
import { LayoutContext, LayoutStateVariable } from "../../context/Layout";
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
}) => {
  const headerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const layoutContext = useContext(LayoutContext);

  if (headerRef.current) {
    const height = (headerRef.current! as HTMLElement).clientHeight;
    layoutContext.setValue(LayoutStateVariable.HeaderHeight, height);
  }

  return (
    <HeaderWrapper inverted={inverted} ref={headerRef}>
      <Logo showName={!navigationLinks} />

      {navigationLinks && (
        <NavigationLinks>
          {navigationLinks.map(link => (
            <NavigationLink {...link} fontWeight={FontWeight.Bold} serif>
              {link.children}
            </NavigationLink>
          ))}
        </NavigationLinks>
      )}

      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </HeaderWrapper>
  );
};

export default Header;
