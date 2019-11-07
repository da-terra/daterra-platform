import React from "react";
import { Circle } from "../../util/layout";
import RoutePath from "../../data/RoutePath";
import { FontSize, FontWeight, FontColor } from "../../data/style/variables";
import { HeadingType } from "../../components/general/Heading";
import {
  Page,
  PageHeading,
  FormWrapper,
  Form,
  ForgetPasswordInput,
  BackToSigninButton,
  SubmitButton,
  ButtonWrapper,
  InfoIcon
} from "./styled";

const requiredTooltip = {
  icon: InfoIcon,
  message: "Dit veld is verplicht"
};

const ForgotPassword: React.FC = () => {
  return (
    <Page>
      <Circle x={25} y={-20} />

      <FormWrapper>
        <Form method="post">
          <PageHeading headingType={HeadingType.Secondary} serif>
            Wachtwoord vergeten
          </PageHeading>

          <ForgetPasswordInput
            label="E-mailadres"
            name="email"
            type="email"
            tooltip={requiredTooltip}
          />

          <ButtonWrapper>
            <SubmitButton>Reset wachtwoord</SubmitButton>

            <BackToSigninButton
              href={RoutePath.Signin}
              fontSize={FontSize.Small}
              fontWeight={FontWeight.Bold}
              fontColor={FontColor.Primary}
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
