import React, { Fragment } from "react";
import { Circle } from "../../util/layout";
import RoutePath from "../../data/RoutePath";
import { FontSize, FontWeight, FontColor } from "../../data/style/variables";
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
  message: "Dit veld is verplicht"
};

const ForgotPassword: React.FC = () => {
  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Header
        navigationLinks={[
          {
            uuid: "1",
            href: "/quick-scan",
            title: "Doe de Quickscan in minder dan 5 minuten",
            children: "Doe de Quickscan"
          },
          {
            uuid: "2",
            href: "/blog",
            title: "Vind informatie over onze producten en diensten",
            children: "Blog"
          }
        ]}
      />

      <FormWrapper>
        <Form method="post">
          <FormHeading headingType={HeadingType.Secondary} serif>
            Wachtwoord vergeten
          </FormHeading>

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
    </Fragment>
  );
};

export default ForgotPassword;
