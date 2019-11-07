import React from "react";
import RoutePath from "../../data/RoutePath";
import { Circle } from "../../util/layout";
import { FontSize } from "../../data/style/variables";
import {
  Page,
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

          <ForgotPasswordLink
            href={RoutePath.ForgetPassword}
            fontSize={FontSize.Small}
            serif
          >
            wachtwoord vergeten
          </ForgotPasswordLink>

          <ButtonWrapper>
            <SigninButton>Inloggen</SigninButton>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Page>
  );
};

export default Signin;
