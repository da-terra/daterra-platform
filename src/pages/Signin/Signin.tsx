import React from "react";
import { Page, Circle } from "../../util/layout";
import Header from "../../components/blocks/Header";
import {
  FormWrapper,
  Form,
  SigninInput,
  ForgotPasswordLink,
  SigninButton,
  ButtonWrapper,
  WarningIcon,
  ErrorIcon
} from "./styled";

const mockError = {
  icon: ErrorIcon,
  message: "Wachtwoord of gebruikersnaam onjuist"
};

const mockWarning = {
  icon: WarningIcon,
  message: "Wachtwoord of gebruikersnaam onjuist"
};

const Signin: React.FC = () => {
  return (
    <Page>
      <Circle x={30} y={-20} />

      <Header />

      <FormWrapper>
        <Form>
          <SigninInput
            label="E-mailadres"
            name="email"
            type="email"
            error={mockError}
          />

          <SigninInput
            label="Password"
            name="password"
            type="password"
            error={mockWarning}
          />

          <ForgotPasswordLink>wachtwoord vergeten</ForgotPasswordLink>

          <ButtonWrapper>
            <SigninButton>Inloggen</SigninButton>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Page>
  );
};

export default Signin;
