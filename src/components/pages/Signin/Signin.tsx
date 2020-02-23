import React, { Fragment } from "react";
import { ButtonWrapper, SigninButton } from "./styled";
import Circle from "../../util/Circle";
import Header from "../../blocks/Header";

const urls = {
  google: new URL("/auth/google", "http://localhost:4000/").href
};

const Signin: React.FC = () => {
  return (
    <Fragment>
      <Circle x={25} y={-20} />

      <Header />

      <ButtonWrapper>
        <SigninButton href={urls.google}>Inloggen met Google</SigninButton>
      </ButtonWrapper>
    </Fragment>
  );
};

export default Signin;
