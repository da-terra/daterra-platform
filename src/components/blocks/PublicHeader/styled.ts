import styled from "styled-components";
import { FontFamily } from "../../../data/style/variables";
import { Wrapper } from "../../../util/layout";
import Button from "../../general/Button";

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 4rem;
`;

export const CtaContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const SigninButton = styled(Button)`
  color: ${props => props.theme.copy.secondaryAccent} !important;
  font-size: 1.4rem;
  font-family: ${FontFamily.ROBOTO_SLAB};

  &:hover {
    color: ${props => props.theme.copy.primary} !important;
  }
`;

export const ToggleThemeButton = styled(Button)`
  color: ${props => props.theme.copy.secondaryAccent} !important;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    color: ${props => props.theme.copy.primary} !important;
  }
`;
