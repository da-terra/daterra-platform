import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../../util/layout";
import { FontFamily } from "../../../data/style/variables";
import RoutePath from "../../../data/RoutePath";
import { Context as ThemeManagerContext } from "../../ThemeManager";
import Button from "../../general/Button";
import Icon from "../../general/Icon";
import Logo from "../../general/Logo";

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 4rem;
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
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    color: ${props => props.theme.color.darkAccent} !important;
  }
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo>Studata</Logo>

    <CtaContainer>
      <SigninButton to={RoutePath.SignIn}>Inloggen</SigninButton>

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
