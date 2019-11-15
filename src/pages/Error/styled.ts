import styled from "styled-components";
import Page from "../../components/general/Page";
import Heading from "../../components/general/Heading";
import Wrapper from "../../components/general/Wrapper";
import { SolidButton } from "../../components/general/Button";

export { default as Logo } from "../../components/general/Logo";
export { Circle } from "../../util/layout";

export const PageWithBackgroundColor = styled(Page)`
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
  padding: 3.2rem 0 10rem;
`;

export const Status = styled(Heading)`
  font-size: 20vw;
  line-height: 1;
`;

export const ErrorMessage = styled(Heading)`
  max-width: 60%;
  line-height: 1.4;
  margin: 6.4rem 0 3.2rem;
`;

export const CtaButton = SolidButton;
