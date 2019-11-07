import styled from "styled-components";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import Icon from "../Icon";

type LogoWrapperProps = {
  className?: string;
};

export const LogoWrapper = styled.a<LogoWrapperProps>`
  display: inline-flex;
  align-items: flex-end;
  outline: none;
  text-decoration: none;
  color: currentColor;
`;

export const NormalLogo = styled(Icon.Logo)`
  width: 7.5rem;
  height: 7.5rem;
  margin: -1.6rem;
  flex: 1 0 auto;
`;

export const LargeLogo = styled(Icon.Logo)`
  width: 20rem;
  height: 20rem;
  margin: -4.1rem;
  flex: 1 0 auto;
`;

export const NormalLogoName = styled.h1`
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  font-size: 3.8rem;
  line-height: 0.8;
  margin: 0 auto 0 1.6rem;
`;

export const LargeLogoName = styled.h1`
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  font-size: 10rem;
  line-height: 0.8;
  margin: 0 auto 0 3.8rem;
`;
