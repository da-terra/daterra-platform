import { IImage } from "@data-science-platform/shared";
import React from "react";
import Logo from "../../general/Logo";
import Wrapper from "../../general/Wrapper";
import { BackgroundWrapper } from "./styled";

type ArticleHeroProps = {
  image: IImage;
  inverted?: boolean;
};

const ArticleHero: React.FC<ArticleHeroProps> = ({ image, inverted }) => (
  <BackgroundWrapper image={image} inverted={inverted}>
    <Wrapper>
      <Logo showName />
    </Wrapper>
  </BackgroundWrapper>
);

export default ArticleHero;
