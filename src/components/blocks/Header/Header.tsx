import React from "react";
import IBlock from "../../../types/IBlock";
import { ParagraphSize, ParagraphWeight } from "../../general/Paragraph";
import {
  HeaderLogo,
  HeaderWrapper,
  NavigationWrapper,
  NavigationButton
} from "./styled";

const linkProps = {
  serif: true,
  paragraphSize: ParagraphSize.Normal,
  paragraphWeight: ParagraphWeight.Bold
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
