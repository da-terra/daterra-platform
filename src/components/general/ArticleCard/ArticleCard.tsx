import { createPath, IArticle } from "@data-science-platform/shared";
import { differenceInSeconds } from "date-fns";
import React from "react";
import { FormattedRelativeTime } from "react-intl";
import RoutePath from "../../../data/RoutePath";
import { FontSize } from "../../../data/style/variables";
import { HeadingType } from "../Heading";
import Paragraph from "../Paragraph";
import {
  Author,
  Card,
  CardContent,
  CardImage,
  CardImageWrapper,
  Details,
  PublishedDate,
  Title
} from "./styled";

type ArticleCardProps = IArticle & {
  className?: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  className,
  slug,
  image,
  publishDate: publishDateTs,
  title,
  author
}) => {
  const publishDate = new Date(publishDateTs);

  return (
    <Card
      className={className}
      href={createPath(RoutePath.ArticleDetail, { slug })}
    >
      <CardImageWrapper>
        <CardImage {...image} />
      </CardImageWrapper>

      <CardContent color={image.fallbackColor}>
        <Details>
          <PublishedDate
            as="time"
            dateTime={publishDate.toISOString()}
            fontSize={FontSize.Small}
          >
            <FormattedRelativeTime
              value={differenceInSeconds(publishDate, new Date())}
              updateIntervalInSeconds={30}
            />
          </PublishedDate>
        </Details>

        <Title headingType={HeadingType.Secondary} serif>
          {title}
        </Title>

        {author && (
          <Author>
            <Paragraph fontSize={FontSize.Small}>Geschreven door:</Paragraph>
            <Paragraph fontSize={FontSize.Small} serif>
              {author.displayName}
            </Paragraph>
          </Author>
        )}
      </CardContent>
    </Card>
  );
};
export default ArticleCard;
