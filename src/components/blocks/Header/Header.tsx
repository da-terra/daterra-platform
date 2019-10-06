import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../../util/layout";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import { Context as ThemeManagerContext } from "../../ThemeManager";
import Button from "../../general/Button";
import Icon from "../../general/Icon";

const HeaderWrapper = styled(Wrapper)`
  display: flex;
`;

const Logo = styled.h1`
  color: ${props => props.theme.color.darkAccent};
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-weight: ${FontWeight.BOLD};
  font-size: 3.6rem;
`;

const CtaContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const SigninButton = styled(Button)`
  color: ${props => props.theme.color.accentForeground} !important;
  font-size: 1.4rem;
  font-family: ${FontFamily.ROBOTO_SLAB};

  &:hover {
    color: ${props => props.theme.color.darkAccent} !important;
  }
`;

const ToggleThemeButton = styled(Button)`
  color: ${props => props.theme.color.accentForeground} !important;
  margin-left: 2rem;

  &:hover {
    color: ${props => props.theme.color.darkAccent} !important;
  }
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo>DaTerra</Logo>

    <CtaContainer>
      <SigninButton to="/signin">Inloggen</SigninButton>

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
