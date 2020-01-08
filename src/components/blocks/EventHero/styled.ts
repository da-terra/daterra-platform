import styled from "styled-components";
import { Breakpoints } from "../../../data/style/variables";
import Wrapper from "../../general/Wrapper";

export { default as Wrapper } from "../../general/Wrapper";
export { default as Logo } from "../../general/Logo";
export { default as BigDate } from "../../general/BigDate";
export { default as Heading } from "../../general/Heading";

type BackgroundWrapperProps = {
  inverted?: boolean;
  color: string;
};

export const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  min-height: 30vh;
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
  background-color: ${props => props.color};
  color: ${props => props.theme.copy.primaryInverted};

  @media (max-width: ${Breakpoints.H750}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const Summary = styled(Wrapper)`
  margin-top: 10rem;
  display: flex;

  @media (max-width: ${Breakpoints.H750}) {
    display: block;
    margin-top: 6rem;
  }
`;

export const Aside = styled.div`
  margin-left: 6rem;
  margin-top: -1rem;
  max-width: 50rem;

  @media (max-width: ${Breakpoints.H750}) {
    margin: 2rem 0;
  }
`;
