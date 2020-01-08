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

const name = "Data Science\nPlatform";

const Logo: React.FC<LogoProps> = ({
  className,
  showName,
  size = LogoSize.Normal
}) => (
  <LogoWrapper className={className} href="/">
    {size === LogoSize.Normal && (
      <Fragment>
        <NormalLogo />
        {showName && <NormalLogoName>{name}</NormalLogoName>}
      </Fragment>
    )}

    {size === LogoSize.Large && (
      <Fragment>
        <LargeLogo />
        {showName && <LargeLogoName>{name}</LargeLogoName>}
      </Fragment>
    )}
  </LogoWrapper>
);

export default Logo;
