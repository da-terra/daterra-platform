import React from "react";
import IBlock from "../../../types/IBlock";
import RoutePath from "../../../data/RoutePath";
import { Context as ThemeManagerContext } from "../../ThemeManager";
import { ParagraphColor, ParagraphSize } from "../../general/Paragraph";
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
    <Logo>Studata</Logo>

    <CtaContainer>
      <SigninLinkButton
        to={RoutePath.Signin}
        paragraphColor={ParagraphColor.SecondaryAccent}
        paragraphSize={ParagraphSize.Small}
        serif
      >
        Inloggen
      </SigninLinkButton>

      <ThemeManagerContext.Consumer>
        {({ cycleThemes }) => (
          <ToggleThemeLinkButton
            onClick={() => cycleThemes()}
            paragraphColor={ParagraphColor.SecondaryAccent}
          >
            <Icon.InvertColor />
          </ToggleThemeLinkButton>
        )}
      </ThemeManagerContext.Consumer>
    </CtaContainer>
  </HeaderWrapper>
);

export default Header;
