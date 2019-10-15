import React from "react";
import { LogoWrapper, LogoIcon } from "./styled";

type LogoProps = {
  children?: React.ReactNode;
};

const Logo: React.FC<LogoProps> = ({ children }) => (
  <LogoWrapper>
    <LogoIcon />

    {children && <div>{children}</div>}
  </LogoWrapper>
);

export default Logo;
