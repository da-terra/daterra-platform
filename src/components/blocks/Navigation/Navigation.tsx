import React from "react";
import RoutePath from "../../../data/RoutePath";
import { NavigationWrapper, LoginButton } from "./styled";

const Navigation: React.FC = () => (
  <NavigationWrapper>
    <LoginButton serif href={RoutePath.Signin}>
      Inloggen
    </LoginButton>
  </NavigationWrapper>
);

export default Navigation;
