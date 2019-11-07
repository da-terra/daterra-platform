import React from "react";
import IBlock from "../../../types/IBlock";
import RoutePath from "../../../data/RoutePath";
import { Context as ThemeManagerContext } from "../../ThemeManager";
import { FontColor, FontSize } from "../../../data/style/variables";
import Icon from "../../general/Icon";
import Logo from "../../general/Logo";
import {
  HeaderWrapper,
  CtaContainer,
  SigninLinkButton,
  ToggleThemeLinkButton
} from "./styled";

const Header: React.FC<IBlock> = () => (
  <HeaderWrapper>
    <Logo showName />

    <CtaContainer>
      <SigninLinkButton
        href={RoutePath.Signin}
        fontColor={FontColor.SecondaryAccent}
        fontSize={FontSize.Small}
        serif
      >
        Inloggen
      </SigninLinkButton>

      <ThemeManagerContext.Consumer>
        {({ cycleThemes }) => (
          <ToggleThemeLinkButton
            onClick={() => cycleThemes()}
            fontColor={FontColor.SecondaryAccent}
          >
            <Icon.InvertColor />
          </ToggleThemeLinkButton>
        )}
      </ThemeManagerContext.Consumer>
    </CtaContainer>
  </HeaderWrapper>
);

export default Header;
