import React from "react";
import { IArticle } from "@data-science-platform/shared";
import { HeadingType } from "../Heading";
import { FontSize } from "../../../data/style/variables";
import RoutePath from "../../../data/RoutePath";
import RelativeDate from "../../util/RelativeDate";
import createPath from "../../../util/createPath";
import {
  Card,
  CardImageWrapper,
  CardImage,
  CardContent,
  Details,
  PublishedDate,
  Title,
  Author,
  Paragraph
} from "./styled";

type ArticleCardProps = IArticle & {
  className?: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  className,
  slug,
  image,
  publishDate,
  title,
  author
}) => {
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
          <PublishedDate as="time" fontSize={FontSize.Small}>
            <RelativeDate>{publishDate}</RelativeDate>
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
