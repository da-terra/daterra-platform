import React from "react";
import { Page, Circle } from "../../util/layout";
import RoutePath from "../../data/RoutePath";
import { ParagraphSize } from "../../components/general/Paragraph";
import {
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
              to={RoutePath.Signin}
              paragraphSize={ParagraphSize.Small}
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
