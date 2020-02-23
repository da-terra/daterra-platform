import styled, { DefaultTheme } from "styled-components";
import { Breakpoints } from "../../../data/style/variables";
import { LinkButton } from "../../general/Button";
import Wrapper from "../../general/Wrapper";
import NotificationButtonBase from "../../general/NotificationButton";

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

  @media (max-width: ${Breakpoints.H750}) {
    margin-top: 2.4rem;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  margin: auto 0 auto 6.2rem;

  @media (max-width: ${Breakpoints.H750}) {
    display: none;
  }
`;

export const NavigationLink = styled(LinkButton)`
  &:hover {
    text-decoration: underline;
  }

  &:not(:first-child) {
    margin-left: 6.2rem;
  }
`;

export const Aside = styled.div`
  display: flex;
  margin-left: auto;
  z-index: 2;
`;

export const NotificationButton = styled(NotificationButtonBase)`
  margin-left: 4rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin-left: 0;
  }
`;
