import styled from "styled-components";
import Input from "../../components/general/Input";
import Icon from "../../components/general/Icon";
import { SolidButton, LinkButton } from "../../components/general/Button";

export { default as Page } from "../../components/general/Page";

export const WarningIcon = styled(Icon.Warning)`
  fill: ${props => props.theme.copy.warning};
`;

export const ErrorIcon = styled(Icon.Error)`
  fill: ${props => props.theme.copy.error};
`;

export const SigninInput = styled(Input)`
  display: flex;
  margin-bottom: 0.75rem;

  &:first-child {
    margin-bottom: 2rem;
  }
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
  margin-left: 2.5rem;
`;

export const SigninButton = styled(SolidButton)`
  display: block;
  margin: 4rem auto 0;
`;

export const ButtonWrapper = styled.div`
  display: block;
`;
