import React from "react";
import { Circle } from "../../util/layout";
import RoutePath from "../../data/RoutePath";
import { FontSize } from "../../data/style/variables";
import {
  Page,
  FormWrapper,
  Form,
  ForgetPasswordInput,
  BackToSigninButton,
  SubmitButton,
  ButtonWrapper,
  ErrorIcon
} from "./styled";

const mockError = {
  icon: ErrorIcon,
  message: "Dit veld is verplicht"
};

const ForgotPassword: React.FC = () => {
  return (
    <Page>
      <Circle x={25} y={-20} />

      <FormWrapper>
        <Form method="post">
          <ForgetPasswordInput
            label="E-mailadres"
            name="email"
            type="email"
            error={mockError}
          />

          <ButtonWrapper>
            <SubmitButton>Reset wachtwoord</SubmitButton>

            <BackToSigninButton
              href={RoutePath.Signin}
              fontSize={FontSize.Small}
              serif
            >
              Inloggen
            </BackToSigninButton>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Page>
  );
};

export default ForgotPassword;
