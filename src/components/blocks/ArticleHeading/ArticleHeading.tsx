import React from "react";
import { formatDistanceToNow } from "date-fns";
import { FontWeight, FontSize } from "../../../data/style/variables";
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
  publishedDate: string;
  category: string;
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
  category,
  publishedDate,
  author: { fullName, email },
  className,
  width = WrapperWidth.Smaller
}) => {
  const timeDistance = formatDistanceToNow(
    new Date(publishedDate!),
    formateDistanceToNowOptions
  );

  const mailToHref = `mailto:${email}`;

  return (
    <ArticleHeadingWrapper width={width} className={className}>
      <Title>{title}</Title>

      <ArticleProperties>
        <ArticleProperty
          as="span"
          fontWeight={FontWeight.Black}
          fontSize={FontSize.Small}
        >
          {category}
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
            href={mailToHref}
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
