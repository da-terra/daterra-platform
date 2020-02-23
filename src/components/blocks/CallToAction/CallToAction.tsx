import { ILink } from "@data-science-platform/shared";
import React from "react";
import { FontColor, FontWeight } from "../../../data/style/variables";
import Heading from "../../general/Heading";
import { Background, BackgroundShape, Content, CtaButton } from "./styled";

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
        {link.children}
      </CtaButton>
    </Content>
  </Background>
);

export default CallToAction;
