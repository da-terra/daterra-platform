import React, { useRef, useContext } from "react";
import { IUser, ILink, INotification } from "@data-science-platform/shared";
import { FontWeight } from "../../../data/style/variables";
import { LayoutContext, LayoutStateVariable } from "../../context/Layout";
import {
  HeaderWrapper,
  Logo,
  NavigationLinks,
  NavigationLink,
  Aside,
  UserButton,
  NotificationButton
} from "./styled";

type HeaderProps = {
  me?: IUser;
  notifications?: INotification[];
  inverted?: boolean;
  navigationLinks?: ILink[];
};

const Header: React.FC<HeaderProps> = ({
  me,
  notifications,
  inverted,
  navigationLinks
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
            <NavigationLink
              {...link}
              key={link.href}
              fontWeight={FontWeight.Bold}
              serif
            >
              {link.children}
            </NavigationLink>
          ))}
        </NavigationLinks>
      )}

      {(me || notifications) && (
        <Aside>
          {me && <UserButton me={me} />}

          {notifications && (
            <NotificationButton notifications={notifications} />
          )}
        </Aside>
      )}
    </HeaderWrapper>
  );
};

export default Header;
