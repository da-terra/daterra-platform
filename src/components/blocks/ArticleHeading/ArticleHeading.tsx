import { IArticle } from "@data-science-platform/shared";
import { differenceInSeconds } from "date-fns";
import React from "react";
import { FormattedRelativeTime } from "react-intl";
import { FontSize, FontWeight } from "../../../data/style/variables";
import { WrapperWidth } from "../../general/Wrapper";
import {
  ArticleHeadingWrapper,
  ArticleProperties,
  ArticleProperty,
  AuthorLink,
  PublishedDate,
  Title
} from "./styled";

type ArticleHeadingProps = IArticle & {
  className?: string;
  width?: WrapperWidth;
};

const ArticleHeading: React.FC<ArticleHeadingProps> = ({
  title,
  publishDate: publishDateTs,
  author,
  className,
  width = WrapperWidth.Smaller
}) => {
  const { displayName } = author ?? {};

  const publishDate = new Date(publishDateTs);
  const diff = differenceInSeconds(new Date(publishDate), new Date());

  return (
    <ArticleHeadingWrapper width={width} className={className}>
      <Title>{title}</Title>

      <ArticleProperties>
        <ArticleProperty as="span">
          <PublishedDate
            as="time"
            dateTime={publishDate.toISOString()}
            fontWeight={FontWeight.Bold}
            fontSize={FontSize.Small}
          >
            <FormattedRelativeTime value={diff} updateIntervalInSeconds={30} />
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
