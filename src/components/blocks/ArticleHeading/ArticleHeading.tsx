import React from "react";
import { IArticle } from "@data-science-platform/shared";
import { FontWeight, FontSize } from "../../../data/style/variables";
import { WrapperWidth } from "../../general/Wrapper";
import {
  ArticleHeadingWrapper,
  Title,
  RelativeTime,
  ArticleProperties,
  ArticleProperty,
  PublishedDate,
  AuthorLink
} from "./styled";

type ArticleHeadingProps = IArticle & {
  className?: string;
  width?: WrapperWidth;
};

const ArticleHeading: React.FC<ArticleHeadingProps> = ({
  title,
  publishDate,
  author,
  className,
  width = WrapperWidth.Smaller
}) => {
  const { displayName } = author ?? {};

  return (
    <ArticleHeadingWrapper width={width} className={className}>
      <Title>{title}</Title>

      <ArticleProperties>
        <ArticleProperty as="span">
          <PublishedDate
            as="time"
            dateTime={publishDate}
            fontWeight={FontWeight.Bold}
            fontSize={FontSize.Small}
          >
            <RelativeTime>{publishDate}</RelativeTime>
          </PublishedDate>

          <AuthorLink
            as="span"
            fontWeight={FontWeight.Bold}
            fontSize={FontSize.Small}
          >
            {displayName}
          </AuthorLink>
        </ArticleProperty>
      </ArticleProperties>
    </ArticleHeadingWrapper>
  );
};

export default ArticleHeading;
