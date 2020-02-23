import styled from "styled-components";
import Heading from "../../general/Heading";
import Wrapper from "../../general/Wrapper";
import { SolidButton } from "../../general/Button";
import { Breakpoints } from "../../../data/style/variables";

export const PageWithBackgroundColor = styled.div`
  height: 100vh;
  background: ${props => props.theme.background.accent};
  color: ${props => props.theme.copy.primaryInverted};
`;

export const ContentWrapper = styled(Wrapper)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  margin-top: 6.4rem;
`;

export const ErrorWrapper = styled.div`
  margin: auto 0;
  padding: 10rem 0;
`;

export const Code = styled(Heading)`
  font-size: 6rem;
  line-height: 1;

  @media (min-width: ${Breakpoints.H750}) {
    font-size: 8rem;
  }

  @media (min-width: ${Breakpoints.H1000}) {
    font-size: 10rem;
  }
`;

export const ErrorMessage = styled(Heading)`
  line-height: 1.4;
  margin: 6.4rem 0 3.2rem;

  @media (min-width: ${Breakpoints.H750}) {
    max-width: 60%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CtaButton = styled(SolidButton)`
  margin-bottom: 1rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
