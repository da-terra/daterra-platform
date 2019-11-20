import styled, { DefaultTheme } from "styled-components";
import { LinkButton } from "../../general/Button";
import Wrapper from "../../general/Wrapper";

export { default as Button } from "../../general/Button";
export { default as Logo } from "../../general/Logo";

type HeaderWrapperProps = {
  inverted?: boolean;
  theme: DefaultTheme;
};

export const HeaderWrapper = styled(Wrapper)`
  margin-top: 6.4rem;
  display: flex;
  color: ${(props: HeaderWrapperProps) =>
    props.inverted
      ? props.theme.copy.primaryInverted
      : props.theme.copy.primary};
`;

export const NavigationLinks = styled.div`
  display: flex;
  margin: auto 0 auto 6.2rem;
`;

export const NavigationLink = styled(LinkButton)`
  &:hover {
    text-decoration: underline;
  }

  &:not(:first-child) {
    margin-left: 6.2rem;
  }
`;

export const ChildrenWrapper = styled.div`
  margin-left: auto;
`;
