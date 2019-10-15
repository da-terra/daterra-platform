import styled from "styled-components";
import Icon from "../../components/general/Icon";
import { SolidButton, LinkButton } from "../../components/general/Button";
import Input from "../../components/general/Input";

export const WarningIcon = styled(Icon.Warning)`
  fill: ${props => props.theme.input.warningColor};
`;

export const ErrorIcon = styled(Icon.Error)`
  fill: ${props => props.theme.input.errorColor};
`;

export const ForgetPasswordInput = styled(Input)`
  display: flex;
`;

export const Form = styled.form`
  max-width: 40rem;
  padding: 2rem;
  box-sizing: content-box;
  width: 100%;
  margin: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100%;
`;

export const ForgotPasswordLink = styled(LinkButton)`
  margin: 1.5rem auto 0;
`;

export const ForgetPasswordButton = styled(SolidButton)`
  display: block;
  margin: 4rem auto 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
