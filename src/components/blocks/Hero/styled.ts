import styled from "styled-components";
import Wrapper from "../../general/Wrapper";
import { SolidButton, LinkButton } from "../../general/Button";
import Heading from "../../general/Heading";
import { Breakpoints } from "../../../data/style/variables";

export { default as Logo } from "../../general/Logo";
export { Circle } from "../../../util/layout";

export const Background = styled.div`
  background: ${props => props.theme.background.accent};
  color: ${props => props.theme.copy.primaryInverted};
  min-height: 65vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-top: 6.4rem;
  padding-bottom: 6.4rem;

  @media (max-width: ${Breakpoints.H1000}) {
    padding-top: 4.6rem;
    padding-bottom: 4.6rem;
  }

  @media (max-width: ${Breakpoints.H500}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const HeroHeader = styled.div`
  display: flex;
  margin-bottom: 15rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin-bottom: 5rem;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  margin-left: auto;
  margin-bottom: auto;
`;

export const NavigationLink = styled(LinkButton)`
  text-decoration: none;
  pointer-events: all;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &:not(:first-child) {
    margin-left: 6.2rem;
  }
`;

export const CtaGroup = styled.div`
  margin: auto 0;
`;

export const Slogan = styled(Heading)`
  position: relative;
  white-space: pre-line;
  margin: 4.2rem 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
`;

export const TargetButton = styled(SolidButton)`
  white-space: nowrap;
  margin-bottom: 2rem;

  &:not(:last-child) {
    margin-right: 4.5rem;
  }
`;
