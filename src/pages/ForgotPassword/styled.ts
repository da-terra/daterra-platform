import styled from "styled-components";
import Icon from "../../components/general/Icon";
import { SolidButton, LinkButton } from "../../components/general/Button";
import Input from "../../components/general/Input";
import Heading from "../../components/general/Heading";

export { default as Header } from "../../components/blocks/Header";

export const InfoIcon = styled(Icon.Info)`
  fill: ${props => props.theme.copy.tertiary};
`;

export const WarningIcon = styled(Icon.Warning)`
  fill: ${props => props.theme.copy.warning};
`;

export const ErrorIcon = styled(Icon.Error)`
  fill: ${props => props.theme.copy.error};
`;

export const FormWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100%;
  pointer-events: none;
`;

export const Form = styled.form`
  max-width: 40rem;
  padding: 2rem;
  box-sizing: content-box;
  width: 100%;
  margin: auto;
  pointer-events: all;
`;

export const FormHeading = styled(Heading)`
  margin-bottom: 2.6rem;
`;

export const ForgetPasswordInput = styled(Input)`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled(SolidButton)`
  display: block;
  margin: 4rem auto 0;
`;

export const BackToSigninButton = styled(LinkButton)`
  margin: 2.6rem auto 0;

  &:hover {
    text-decoration: underline;
  }
`;
