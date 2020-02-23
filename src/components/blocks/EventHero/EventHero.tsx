import { IEvent } from "@data-science-platform/shared";
import React from "react";
import BigDate from "../../general/BigDate";
import Heading from "../../general/Heading";
import Logo from "../../general/Logo";
import Wrapper from "../../general/Wrapper";
import { Aside, BackgroundWrapper, Summary } from "./styled";

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
