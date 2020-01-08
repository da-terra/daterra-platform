import React from "react";
import { IEvent } from "@data-science-platform/shared";
import {
  BackgroundWrapper,
  Wrapper,
  Logo,
  Summary,
  BigDate,
  Aside,
  Heading
} from "./styled";

type ArticleHeroProps = IEvent;

const EventHero: React.FC<ArticleHeroProps> = ({ color, startDate, title }) => (
  <BackgroundWrapper color={color}>
    <Wrapper>
      <Logo showName />
    </Wrapper>

    <Summary>
      <BigDate date={startDate} />

      <Aside>
        <Heading>{title}</Heading>
      </Aside>
    </Summary>
  </BackgroundWrapper>
);

export default EventHero;
