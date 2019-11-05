import React from "react";
import { LogoWrapper, LogoIcon } from "./styled";

type LogoProps = {
  showName?: boolean;
  size?: LogoSize;
  className?: string;
};

export enum LogoSize {
  Large,
  Normal
}

const Logo: React.FC<LogoProps> = ({ className, showName, size }) => (
  <LogoWrapper className={className} size={size}>
    <LogoIcon />

    {showName && <div>Studata</div>}
  </LogoWrapper>
);

export default Logo;
