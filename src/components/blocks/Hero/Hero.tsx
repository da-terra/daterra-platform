import React from "react";
import { LogoSize } from "../../general/Logo";
import { FontWeight } from "../../../data/style/variables";
import {
  Background,
  Circle,
  HeroLogoWrapper,
  HeroLogo,
  Content,
  CtaGroup,
  Slogan,
  ButtonWrapper,
  TargetButton
} from "./styled";

type HeroProps = {
  slogan: string;
  buttons: {
    uuid: string;
    children: string;
  }[];
};

const Hero: React.FC<HeroProps> = ({ slogan, buttons }) => (
  <Background>
    <Circle x={-33} y={-45} radius={200} />

    <Content>
      <HeroLogoWrapper>
        <HeroLogo size={LogoSize.Large} showName />
      </HeroLogoWrapper>

      <CtaGroup>
        <Slogan fontWeight={FontWeight.Black}>{slogan}</Slogan>

        <ButtonWrapper>
          {buttons.map(({ children, ...props }) => (
            <TargetButton inverted {...props} key={props.uuid}>
              {children}
            </TargetButton>
          ))}
        </ButtonWrapper>
      </CtaGroup>
    </Content>
  </Background>
);

export default Hero;
