import { createPath, IArticle } from "@data-science-platform/shared";
import React from "react";
import RoutePath from "../../../data/RoutePath";
import Logo from "../../general/Logo";
import Wrapper, { WrapperWidth } from "../../general/Wrapper";
import ArticleHeading from "../ArticleHeading";
import { ArticleHeadingButton, BackgroundWrapper } from "./styled";

type FeaturedArticleHeroProps = IArticle & {
  inverted?: boolean;
};

const FeaturedArticleHero: React.FC<FeaturedArticleHeroProps> = ({
  inverted,
  ...props
}) => (
  <BackgroundWrapper image={props.image} inverted={inverted}>
    <Wrapper>
      <Logo showName />
    </Wrapper>

    <ArticleHeadingButton
      href={createPath(RoutePath.ArticleDetail, { slug: props.slug })}
    >
      <ArticleHeading {...props} width={WrapperWidth.Normal} />
    </ArticleHeadingButton>
  </BackgroundWrapper>
);

export default FeaturedArticleHero;
