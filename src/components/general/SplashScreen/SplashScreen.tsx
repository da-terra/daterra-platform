import React from "react";
import { LogoSize } from "../Logo";
import { Background, Circle, LogoWithAnimation } from "./styled";

const SplashScreen = () => (
  <Background>
    <Circle x={25} y={-20} />

    <LogoWithAnimation size={LogoSize.Normal} showName />
  </Background>
);

export default SplashScreen;
