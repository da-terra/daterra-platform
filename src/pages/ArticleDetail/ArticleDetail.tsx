import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {
  SplashScreen,
  ArticleHero,
  ArticleHeading,
  BlockRenderer
} from "./styled";
import { useParams } from "react-router";

const graphqlQuery = loader("./article.graphql");

// Dynamic import for error page
const ErrorPage = React.lazy(() => import("../Error"));

type QueryResponse = {
  article: IArticle;
};

const ArticleOverview: React.FC = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery<QueryResponse>(graphqlQuery, {
    variables: { slug }
  });

  if (error) {
    return <ErrorPage apolloError={error} />;
  }

  if (loading || !data) {
    return <SplashScreen />;
  }

  const blocks = data.article.blocks.map(block => JSON.parse(block));

  return (
    <Fragment>
      <ArticleHero {...data.article} inverted />

      <ArticleHeading {...data.article} />

      <BlockRenderer blocks={blocks} />
    </Fragment>
  );
};

export default ArticleOverview;
