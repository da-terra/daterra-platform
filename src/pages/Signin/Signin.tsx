import React from "react";
import { Page, Circle } from "../../util/layout";
import RoutePath from "../../data/RoutePath";
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
      <Circle x={25} y={-20} />

      <FormWrapper>
        <Form method="post">
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

          <ForgotPasswordLink to={RoutePath.ForgetPassword}>
            wachtwoord vergeten
          </ForgotPasswordLink>

          <ButtonWrapper>
            <SigninButton>Inloggen</SigninButton>
          </ButtonWrapper>
        </Form>
      </FormWrapper>

      <Header />
    </Page>
  );
};

export default Signin;
