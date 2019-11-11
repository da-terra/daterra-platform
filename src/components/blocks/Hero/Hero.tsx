import React, { useContext } from "react";
import { FontWeight, Breakpoints } from "../../../data/style/variables";
import {
  StorageManagerContext,
  StorageKey
} from "../../context/StorageManager";
import MediaQuery from "../../util/MediaQuery";
import { LogoSize } from "../../general/Logo";
import { HeadingType } from "../../general/Heading";
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
    targetGroup: string;
    children: string;
  }[];
};

const h750MediaQuery = `(min-width: ${Breakpoints.H500})`;

const Hero: React.FC<HeroProps> = ({ slogan, buttons }) => {
  const storage = useContext(StorageManagerContext);

  return (
    <Background>
      <Circle x={-33} y={-45} radius={200} />

      <Content>
        <HeroLogoWrapper>
          <MediaQuery
            mediaQuery={h750MediaQuery}
            fallback={<HeroLogo size={LogoSize.Normal} showName />}
          >
            <HeroLogo size={LogoSize.Large} showName />
          </MediaQuery>
        </HeroLogoWrapper>

        <CtaGroup>
          <MediaQuery
            mediaQuery={h750MediaQuery}
            fallback={
              <Slogan
                fontWeight={FontWeight.Black}
                headingType={HeadingType.Secondary}
              >
                {slogan}
              </Slogan>
            }
          >
            <Slogan fontWeight={FontWeight.Black}>{slogan}</Slogan>
          </MediaQuery>

          <ButtonWrapper>
            {buttons.map(({ children, targetGroup, ...props }) => (
              <TargetButton
                inverted
                muted={storage.getValue(StorageKey.TargetGroup) !== targetGroup}
                onClick={() => storage.setValue(StorageKey.TargetGroup, targetGroup)}
                key={props.uuid}
              >
                {children}
              </TargetButton>
            ))}
          </ButtonWrapper>
        </CtaGroup>
      </Content>
    </Background>
  );
};

export default Hero;
