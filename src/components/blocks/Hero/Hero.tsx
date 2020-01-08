import React, { useContext, useRef, useCallback } from "react";
import { IUser } from "@data-science-platform/shared";
import { FontWeight, Breakpoints } from "../../../data/style/variables";
import { Context, StorageKey } from "../../context/StorageManager";
import MediaQuery from "../../util/MediaQuery";
import RoutePath from "../../../data/RoutePath";
import Role from "../../../data/Role";
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
  me?: IUser;
  slogan: string;
};

const buttons = [
  {
    children: "Ik ben hier namens een Bedrijf",
    targetGroup: Role.Company
  },
  {
    children: "Ik ben een Student",
    targetGroup: Role.Student
  },
  {
    children: "Ik ben een Data Scientist",
    targetGroup: Role.Expert
  }
];

const min500 = `(min-width: ${Breakpoints.H500})`;
const max500 = `(max-width: ${Breakpoints.H500})`;

const Hero: React.FC<HeroProps> = ({ me, slogan }) => {
  const storage = useContext(Context);
  const wrapperRef = useRef(null);

  const handleTargetGroupButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      storage.setValue(
        StorageKey.TargetGroup,
        parseInt(event.currentTarget.value, 10)
      );

      if (wrapperRef.current == null) {
        return;
      }

      // @ts-ignore
      const clientRect = wrapperRef.current.getBoundingClientRect();
      const scrollOffset = window.scrollY + clientRect.bottom;

      window.scrollTo({ top: scrollOffset, behavior: "smooth" });
    },
    [storage]
  );

  return (
    <Background ref={wrapperRef}>
      <Circle x={-33} y={-45} radius={200} />

      <Content>
        <HeroHeader>
          <MediaQuery mediaQuery={min500}>
            {() => <Logo size={LogoSize.Large} showName />}
          </MediaQuery>

          <MediaQuery mediaQuery={max500}>
            {() => <Logo size={LogoSize.Normal} showName />}
          </MediaQuery>

          <NavigationLinks>
            <NavigationLink
              href={me == null ? RoutePath.Signin : RoutePath.Dashboard}
              serif
            >
              {me == null ? "Inloggen" : "Mijn Dashboard"}
            </NavigationLink>
          </NavigationLinks>
        </HeroHeader>

        <CtaGroup>
          <MediaQuery mediaQuery={min500}>
            {() => <Slogan fontWeight={FontWeight.Black}>{slogan}</Slogan>}
          </MediaQuery>

          <MediaQuery mediaQuery={max500}>
            {() => (
              <Slogan
                fontWeight={FontWeight.Black}
                headingType={HeadingType.Secondary}
              >
                {slogan}
              </Slogan>
            )}
          </MediaQuery>

          <ButtonWrapper>
            {buttons.map(({ children, targetGroup, ...props }) => (
              <TargetButton
                inverted
                muted={storage.getValue(StorageKey.TargetGroup) !== targetGroup}
                value={targetGroup}
                onClick={handleTargetGroupButtonClick}
                key={targetGroup}
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
