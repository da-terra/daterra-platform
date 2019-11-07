import styled from "styled-components";
import Wrapper from "../../general/Wrapper";
import { LinkButton } from "../../general/Button";

export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding-top: 6.4rem;
  padding-bottom: 6.4rem;
  pointer-events: none;
  z-index: 1;
`;

export const LoginButton = styled(LinkButton)`
  margin-left: auto;
  text-decoration: none;
  pointer-events: all;
  color: ${props => props.theme.copy.mutedInverted}

  &:hover {
    color: ${props => props.theme.copy.primaryInverted}
  }
`;
