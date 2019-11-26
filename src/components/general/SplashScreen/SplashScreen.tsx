import React from "react";
import { LogoSize } from "../Logo";
import { Background, Circle, LogoWithAnimation } from "./styled";

type SplashScreenProps = {
  className?: string;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ className }) => (
  <Background className={className}>
    <Circle x={25} y={-20} />

    <LogoWithAnimation size={LogoSize.Normal} showName />
  </Background>
);

export default SplashScreen;
