import React from "react";
import IBlock from "../../../types/IBlock";
import { LogoSize } from "../../general/Logo";
import {
  Background,
  Circle,
  HeroLogo,
  Content,
  Slogan,
  ButtonWrapper,
  TargetButton
} from "./styled";

const Hero: React.FC<IBlock> = ({ className }) => (
  <Background className={className}>
    <Circle x={-30} y={-50} />

    <Content>
      <HeroLogo size={LogoSize.Large} showName />

      <Slogan>Data in actie</Slogan>

      <ButtonWrapper>
        <TargetButton inverted>Ik ben hier namens een bedrijf</TargetButton>
        <TargetButton inverted muted>
          Ik ben een student
        </TargetButton>
        <TargetButton inverted muted>
          Ik ben een expert
        </TargetButton>
      </ButtonWrapper>
    </Content>
  </Background>
);

export default Hero;
