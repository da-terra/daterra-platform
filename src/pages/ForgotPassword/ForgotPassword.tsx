import React, { Fragment } from "react";
import { Circle } from "../../util/layout";
import RoutePath from "../../data/RoutePath";
import { FontSize, FontWeight, FontColor } from "../../data/style/variables";
import InputType from "../../components/general/Input/data/InputType";
import { HeadingType } from "../../components/general/Heading";
import {
  Header,
  FormHeading,
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
  children: "Dit veld is verplicht"
};

const ForgotPassword: React.FC = () => {
  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Header />

      <FormWrapper>
        <Form method="post">
          <FormHeading headingType={HeadingType.Secondary} serif>
            Wachtwoord vergeten
          </FormHeading>

          <ForgetPasswordInput
            label="E-mailadres"
            name="email"
            type={InputType.Email}
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
    </Fragment>
  );
};

export default ForgotPassword;
