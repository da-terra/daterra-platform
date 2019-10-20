import styled from "styled-components";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import Icon from "../Icon";

export const LogoWrapper = styled.h1`
  color: ${props => props.theme.copy.primaryAccent};
  font-family: ${FontFamily.RobotoSlab};
  font-weight: ${FontWeight.Bold};
  font-size: 3.6rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled(Icon.GraphicEq)`
  width: 4rem;
  height: 4rem;

  :not(:only-child) {
    margin-right: 1.5rem;
  }
`;
