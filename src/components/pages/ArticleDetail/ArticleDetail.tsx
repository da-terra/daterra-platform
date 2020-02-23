import { useQuery } from "@apollo/react-hooks";
import { IArticle } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment } from "react";
import { useParams } from "react-router";
import ArticleHeading from "../../blocks/ArticleHeading";
import ArticleHero from "../../blocks/ArticleHero";
import RichText from "../../blocks/RichText";
import SplashScreen from "../../general/SplashScreen";

const graphqlQuery = loader("./article.graphql");

type QueryResponse = {
  article: IArticle;
};

const ArticleOverview: React.FC = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery<QueryResponse>(graphqlQuery, {
    variables: { slug }
  });

  if (error) {
    throw error;
  }

  if (loading || !data) {
    return <SplashScreen />;
  }

  const [richText] = data.article.richText;

  return (
    <Fragment>
      <ArticleHero {...data.article} inverted />

      <ArticleHeading {...data.article} />

      <RichText nodes={JSON.parse(richText.nodes)} />
    </Fragment>
  );
};

export default ArticleOverview;
