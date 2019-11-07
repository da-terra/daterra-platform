import React from "react";
import { FontColor } from "../../../data/style/variables";
import { NavigationWrapper, LoginButton } from "./styled";

type NavigationProps = {
  button: {
    children: React.ReactNode;
  };
};

const Navigation: React.FC<NavigationProps> = ({ button }) => (
  <NavigationWrapper>
    <LoginButton fontColor={FontColor.PrimaryInverted} serif>
      {button.children}
    </LoginButton>
  </NavigationWrapper>
);

export default Navigation;
