import styled from "styled-components";
import {
  FontFamily,
  FontWeight,
  Breakpoints
} from "../../../data/style/variables";
import Icon from "../Icon";
import { LinkButton } from "../Button";

type LogoWrapperProps = {
  className?: string;
};

export const LogoWrapper = styled(LinkButton)<LogoWrapperProps>`
  display: inline-flex;
  align-items: flex-end;
  outline: none;
  text-decoration: none;
  color: currentColor;

  @media (max-width: ${Breakpoints.H750}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NormalLogo = styled(Icon.Logo)`
  width: 7.5rem;
  height: 7.5rem;
  margin: -1.6rem -1.6rem -1.2rem;
  flex: 1 0 auto;
`;

export const LargeLogo = styled(Icon.Logo)`
  width: 20rem;
  height: 20rem;
  margin: -4.1rem -4.1rem -3.4rem;
  flex: 1 0 auto;
`;

export const NormalLogoName = styled.h1`
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  font-size: 2.6rem;
  line-height: 1.1;
  white-space: pre-line;
  margin: 0 auto 0 1.6rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin-left: 0;
  }
`;

export const LargeLogoName = styled.h1`
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  font-size: 5rem;
  line-height: 1.1;
  white-space: pre-line;
  margin: 0 auto 0 3.8rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin-left: 0;
  }
`;
