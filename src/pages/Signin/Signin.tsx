import React from "react";
import RoutePath from "../../data/RoutePath";
import { FontSize, FontWeight, FontColor } from "../../data/style/variables";
import { HeadingType } from "../../components/general/Heading";
import {
  Page,
  Circle,
  Header,
  FormHeading,
  FormWrapper,
  Form,
  SigninInput,
  ForgotPasswordLink,
  SigninButton,
  ButtonWrapper,
  InfoIcon
} from "./styled";

const requiredTooltip = {
  icon: InfoIcon,
  message: "Dit veld is verplicht"
};

const Signin: React.FC = () => {
  return (
    <Page>
      <Circle x={25} y={-20} />

      <Header />

      <FormWrapper>
        <Form method="post">
          <FormHeading headingType={HeadingType.Secondary} serif>
            Inloggen
          </FormHeading>

          <SigninInput
            label="E-mailadres"
            name="email"
            type="email"
            tooltip={requiredTooltip}
          />

          <SigninInput
            label="Password"
            name="password"
            type="password"
            tooltip={requiredTooltip}
          />

          <ButtonWrapper>
            <SigninButton>Inloggen</SigninButton>

            <ForgotPasswordLink
              href={RoutePath.ForgetPassword}
              fontSize={FontSize.Small}
              fontWeight={FontWeight.Bold}
              fontColor={FontColor.Primary}
              serif
            >
              Wachtwoord vergeten
            </ForgotPasswordLink>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Page>
  );
};

export default Signin;
