import React from "react";
import IBlock from "../../../types/IBlock";
import RoutePath from "../../../data/RoutePath";
import { Context as ThemeManagerContext } from "../../ThemeManager";
import Icon from "../../general/Icon";
import Logo from "../../general/Logo";
import {
  HeaderWrapper,
  CtaContainer,
  SigninButton,
  ToggleThemeButton
} from "./styled";

const Header: React.FC<IBlock> = () => (
  <HeaderWrapper>
    <Logo>Studata</Logo>

    <CtaContainer>
      <SigninButton to={RoutePath.Signin}>Inloggen</SigninButton>

      <ThemeManagerContext.Consumer>
        {({ cycleThemes }) => (
          <ToggleThemeButton onClick={() => cycleThemes()}>
            <Icon.InvertColor />
          </ToggleThemeButton>
        )}
      </ThemeManagerContext.Consumer>
    </CtaContainer>
  </HeaderWrapper>
);

export default Header;
