import React from "react";
import { Page, Circle } from "../../util/layout";
import RoutePath from "../../data/RoutePath";
import PublicHeader from "../../components/blocks/PublicHeader";
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
import { ParagraphSize } from "../../components/general/Paragraph";

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
            to={RoutePath.ForgetPassword}
            paragraphSize={ParagraphSize.Small}
            serif
          >
            wachtwoord vergeten
          </ForgotPasswordLink>

          <ButtonWrapper>
            <SigninButton>Inloggen</SigninButton>
          </ButtonWrapper>
        </Form>
      </FormWrapper>

      <PublicHeader />
    </Page>
  );
};

export default Signin;
