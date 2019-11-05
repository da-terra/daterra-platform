import styled from "styled-components";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import Icon from "../Icon";
import { LogoSize } from "./Logo";

type LogoWrapperProps = {
  className?: string;
  size?: LogoSize;
};

export const LogoIcon = styled(Icon.Logo)`
  width: 4rem;
  height: 4rem;

  :not(:only-child) {
    margin-right: 1.5rem;
  }
`;

export const LogoWrapper = styled.h1<LogoWrapperProps>`
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  font-size: 3.6rem;
  margin: 0;
  display: flex;
  align-items: center;
`;
