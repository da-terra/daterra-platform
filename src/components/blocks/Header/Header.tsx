import React from "react";
import IBlock from "../../../types/IBlock";
import { FontSize, FontWeight } from "../../../data/style/variables";
import {
  HeaderLogo,
  HeaderWrapper,
  NavigationWrapper,
  NavigationButton
} from "./styled";

const linkProps = {
  serif: true,
  paragraphSize: FontSize.Normal,
  paragraphWeight: FontWeight.Bold
};

const Header: React.FC<IBlock> = ({ className }) => (
  <HeaderWrapper className={className}>
    <HeaderLogo />

    <NavigationWrapper>
      <NavigationButton {...linkProps}>Projecten</NavigationButton>
      <NavigationButton {...linkProps}>Forum</NavigationButton>
    </NavigationWrapper>
  </HeaderWrapper>
);

export default Header;
