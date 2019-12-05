import React from "react";
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

type FeaturedArticleHeroProps = {
  slug: string;
  image: IImage;
  title: React.ReactNode;
  publishedDate: string;
  tags: number;
  author: IUser;
  inverted?: boolean;
};

const FeaturedArticleHero: React.FC<FeaturedArticleHeroProps> = ({
  image,
  slug,
  inverted,
  ...props
}) => (
  <BackgroundWrapper image={image} inverted={inverted}>
    <Wrapper>
      <Logo showName />
    </Wrapper>

    <ArticleHeadingButton href={createPath(RoutePath.ArticleDetail, { slug })}>
      <ArticleHeading {...props} width={WrapperWidth.Normal} />
    </ArticleHeadingButton>
  </BackgroundWrapper>
);

export default FeaturedArticleHero;
