import React from "react";
import { WrapperWidth } from "../../general/Wrapper";
import {
  BackgroundWrapper,
  Wrapper,
  Logo,
  FeaturedArticleHeading
} from "./styled";

type FeaturedArticleHeroProps = {
  image: IImage;
  title: React.ReactNode;
  publishedDate: string;
  category: string;
  author: IUser;
  inverted?: boolean;
};

const FeaturedArticleHero: React.FC<FeaturedArticleHeroProps> = ({
  image,
  title,
  publishedDate,
  category,
  author,
  inverted
}) => (
  <BackgroundWrapper image={image} inverted={inverted}>
    <Wrapper>
      <Logo showName />
    </Wrapper>

    <FeaturedArticleHeading
      title={title}
      publishedDate={publishedDate}
      category={category}
      author={author}
      width={WrapperWidth.Normal}
    />
  </BackgroundWrapper>
);

export default FeaturedArticleHero;
