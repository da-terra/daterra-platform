import React from "react";
import {
  Breakpoints,
  FontColor,
  FontWeight
} from "../../../data/style/variables";
import { HeadingType } from "../../general/Heading";
import Logo, { LogoSize } from "../../general/Logo";
import Circle from "../../util/Circle";
import MediaQuery from "../../util/MediaQuery";
import {
  Background,
  Content,
  HeroBody,
  HeroEyebrow,
  HeroHeader,
  HeroSubtitle,
  HeroTitle
} from "./styled";

type QuickscanProfileHeroProps = {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const min500 = `(min-width: ${Breakpoints.H500})`;
const max500 = `(max-width: ${Breakpoints.H500})`;

const QuickscanProfileHero: React.FC<QuickscanProfileHeroProps> = ({
  eyebrow,
  title,
  subtitle
}) => {
  return (
    <Background>
      <Circle x={-33} y={-45} radius={200} />

      <Content>
        <HeroHeader>
          <MediaQuery mediaQuery={min500}>
            {() => <Logo size={LogoSize.Large} showName />}
          </MediaQuery>

          <MediaQuery mediaQuery={max500}>
            {() => <Logo size={LogoSize.Normal} showName />}
          </MediaQuery>
        </HeroHeader>

        <HeroBody>
          <HeroEyebrow headingType={HeadingType.Tertiary}>
            {eyebrow}
          </HeroEyebrow>

          <HeroTitle>{title}</HeroTitle>

          {subtitle && (
            <HeroSubtitle
              fontColor={FontColor.SecondaryInverted}
              fontWeight={FontWeight.Bold}
            >
              {subtitle}
            </HeroSubtitle>
          )}
        </HeroBody>
      </Content>
    </Background>
  );
};

export default QuickscanProfileHero;
