import React from "react";
import {
  Breakpoints,
  FontColor,
  FontWeight
} from "../../../data/style/variables";
import MediaQuery from "../../util/MediaQuery";
import { LogoSize } from "../../general/Logo";
import {
  Background,
  Circle,
  Content,
  HeroHeader,
  Logo,
  HeroBody,
  HeroEyebrow,
  HeroTitle,
  HeroSubtitle
} from "./styled";
import { HeadingType } from "../../general/Heading";

type QuickscanProfileHeroProps = {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const h750MediaQuery = `(min-width: ${Breakpoints.H500})`;

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
          <MediaQuery
            mediaQuery={h750MediaQuery}
            fallback={() => <Logo size={LogoSize.Normal} showName />}
          >
            <Logo size={LogoSize.Large} showName />
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
