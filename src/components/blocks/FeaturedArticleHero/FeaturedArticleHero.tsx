import React from "react";
import { IArticle } from "@data-science-platform/shared";
import { WrapperWidth } from "../../general/Wrapper";
import createPath from "../../../util/createPath";
import RoutePath from "../../../data/RoutePath";
import {
  BackgroundWrapper,
  Wrapper,
  Logo,
  ArticleHeadingButton,
  ArticleHeading
} from "./styled";

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
