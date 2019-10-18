import React from "react";
import IBlock from "../../../types/IBlock";
import { Circle } from "../../../util/layout";
import { Background, Content, Slogan } from "./styled";
import Header from "../PublicHeader";

const Hero: React.FC<IBlock> = ({ className }) => (
  <Background className={className}>
    <Circle x={-30} y={-50} />

    <Header />

    <Content>
      <Slogan>Maakt Data Science {"\n"}Toegankelijk</Slogan>
    </Content>
  </Background>
);

export default Hero;
