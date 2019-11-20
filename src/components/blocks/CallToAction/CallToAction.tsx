import React from "react";
import {
  Background,
  BackgroundShape,
  Content,
  Heading,
  CtaButton
} from "./styled";
import { FontColor, FontWeight } from "../../../data/style/variables";

type CallToActionProps = {
  title: string;
  link: ILink;
  shape: {
    src: string;
    alt: string;
  };
};

const CallToAction: React.FC<CallToActionProps> = ({ title, link, shape }) => (
  <Background>
    {shape && <BackgroundShape {...shape} />}

    <Content>
      <Heading
        fontColor={FontColor.PrimaryInverted}
        fontWeight={FontWeight.Black}
        center
      >
        {title}
      </Heading>

      <CtaButton {...link} inverted>
        {link.title}
      </CtaButton>
    </Content>
  </Background>
);

export default CallToAction;
