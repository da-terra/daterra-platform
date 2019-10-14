import React from "react";
import styled from "styled-components";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import { Wrapper, Circle } from "../../../util/layout";
import Header from "../Header";

const Background = styled.div`
  background: ${props => props.theme.color.lighterAccent};
  height: 55rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Slogan = styled.h2`
  color: ${props => props.theme.color.darkAccent};
  position: relative;
  font-size: 6.4rem;
  white-space: pre-line;
  font-family: ${FontFamily.ROBOTO};
  font-weight: ${FontWeight.BLACK};
  font-style: italic;
  margin: auto 0;
  padding-bottom: 10rem;
`;

const Content = styled(Wrapper)`
  height: 100%;
  display: flex;
`;

const Hero: React.FC = () => (
  <Background>
    <Circle x={-30} y={-50} />

    <Header />

    <Content>
      <Slogan>Maakt Data Science {"\n"}Toegankelijk</Slogan>
    </Content>
  </Background>
);

export default Hero;
