import React from "react";
import IBlock from "../../../types/IBlock";
import { Circle } from "../../../util/layout";
import { Background, Content, Slogan, ButtonWrapper, TargetButton } from "./styled";
import Header from "../PublicHeader";

const Hero: React.FC<IBlock> = ({ className }) => (
  <Background className={className}>
    <Circle x={-30} y={-50} />

    <Header />

    <Content>
      <Slogan>Data in actie</Slogan>

      <ButtonWrapper>
        <TargetButton inverted>Ik ben hier namens een bedrijf</TargetButton>
        <TargetButton inverted muted>Ik ben een student</TargetButton>
        <TargetButton inverted muted>Ik ben een expert</TargetButton>
      </ButtonWrapper>
    </Content>
  </Background>
);

export default Hero;
