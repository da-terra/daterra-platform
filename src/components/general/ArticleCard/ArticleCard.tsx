import React from "react";
import { HeadingType } from "../Heading";
import { FontSize } from "../../../data/style/variables";
import { getTagNames } from "../../../data/Tag";
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
  Tag,
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
  publishedDate,
  tags,
  title,
  author
}) => {
  const [firstTag] = getTagNames(tags);

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
            <RelativeDate>{publishedDate}</RelativeDate>
          </PublishedDate>

          <Tag serif fontSize={FontSize.Small}>
            {firstTag}
          </Tag>
        </Details>

        <Title headingType={HeadingType.Secondary} serif>
          {title}
        </Title>

        <Author>
          <Paragraph fontSize={FontSize.Small}>Geschreven door:</Paragraph>
          <Paragraph fontSize={FontSize.Small} serif>
            {author.fullName}
          </Paragraph>
        </Author>
      </CardContent>
    </Card>
  );
};
export default ArticleCard;
