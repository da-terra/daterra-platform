import React from "react";
import styled from "styled-components";
import { FontFamily, FontWeight } from "../../../data/style/variables";
import { Wrapper } from "../../../util/layout";
import Header from "../Header";

const Background = styled.div`
  background: ${props => props.theme.color.lighterAccent};
  height: 55rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Circle = styled.div`
  background: ${props => props.theme.color.lightAccent};
  min-width: 150rem;
  min-height: 150rem;
  position: absolute;
  top: 0;
  right: calc(50vw - 30rem);
  border-radius: 100%;
  transform: translate(0, -50%);
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
    <Circle />

    <Header />

    <Content>
      <Slogan>Maakt Data Science {"\n"}Toegangkelijk</Slogan>
    </Content>
  </Background>
);

export default Hero;
