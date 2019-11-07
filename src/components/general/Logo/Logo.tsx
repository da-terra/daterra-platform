import React, { Fragment } from "react";
import {
  LogoWrapper,
  NormalLogo,
  NormalLogoName,
  LargeLogo,
  LargeLogoName
} from "./styled";

type LogoProps = {
  showName?: boolean;
  size?: LogoSize;
  className?: string;
};

export enum LogoSize {
  Large,
  Normal
}

const Logo: React.FC<LogoProps> = ({
  className,
  showName,
  size = LogoSize.Normal
}) => (
  <LogoWrapper
    className={className}
    href={window.location.origin}
    rel="noopener"
  >
    {size === LogoSize.Normal && (
      <Fragment>
        <NormalLogo />
        {showName && <NormalLogoName>Studata</NormalLogoName>}
      </Fragment>
    )}

    {size === LogoSize.Large && (
      <Fragment>
        <LargeLogo />
        {showName && <LargeLogoName>Studata</LargeLogoName>}
      </Fragment>
    )}
  </LogoWrapper>
);

export default Logo;
