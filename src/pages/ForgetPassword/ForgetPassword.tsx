import React from "react";
import { Page, Circle } from "../../util/layout";
import Header from "../../components/blocks/Header";
import Input from "../../components/general/Input";
import RoutePath from "../../data/RoutePath";
import {
  FormWrapper,
  Form,
  ForgotPasswordLink,
  ForgetPasswordButton,
  ButtonWrapper,
  ErrorIcon
} from "./styled";

const mockError = {
  icon: ErrorIcon,
  message: "Veld is verplicht"
};

const Signin: React.FC = () => {
  return (
    <Page>
      <Circle x={25} y={-20} />

      <FormWrapper>
        <Form method="post">
          <Input
            label="E-mailadres"
            name="email"
            type="email"
            error={mockError}
          />

          <ButtonWrapper>
            <ForgetPasswordButton>Reset wachtwoord</ForgetPasswordButton>
            <ForgotPasswordLink to={RoutePath.Signin}>
              Inloggen
            </ForgotPasswordLink>
          </ButtonWrapper>
        </Form>
      </FormWrapper>

      <Header />
    </Page>
  );
};

export default Signin;
