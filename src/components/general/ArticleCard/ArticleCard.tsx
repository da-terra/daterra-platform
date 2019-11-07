import React from "react";
import { HeadingType } from "../Heading";
import { FontSize } from "../../../data/style/variables";
import RelativeDate from "../../util/RelativeDate";
import {
  Card,
  CardImage,
  CardContent,
  Details,
  PublishedDate,
  Tag,
  Title,
  Author,
  Paragraph
} from "./styled";

type ArticleCardProps = {
  className?: string;
  image: {
    src: string;
    alt: string;
    fallbackColor: string;
  };
  color: string;
  publishedDate: string;
  tag: string;
  title: string;
  author: {
    name: string;
  };
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  className,
  image,
  color,
  publishedDate,
  tag,
  title,
  author
}) => (
  <Card className={className}>
    <CardImage {...image} />

    <CardContent color={color}>
      <Details>
        <PublishedDate as="time" fontSize={FontSize.Small}>
          <RelativeDate>{publishedDate}</RelativeDate>
        </PublishedDate>

        <Tag serif fontSize={FontSize.Small}>
          {tag}
        </Tag>
      </Details>

      <Title headingType={HeadingType.Secondary} serif>
        {title}
      </Title>

      <Author>
        <Paragraph fontSize={FontSize.Small}>Geschreven door:</Paragraph>
        <Paragraph fontSize={FontSize.Small} serif>
          {author.name}
        </Paragraph>
      </Author>
    </CardContent>
  </Card>
);

export default ArticleCard;
