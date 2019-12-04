import React from "react";
import { formatDistanceToNow } from "date-fns";
import {
  ArticleHeadingWrapper,
  Heading,
  ArticleProperties,
  ArticleProperty,
  PublishedDate,
  AuthorLink
} from "./styled";
import { WrapperWidth } from "../../general/Wrapper";
import { FontWeight, FontColor, FontSize } from "../../../data/style/variables";

type ArticleHeadingProps = {
  title: React.ReactNode;
  publishedDate: string;
  category: string;
  author: IUser;
};

const formateDistanceToNowOptions = {
  addSuffix: true,
  includeSeconds: true
};

const ArticleHeading: React.FC<ArticleHeadingProps> = ({
  title,
  category,
  publishedDate,
  author: { fullName, email }
}) => {
  const timeDistance = formatDistanceToNow(
    new Date(publishedDate!),
    formateDistanceToNowOptions
  );

  const mailToHref = `mailto:${email}`;

  return (
    <ArticleHeadingWrapper width={WrapperWidth.Smaller}>
      <Heading>{title}</Heading>

      <ArticleProperties>
        <ArticleProperty
          as="span"
          fontWeight={FontWeight.Black}
          fontColor={FontColor.Secondary}
          fontSize={FontSize.Small}
        >
          {category}
        </ArticleProperty>

        <ArticleProperty as="span">
          <PublishedDate
            as="time"
            dateTime={publishedDate}
            fontWeight={FontWeight.Bold}
            fontColor={FontColor.Secondary}
            fontSize={FontSize.Small}
          >
            {timeDistance}
          </PublishedDate>

          <AuthorLink
            href={mailToHref}
            fontWeight={FontWeight.Bold}
            fontColor={FontColor.Secondary}
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
