import React, { useContext } from "react";
import { FontWeight, Breakpoints } from "../../../data/style/variables";
import { Context, StorageKey } from "../../context/StorageManager";
import MediaQuery from "../../util/MediaQuery";
import { LogoSize } from "../../general/Logo";
import { HeadingType } from "../../general/Heading";
import {
  Background,
  Circle,
  HeroHeader,
  Logo,
  NavigationLinks,
  NavigationLink,
  Content,
  CtaGroup,
  Slogan,
  ButtonWrapper,
  TargetButton
} from "./styled";

type HeroProps = {
  navigationLinks: (ILink & { uuid: string })[];
  slogan: string;
  buttons: {
    uuid: string;
    targetGroup: string;
    children: string;
  }[];
};

const h750MediaQuery = `(min-width: ${Breakpoints.H500})`;

const Hero: React.FC<HeroProps> = ({ navigationLinks, slogan, buttons }) => {
  const storage = useContext(Context);

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

          {navigationLinks && (
            <NavigationLinks>
              {navigationLinks.map(({ children, uuid, ...link }) => (
                <NavigationLink {...link} key={uuid} serif>
                  {children}
                </NavigationLink>
              ))}
            </NavigationLinks>
          )}
        </HeroHeader>

        <CtaGroup>
          <MediaQuery
            mediaQuery={h750MediaQuery}
            fallback={() => (
              <Slogan
                fontWeight={FontWeight.Black}
                headingType={HeadingType.Secondary}
              >
                {slogan}
              </Slogan>
            )}
          >
            <Slogan fontWeight={FontWeight.Black}>{slogan}</Slogan>
          </MediaQuery>

          <ButtonWrapper>
            {buttons.map(({ children, targetGroup, ...props }) => (
              <TargetButton
                inverted
                muted={storage.getValue(StorageKey.TargetGroup) !== targetGroup}
                onClick={() =>
                  storage.setValue(StorageKey.TargetGroup, targetGroup)
                }
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
