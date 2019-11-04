import React from "react";
import { NavigationWrapper, LoginButton } from "./styled";
import { ParagraphColor } from "../../general/Paragraph";

const Navigation: React.FC = () => (
  <NavigationWrapper>
    <LoginButton paragraphColor={ParagraphColor.PrimaryInverted} serif>
      Inloggen
    </LoginButton>
  </NavigationWrapper>
);

export default Navigation;
