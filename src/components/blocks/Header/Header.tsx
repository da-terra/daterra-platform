import React from "react";
import IBlock from "../../../types/IBlock";
import Logo from "../../general/Logo";
import { HeaderWrapper } from "./styled";

const Header: React.FC<IBlock> = ({ className }) => (
  <HeaderWrapper className={className}>
    <Logo />
  </HeaderWrapper>
);

export default Header;
