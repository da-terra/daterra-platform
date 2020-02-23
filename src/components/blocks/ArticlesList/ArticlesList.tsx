import { IArticle, ILink } from "@data-science-platform/shared";
import React from "react";
import { FontWeight } from "../../../data/style/variables";
import Heading, { HeadingType } from "../../general/Heading";
import TagWrapper from "../../general/TagWrapper";
import {
  ArticlesWrapper,
  CardGhost,
  CtaLink,
  List,
  StyledArticleCard
} from "./styled";

type FeaturedArticlesProps = {
  title?: string;
  body?: string;
  tag: React.ReactNode;
  articles: IArticle[];
  link?: ILink;
  className?: string;
};

const ArticlesList: React.FC<FeaturedArticlesProps> = ({
  title,
  body,
  tag,
  articles,
  link,
  className
}) => {
  const heading = title && (
    <Heading headingType={HeadingType.Secondary} fontWeight={FontWeight.Black}>
      {title}
    </Heading>
  );

  return (
    <TagWrapper
      className={className}
      heading={heading}
      description={body}
      tag={tag}
    >
      <ArticlesWrapper>
        <List>
          {articles.map(article => (
            <StyledArticleCard {...article} key={article.slug} />
          ))}

          {articles.length < 1 && <CardGhost />}
        </List>

        {link && (
          <CtaLink {...link} serif>
            {link.children}
          </CtaLink>
        )}
      </ArticlesWrapper>
    </TagWrapper>
  );
};

export default ArticlesList;
