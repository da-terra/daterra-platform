import React from "react";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { FontWeight, FontSize } from "../../../data/style/variables";
import { getTagNames } from "../../../data/ArticleCategory";
import { WrapperWidth } from "../../general/Wrapper";
import {
  ArticleHeadingWrapper,
  Title,
  ArticleProperties,
  ArticleProperty,
  PublishedDate,
  AuthorLink
} from "./styled";

type ArticleHeadingProps = {
  title: React.ReactNode;
  tags: number;
  publishedDate: string;
  author: IUser;

  // Props used in FeaturedArticleHero
  className?: string;
  width?: WrapperWidth;
};

const formateDistanceToNowOptions = {
  addSuffix: true,
  includeSeconds: true
};

const ArticleHeading: React.FC<ArticleHeadingProps> = ({
  title,
  tags,
  publishedDate,
  author: { fullName, email },
  className,
  width = WrapperWidth.Smaller
}) => {
  const timeDistance = formatDistanceToNow(
    fromUnixTime(parseInt(publishedDate, 10) / 1000),
    formateDistanceToNowOptions
  );

  return (
    <ArticleHeadingWrapper width={width} className={className}>
      <Title>{title}</Title>

      <ArticleProperties>
        <ArticleProperty
          as="span"
          fontWeight={FontWeight.Black}
          fontSize={FontSize.Small}
        >
          {getTagNames(tags).join(" - ")}
        </ArticleProperty>

        <ArticleProperty as="span">
          <PublishedDate
            as="time"
            dateTime={publishedDate}
            fontWeight={FontWeight.Bold}
            fontSize={FontSize.Small}
          >
            {timeDistance}
          </PublishedDate>

          <AuthorLink
            as="span"
            fontWeight={FontWeight.Bold}
            fontSize={FontSize.Small}
          >
            {fullName}
          </AuthorLink>
        </ArticleProperty>
      </ArticleProperties>
    </ArticleHeadingWrapper>
  );
};

export default ArticleHeading;
