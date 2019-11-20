import React from "react";
import { HeadingType } from "../../general/Heading";
import { FontWeight } from "../../../data/style/variables";
import {
  TagWrapper,
  Heading,
  ArticlesWrapper,
  ArticlesList,
  Card,
  CtaLink
} from "./styled";

type Article = {
  uuid: string;
  color: string;
  publishedDate: string;
  tag: string;
  title: string;
  image: IImage;
  author: {
    name: string;
  };
};

type FeaturedArticlesProps = {
  title: string;
  tag: React.ReactNode;
  articles: Article[];
  link: ILink;
};

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  title,
  tag,
  articles,
  link
}) => {
  const heading = (
    <Heading headingType={HeadingType.Secondary} fontWeight={FontWeight.Black}>
      {title}
    </Heading>
  );

  return (
    <TagWrapper heading={heading} tag={tag}>
      <ArticlesWrapper>
        <ArticlesList>
          {articles.map(article => (
            <Card {...article} key={article.uuid} />
          ))}
        </ArticlesList>

        <CtaLink {...link} serif>
          {link.title}
        </CtaLink>
      </ArticlesWrapper>
    </TagWrapper>
  );
};

export default FeaturedArticles;
