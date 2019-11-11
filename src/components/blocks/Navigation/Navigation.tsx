import React from "react";
import { NavigationWrapper, LoginButton } from "./styled";

type NavigationProps = {
  button: {
    children: React.ReactNode;
  };
};

const Navigation: React.FC<NavigationProps> = ({ button }) => (
  <NavigationWrapper>
    <LoginButton serif>
      {button.children}
    </LoginButton>
  </NavigationWrapper>
);

export default Navigation;
